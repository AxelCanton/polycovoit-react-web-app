import React, { useState } from 'react';
import { EventChangeType, EventClickType } from '../../utils/types/event.type';
import Button from '../Button/Button';
import StringInput from '../StringInput/StringInput';
import { ILoginFormProps } from './loginForm.type';

import './LoginForm.css'

const LoginForm = ({
    onLoginClick
}: ILoginFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (event: EventChangeType) => setEmail(event.target.value);
    
    const onPasswordChange = (event: EventChangeType) => setPassword(event.target.value);

    const onValidation = (event: EventClickType) => onLoginClick(email, password);
    
    return (
      <div className="formContainer">
        <div className="cadre">
            <div className="title">
                <h1>Entrez vos identifiants</h1>
            </div>
          <div className="inputContainer">
            <StringInput className="login-form" value={email} onChange={onEmailChange} placeholder="Addresse email" />
          </div>
          <div className="inputContainer">
            <StringInput className="login-form" value={password} onChange={onPasswordChange} placeholder="Mot de passe" />
          </div>
          <div className="inputContainer">
            <Button onClick={onValidation}>Valider</Button>
          </div>
        </div>
      </div>
    );
}

export default LoginForm;