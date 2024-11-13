import _knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

export const configDB = {
	client: 'mysql2',
	connection: {
		host: process.env.HOSTDB,
		user: process.env.USERDB,
		password: process.env.PASSWORDDB,
		database: process.env.DATABASE,
	},
};

export const knex = _knex(configDB);
