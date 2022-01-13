import React, { useState } from 'react';
import { EventChangeType, EventClickType } from '../../utils/types/event.type';
import Button from '../Button/Button';
import StringInput from '../StringInput/StringInput';
import { ILoginFormOptionalProps, ILoginFormProps } from './loginForm.type';
import LoginIcon from '@mui/icons-material/Login';
import './LoginForm.css'
import FormLayout from '../Layout/FormLayout/FormLayout';

const defaultProps: ILoginFormOptionalProps = {
  isLoading: false
};

const LoginForm = ({
  isLoading,  
  onLoginClick
}: ILoginFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (event: EventChangeType) => setEmail(event.target.value);
    
    const onPasswordChange = (event: EventChangeType) => setPassword(event.target.value);

    const onValidation = (event: EventClickType) => onLoginClick(email, password);
    
    return (
      <FormLayout title="Entrez vos identifiants" footer={<Button isLoading={isLoading} endIcon={<LoginIcon />} onClick={onValidation}>Se connecter</Button>}>
        <StringInput required value={email} onChange={onEmailChange} label="Addresse email" />
        <StringInput required type='password' value={password} onChange={onPasswordChange} label="Mot de passe" />
      </FormLayout>
    );
};

LoginForm.defaultProps = defaultProps;

export default LoginForm;