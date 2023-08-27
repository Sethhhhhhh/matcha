import dotenv from 'dotenv';

dotenv.config({
	silent: true,
});

/* Allowed Domains */

const allowedDomains = [
	process.env.FRONTEND_URL,
	process.env.API_URL,
];

/* Cors */

const cors = {
	accessControlAllow: '*'
}

/* Database */

const db = {
	postgres: {
		user:  process.env.POSTGRES_USER,
		host:  process.env.POSTGRES_HOST,
		database:  process.env.POSTGRES_DB,
		password:  process.env.POSTGRES_PASSWORD,
		port:  process.env.POSTGRES_PORT,
	}
}

const server = {
	port: process.env.SERVER_PORT,
	website: process.env.SERVER_WEBSITE,
	api: process.env.SERVER_API,
	frontPort: process.env.SERVER_FRONT_PORT,
}

const jwt = {
	secret: process.env.JWT_SECRET,
	expireIn: process.env.JWT_EXPIRE_IN,
	cookieExpireIn: process.env.JWT_COOKIE_EXPIRE_IN,
}
module.exports = {
	allowedDomains,
	cors,
	db,
	server,
	jwt,
};
