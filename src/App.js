import React from 'react'
import Header from "./components/Header"
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core";
import Footer from "./components/Footer";

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
	   </ThemeProvider>
	   
		   <Footer/>
	   
		</div>
	)
}


