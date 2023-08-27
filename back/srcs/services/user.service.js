import { Gender, PrismaClient } from "@prisma/client";
import { genders, userFieldsSend } from "../enums/user.enum";

const prisma = new PrismaClient();

export default class UserService {
	static userToSend(user) {
		Object.keys(user).forEach((key) => {
			if (!userFieldsSend.includes(key)) delete user[key];
		});

		return user;
	}

	static async get(where) {
		try {
			const user = await prisma.user.findUnique({
				where,
			});

			return this.userToSend(user);
		} catch (err) {
			throw err;
		}
	}

	static async getAll(where) {
		try {
			const users = await prisma.user.findMany({
				where
			});

			return users.map((user) => this.userToSend(user));
		} catch (err) {
			throw err;
		}
	}

	static async update(where, data) {
		try {
			const user = await prisma.user.update({
				where,
				data,
			});

			return this.userToSend(user);
		} catch (err) {
			throw err;
		}
	}

	static async delete(where) {
		try {
			await prisma.user.delete({
				where,
			});

			return true;
		} catch (err) {
			throw err;
		}
	}

	static async create(data) {
		try {
			const user = await prisma.user.create({
				data
			});

			return this.userToSend(user);
		} catch (err) {
			throw err;
		}
	}
}