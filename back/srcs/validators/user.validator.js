import { body } from "express-validator";

export const createUser = [
	body('email').isEmail(),
	body('password').isLength({ min: 8 }),
	body('role').isIn(['user', 'admin']),
];
