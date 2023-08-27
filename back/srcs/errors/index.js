export default class ErrorManager {
	constructor(res) {
		this.res = res
	}

	send(code, message) {
		return this.res.status(code).send({
			code: code,
			message: message
		})
	}

	serverError(err) {
		console.error('ERROR with  :>> ', err)
		return this.send(404, 'Server error')
	}	

	missingParams(params = []) {
		return this.send(400, `Missing params : ${params.join(', ')}`)
	}

	unauthorized() {
		return this.send(401, 'Unauthorized')
	}
}