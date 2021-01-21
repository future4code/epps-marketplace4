import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// import logo from '../imagem/logo.png';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// import logo from '../imagem/user-logo.png';
// import { Logo } from './styled';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import MainInputSearch from './InputSearch'

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


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Logo />
          <Typography variant="h6" className={classes.title}></Typography>
          <MainInputSearch/>
          <div>
            <AddShoppingCartIcon/>
            <Button color="inherit"> Login | Cadastrar</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

