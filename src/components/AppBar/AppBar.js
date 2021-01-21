import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
<<<<<<< HEAD
import logo from '../imagem/logo.png';
import { Logo } from '../AppBar/Styled';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
=======
import logo from '../imagem/user-logo.png';
import { Logo } from './styled';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


>>>>>>> 2ac9ff0fa113efa5d87fed503b887b021ac74905



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

<<<<<<< HEAD
=======

 

>>>>>>> 2ac9ff0fa113efa5d87fed503b887b021ac74905
export default function ButtonAppBar() {
  const classes = useStyles();

  return (
<<<<<<< HEAD
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Logo src={logo}/>
          <Typography variant="h6" className={classes.title}>
          
          </Typography>
          <Button> <ShoppingCartIcon/></Button>
          
          <Button color="inherit">Login|Cadastrar</Button>
=======
    <div>
      <AppBar position="static">
        <Toolbar>
         <Logo src={logo}/>
          <Typography variant="h6" className={classes.title}>
         
          </Typography>
          <AddShoppingCartIcon/>
          
          <Button color="inherit">Login|Cadastrar</Button>
         
>>>>>>> 2ac9ff0fa113efa5d87fed503b887b021ac74905
        </Toolbar>
      </AppBar>
    </div>
  );
<<<<<<< HEAD
}

=======
}
>>>>>>> 2ac9ff0fa113efa5d87fed503b887b021ac74905
