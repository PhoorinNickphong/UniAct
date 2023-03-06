import { useState } from 'react';
import logo2 from './images/logo5.png';
import '../components/login-bar.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Link from "@mui/material/Link";

const pages: [string, string][] = [['Home', '/'], ['Contact', '#contact']]


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '50%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



function LoginAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar  position="static" color='inherit' >
      <Container className='container' maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: '"Kanit", sans-serif',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#0045a4',
              textDecoration: 'none',
              
            }}
          >
             <img src={logo2} alt="My Image"  className='logo'/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } ,color:'#0045a4'}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page[0]} onClick={handleCloseNavMenu} component={Link} href={page[1]}>
                  <Typography textAlign="center">{page[0]}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: '"Kanit", sans-serif',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: '#0045a4',
              textDecoration: 'none',
              
            }}
          >
             <img src={logo2} alt="My Image"  className='logo2'/>
          </Typography>
          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}}}>
            {pages.map((page) => (
              <Button className='buttom'
                key={page[0]}
                href={page[1]}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#0045a4', display: 'block' ,fontFamily: '"Kanit", sans-serif'}}
              >
                {page[0]}
              </Button>
            ))}
          </Box>
          <Box className="Box-Search">
            <Search className='text-search'>
              <SearchIconWrapper >
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
             />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button  href={"/signin"} onClick={handleCloseNavMenu} sx={{ p: 0 }} className="button-login">
                <div className='login-text'>LOGIN</div>
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default LoginAppBar;
