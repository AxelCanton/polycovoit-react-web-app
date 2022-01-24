import { TextField } from '@mui/material';
import { IStringInputOptionalProps, IStringInputProps } from './stringInput.type';
import "./StringInput.css"
import { EventChangeType } from '../../utils/types/event.type';

const defaultProps: IStringInputOptionalProps = {
    disabled: false,
    fullWidth: false,
    label: '',
    required: false,
    type: 'string',
    className: ''
}

const StringInput = ({
    value,
    onChange,
    disabled,
    fullWidth,
    label,
    required,
    type,
    className
}: IStringInputProps) => {

    const onInputChange = (event: EventChangeType) => {
        onChange(event.target.value);
    }

    return <TextField
    value={value}
    onChange={onInputChange}
    disabled={disabled} 
    label={label}
    required={required}
    type={type}
    className={className}
    fullWidth={fullWidth}
    />
}

StringInput.defaultProps = defaultProps;

export default StringInput;