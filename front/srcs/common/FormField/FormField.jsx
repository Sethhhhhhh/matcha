import cn from 'classnames';
import classes from './FormField.module.scss';

const FormField = ({
	name,
	label,
	error,
	children,
}) => {
	return (
		<div
			className={cn(classes.root)}
		>
			<label htmlFor={name}>
				{label}
			</label>
			{children}
			{!!error && <span>{error.message}</span>}
		</div>
	)
}

export default FormField;