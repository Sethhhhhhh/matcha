import UserController from '../controllers/user.controller';
import { isLogin } from '../middlewares/auth.middleware';
import { createUser } from '../validators/user.validator';
import { handleValidationErrors } from '../validators';

export default [
	{
		method: 'get',
		path: '/users',
		handler: UserController.getAll,
		middlewares: [isLogin],
	},
	{
		method: 'get',
		path: '/user/:id',
		handler: UserController.get,
		middlewares: [isLogin],
	},
	{
		method: 'put',
		path: '/user/:id',
		handler: UserController.update,
		middlewares: [isLogin],
	},
	{
		method: 'delete',
		path: '/user/:id',
		handler: UserController.delete,
		middlewares: [isLogin],
	},
	{
		method: 'post',
		path: '/user',
		handler: UserController.create,
		middlewares: [createUser, handleValidationErrors],
	}
]