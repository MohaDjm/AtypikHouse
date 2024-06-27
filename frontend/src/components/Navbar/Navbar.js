import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import logo from '../../assets/logo.png'; // Importez votre image de logo
import { styled, alpha } from '@mui/material/styles';

const Logo = styled('img')(({ theme }) => ({
  height: '70px', // Ajustez la taille de l'image selon vos besoins
  [theme.breakpoints.down('sm')]: {
    height: '40px', // Adjust logo size for mobile
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  display: 'none', // Hide by default
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'flex', // Show on medium and larger screens
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  border: `1px solid ${alpha(theme.palette.common.black, 0.1)}`,
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

const NavbarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

const NavbarLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  marginRight: theme.spacing(2),
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const NavbarButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const Navbar = () => {
  return (
    <NavbarContainer position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
          <NavLink to="/home">
            <Logo src={logo} alt="AtypikHouse Logo" />
          </NavLink>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <NavLink to="/home">
            <Logo src={logo} alt="AtypikHouse Logo" />
          </NavLink>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', flexGrow: 1 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Où aller ?"
              inputProps={{ 'aria-label': 'search' }}
            />
            <StyledInputBase
              placeholder="Quand ?"
              inputProps={{ 'aria-label': 'search' }}
            />
            <StyledInputBase
              placeholder="Ajouter des voyageurs"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <NavbarLink to="/about">
            <NavbarButton color="inherit">Inscrivez votre bien</NavbarButton>
          </NavbarLink>
          <NavbarLink to="/signup">
            <NavbarButton variant="outlined" color="primary">
              S'inscrire / Se connecter
            </NavbarButton>
          </NavbarLink>
        </Box>
      </Toolbar>
    </NavbarContainer>
  );
};

export default Navbar;
