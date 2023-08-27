const extractTokenFromCookies = (req) => {
	const { cookies } = req;
	const { token } = cookies;
	return token;
}

const extractTokenFromHeaders = (req) => {
	const { headers } = req;
	const { authorization } = headers;
	const token = authorization.split(' ')[1];
	return token;
}

const createToken = (user) => {
	const { id, email } = user;
	const token = jwt.sign({ id, email }, process.env.JWT_SECRET);
	return token;
}

const decodeToken = (token) => {
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	return decoded;
}