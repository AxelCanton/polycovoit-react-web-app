import React, { useState } from 'react';
import { EventChangeType, EventClickType } from '../../utils/types/event.type';
import Button from '../Button/Button';
import StringInput from '../StringInput/StringInput';
import { ILoginFormProps } from './loginForm.type';

const LoginForm = ({
    onLoginClick
}: ILoginFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (event: EventChangeType) => setEmail(event.target.value);
    
    const onPasswordChange = (event: EventChangeType) => setPassword(event.target.value);

    const onValidation = (event: EventClickType) => onLoginClick(email, password);
    
    return (
        <>
            <StringInput value={email} onChange={onEmailChange} placeholder='Addresse email' />
            <StringInput value={password} onChange={onPasswordChange} placeholder='Mot de passe' />
            <Button onClick={onValidation}>Valider</Button>
        </>
    );
}

export default LoginForm;