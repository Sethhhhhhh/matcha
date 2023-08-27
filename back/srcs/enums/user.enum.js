import { Gender } from "@prisma/client"

export const userRoles = {
	USER: 0,
	ADMIN: 1,
}

export const userFieldsSend = [
	'id',
	'email',
	'role',
	'createdAt',
	'updatedAt',
]