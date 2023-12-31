import { AppBar as MuiAppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography, ListItemIcon } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import MenuButton from './MenuButton/MenuButton';
import { useNavigate } from 'react-router-dom';
import { disconnectThunk } from '../../thunks/LoginThunk';

const AppBar = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { isAuth, isAdmin } = useAppSelector((state) => state.loginReducer)
  
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const onMapClick = () => {
      navigate('/');
    };

    const onAskedResClick = () => {
      navigate('/asked-reservations');
    };

    const onWaitingResClick = () => {
      navigate('/waiting-reservations');
    };

    const onSettingsClick = () => {
      navigate('/settings');
      handleCloseUserMenu();
    }

    const onStatistiquesClick = () => {
      navigate('/admin');
    }

    const onDisconnect = () => {
      handleCloseUserMenu();
      dispatch(disconnectThunk());
    };

    return (
    <MuiAppBar sx={{ height: '7vh', minHeight: '50px'}} position="static">
      <Container maxWidth="xl">
      <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Polycontact
          </Typography>
          { isAuth && (
            <>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <MenuButton text="Carte" onClick={onMapClick}/>
              <MenuButton text="Demandes envoyées" onClick={onAskedResClick}/>
              <MenuButton text="Demandes reçues" onClick={onWaitingResClick}/>
              {isAdmin && (
                <MenuButton text="Statistiques" onClick={onStatistiquesClick}/>
              )}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon color="secondary" />
                </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                  <MenuItem onClick={onSettingsClick}>
                  <ListItemIcon>
                    <SettingsIcon fontSize="small" />
                  </ListItemIcon>
                  Paramètres
                  </MenuItem>
                  <MenuItem onClick={onDisconnect}>
                  <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                  </ListItemIcon>
                    <Typography textAlign="center">Déconnecter</Typography>
                  </MenuItem>
              </Menu>
            </Box>
          </>
          )}
        </Toolbar>
      </Container>
    </MuiAppBar>
    );
}

export default AppBar;