import authController from '../controllers/auth.controller';

export default [
	{
		method: 'post',
		path: '/login',
		handler: authController.login,
	},
	{
		method: 'post',
		path: '/register',
		handler: authController.register,
	}
]