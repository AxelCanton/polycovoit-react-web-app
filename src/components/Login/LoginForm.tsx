import React, { useState } from 'react';
import { EventChangeType } from '../../utils/types/event.type';
import Button from '../Button/Button';
import { ILoginFormOptionalProps, ILoginFormProps } from './loginForm.type';
import './LoginForm.css'
import { Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import CustomDivider from '../CustomDivider/CustomDivider';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CustomIcon from '../CustomIcon/CustomIcon';
import { ButtonSize, ButtonType } from '../../utils/enum/button.enum';

const defaultProps: ILoginFormOptionalProps = {
  isLoading: false
};

const POLY_ICON_PATH = 'polytechIcon';

const USERNAME_EMPTY_ERROR_MESSAGE = 'Vous devez spécifier un nom d\'utilisateur';
const PASSWORD_INVALID_ERROR_MESSAGE = 'Mot de passe incorrect';

const LoginForm = ({
  isLoading,
  onLoginClick
}: ILoginFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const onUsernameChange = (event: EventChangeType) => setUsername(event.target.value);

  const onPasswordChange = (event: EventChangeType) => setPassword(event.target.value);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let success = true;
    if (username === '') {
      setUsernameErrorMessage(USERNAME_EMPTY_ERROR_MESSAGE);
      success = false;
    }
    if (password === '') {
      setPasswordErrorMessage(PASSWORD_INVALID_ERROR_MESSAGE);
      success = false;
    }
    if (success) {
      onLoginClick(username, password);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Grid spacing={4} container alignItems="center" direction="column">
        <Grid item container sx={{ marginTop: 4 }}>
          <Grid item xs={2}>
            <CustomIcon path={`${POLY_ICON_PATH}/polytechIcon.png`} width={50} height={50} />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h4">Entrez vos identifiants</Typography>
          </Grid>
        </Grid>
        <CustomDivider spacing={4} />
        <Grid container alignItems="center" direction="column" spacing={7}>
          <Grid item sx={{ width: '80%' }}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle sx={{ color: 'action.active' }} />
                  </InputAdornment>
                ),
              }}
              helperText={usernameErrorMessage}
              error={usernameErrorMessage !== ''}
              id="username"
              label="Nom d'utilisateur polytech"
              variant="standard"
              required
              value={username}
              onChange={onUsernameChange}
              sx={{ width: "80%" }}
            />
          </Grid>

          <Grid item sx={{ width: '80%' }}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyIcon sx={{ color: 'action.active' }} />
                  </InputAdornment>
                ),
              }}
              helperText={passwordErrorMessage}
              error={passwordErrorMessage !== ''}
              id="password"
              label="Mot de passe"
              variant="standard"
              required
              type="password"
              value={password}
              onChange={onPasswordChange}
              sx={{ width: "80%" }}
              />
          </Grid>
        </Grid>
        <Grid item justifyContent="center">
          <Button size={ButtonSize.Large} isLoading={isLoading} type={ButtonType.Submit}>Se connecter</Button>
        </Grid>
      </Grid>
    </form>
  );
};

LoginForm.defaultProps = defaultProps;

export default LoginForm;
