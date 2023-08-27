import { useForm } from "react-hook-form";
import FormField from "../common/FormField/FormField";
import Input from "../common/Input/Input";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormField
				name="email"
				label="Email"
				error={errors?.email}
			>
				<Input
					type="email"
					name="email"
					{...register("email", { required: "Email is required" })}
				/>
			</FormField>
			<FormField
				name="password"
				label="Password"
				error={errors?.password}
			>
				<Input
					type="password"
					name="password"
					{...register("password", { required: "Password is required" })}
				/>
			</FormField>
			<Input type="submit" value="Login" />
		</form>
	)
}

export default Login;