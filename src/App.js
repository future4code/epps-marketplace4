import React from 'react'
import  AppContainer from './components/AppContainer'
import Header from '../src/components/Header/Header'
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core";

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
		<AppContainer/>
	   </ThemeProvider>
	   
		  
	   
		</div>
	)
}

