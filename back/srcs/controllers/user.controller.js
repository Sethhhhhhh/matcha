import { PrismaClient } from "@prisma/client";
import UserErrorManager from "../errors/user.error";
import UserService from "../services/user.service";
import { validationResult } from "express-validator";

export default class UserController {
	static prisma = new PrismaClient();
	
	static async get(req, res) {
		const userErrorManger = new UserErrorManager(res);
		const { userId } = req.params;
		
		try {
			const user = await UserService.get({ id: userId });
			return res.json(user);
		} catch (err) {
			return userErrorManger.serverError(err);
		}

	}

	static async getAll(req, res) {
		const userErrorManger = new UserErrorManager(res);

		try {
			const users = await UserService.getAll({});
			return res.json(users);
		} catch (err) {
			return userErrorManger.serverError(err);
		}
	}

	static async update(req, res) {
		const userErrorManger = new UserErrorManager(res);
		const { userId } = req.params;
		const { email, role } = req.body;
		const data = {};

		if (email) data.email = email;
		if (role) data.role = role;

		try {
			const user = await UserService.update({ id: userId }, data);
			return res.json(user);
		} catch (err) {
			return userErrorManger.serverError(err);
		}

	}

	static async delete(req, res) {
	}

	static async create(req, res) {
		const userErrorManger = new UserErrorManager(res);
		const body = validationResult(req);
		if (!body.isEmpty())
			return userErrorManger.missingParams(body.errors.map((err) => err.param));

		try {
			const user = await UserService.create(req.body);
			return res.json({});
		} catch (err) {
			return userErrorManger.serverError(err);
		}
	}
}