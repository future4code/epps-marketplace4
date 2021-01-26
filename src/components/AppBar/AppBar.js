import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Logo from '../imagem/logo.png'
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// import logo from '../imagem/user-logo.png';
// import { Logo } from './styled';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import styled from 'styled-components'

const AppBar = styled.div`
  background-color: #F28C0F;
`

const ImgLogo = styled.img`
    width: 50px;
    height: 50px;
`

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function ButtonAppBar(props) {
  const classes = useStyles();
  console.log(props)
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <ImgLogo src={Logo} />
          </Typography>
          <div>
            <span onClick={props.goToLittleCar}>
              <AddShoppingCartIcon />
            </span>

            <Button color="inherit"> Login | Cadastrar</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

