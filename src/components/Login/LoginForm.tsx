import React, { useState } from 'react';
import { EventChangeType, EventClickType } from '../../utils/types/event.type';
import Button from '../Button/Button';
import { ILoginFormOptionalProps, ILoginFormProps } from './loginForm.type';
import './LoginForm.css'
import { Box, FormControl, Grid, TextField, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import CustomDivider from '../CustomDivider/CustomDivider';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CustomIcon from '../CustomIcon/CustomIcon';

const defaultProps: ILoginFormOptionalProps = {
  isLoading: false
};

const POLY_ICON_PATH = 'polytechIcon'

const LoginForm = ({
  isLoading,  
  onLoginClick
}: ILoginFormProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onUsernameChange = (event: EventChangeType) => setUsername(event.target.value);
    
    const onPasswordChange = (event: EventChangeType) => setPassword(event.target.value);

    const onValidation = (event: EventClickType) => onLoginClick(username, password);
    
    return (
      <>
        <Grid container alignItems="center" direction="column" sx={{width:510, height:440}}>
          <Grid item sx={{width:'80%'}}>
            <Grid container sx={{marginTop:4}}>
              <Grid item xs={2}>
                <CustomIcon path={`${POLY_ICON_PATH}/polytechIcon.png`} width={50} height={50}/>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h4">Entrez vos identifiants</Typography>
              </Grid>
            </Grid>       
            <CustomDivider spacing={5}/>
          </Grid>
          <Grid item sx={{marginBottom:5,width:'80%'}}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 2.5 }} />
            <TextField id="username" label="Nom d'utilisateur polytech" variant="standard" required value={username} onChange={onUsernameChange} sx={{width:"80%"}}/>
          </Grid>

          <Grid item sx={{marginBottom:5,width:'80%'}}>
            <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 2.5 }} />
            <TextField id="password" label="Mot de passe" variant="standard" required type="password" value={password} onChange={onPasswordChange} sx={{width:"80%"}}/>
          </Grid>
          <Grid container sx={{width:'80%', height:50}} justifyContent="center">
            <Button onClick={onValidation}>Se connecter</Button>
          </Grid>
        </Grid>
      </>
    );
};

LoginForm.defaultProps = defaultProps;

export default LoginForm;
