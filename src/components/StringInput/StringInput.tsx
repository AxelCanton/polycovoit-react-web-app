import * as React from 'react';
import { Input } from '@mui/material';
import { IStringInputOptionalProps, IStringInputProps } from './stringInput.type';
import "./StringInput.css"

const defaultProps: IStringInputOptionalProps = {
    disabled: false,
    placeholder: '',
    className: ''
}

const StringInput = ({
    value,
    onChange,
    disabled,
    placeholder,
    className
}: IStringInputProps) => {
    return <Input
    value={value}
    onChange={onChange}
    disabled={disabled} 
    placeholder={placeholder}
    className={className}
    />
}

StringInput.defaultProps = defaultProps;

export default StringInput;