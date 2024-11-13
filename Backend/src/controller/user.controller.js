import { knex } from '../config/db.config.js';
import bcrypt from 'bcrypt';

export async function signup(req, res) {
	try {
		const user = req.body;
		const userV = await knex
			.select()
			.from('usuario')
			.where('email', user.email);

		console.log(userV);
		if (userV.length != 0) {
			res.status(204).send('Usuario existente');
		} else {
			const newUser = {
				...user,
				pass: await bcrypt.hash(user.pass, 10, null),
			};
			await knex.insert(newUser).from('usuario');
			res.status(200).send('Usuario agregado');
		}
	} catch (error) {
		console.log(error);
	}
}
export async function readProductoId(req, res) {
	try {
		const { email, pass } = req.body;
		const user = await knex.select().from('usuario').where('email', email);
		if (user.length != 0) {
			const isValid = await bcrypt.compare(pass, user.pass, null);
			if (isValid) {
				res.status(200).send(user);
			}
		} else {
			res.status(204).send('Correo no existe');
		}
		res.status(200).send(user);
	} catch (error) {
		console.log(error);
	}
}
