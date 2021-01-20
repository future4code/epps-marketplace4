import React from 'react'
<<<<<<< HEAD
import  AppContainer from './components/AppContainer'
import Header from '../src/components/Header/Header'
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core";
=======
import Header from "./components/Header"
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core";
import Footer from "./components/Footer";
>>>>>>> 2ac9ff0fa113efa5d87fed503b887b021ac74905

export default function App() {

 
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#F28C0F'
        },
       
    }
}); 

return(
		<div>
       <CssBaseline/>
	   <ThemeProvider theme={theme}>
		<Header/>
<<<<<<< HEAD
		<AppContainer/>
	   </ThemeProvider>
	   
		  
=======
	   </ThemeProvider>
	   
		   <Footer/>
>>>>>>> 2ac9ff0fa113efa5d87fed503b887b021ac74905
	   
		</div>
	)
}

<<<<<<< HEAD
=======

>>>>>>> 2ac9ff0fa113efa5d87fed503b887b021ac74905
