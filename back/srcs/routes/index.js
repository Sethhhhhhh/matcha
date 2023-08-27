import { Router } from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import { isArray, isFunction } from 'lodash';

const routes = [
	...authRoutes,
	...userRoutes,
];

export const initRoutes = (app) => {
	const router = Router();

	routes.forEach((route) => {
		const middlewaresFunc = async (req, res, next) => {
			// if (!route.middlewares) return next()

			// for (const middleware of route.middlewares) {
			// 	if (!isFunction(middleware)) {
			// 		for (const func of middleware) {
			// 			await func(req, res, next);
			// 		}
			// 	} else await middleware(req, res, next);
			// }

			await route.handler(req, res, next);
		}

		router[route.method.toLowerCase()](route.path, middlewaresFunc)
		console.log(`Route ${route.method} ${route.path} is initialized`)
	});

	app.use(router);
}