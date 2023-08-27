import classes from './Input.module.scss';
import cn from 'classnames';

const Input = ({
	component: Component = 'input',
	type = 'text',
	name,
	...otherProps
}) => {
	return (
		<Component
			className={cn(classes.root, classes[type])}
			type={type}
			name={name}
			{...otherProps}
		/>
	)
}

export default Input;