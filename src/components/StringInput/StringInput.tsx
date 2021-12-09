import * as React from 'react';
import { Input } from '@mui/material';
import { IStringInputOptionalProps, IStringInputProps } from './stringInput.type';

const defaultProps: IStringInputOptionalProps = {
    disabled: false,
    placeholder: ''
}

const StringInput = ({
    value,
    onChange,
    disabled,
    placeholder
}: IStringInputProps) => {
    return <Input
    value={value}
    onChange={onChange}
    disabled={disabled} 
    placeholder={placeholder}/>
}

StringInput.defaultProps = defaultProps;

export default StringInput;