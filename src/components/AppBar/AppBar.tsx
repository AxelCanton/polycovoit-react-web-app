import { AppBar as MuiAppBar, Container, Toolbar } from '@mui/material';
import { useAppDispatch } from '../../app/hooks';
import { loginActions } from '../../slices/LoginSlice';
import Button from '../Button/Button'

const AppBar = () => {
    const dispatch = useAppDispatch();

    const onDisconnect = () => {
        dispatch(loginActions.reset());
    }

    return (
    <MuiAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button onClick={onDisconnect}>Déconnecter</Button>
        </Toolbar>
      </Container>
    </MuiAppBar>
    );
}

export default AppBar;