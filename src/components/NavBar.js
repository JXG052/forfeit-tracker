import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import BasicMenu from './MyMenu';




export default function NavBar() {
    return (
        // <Box sx={{ flexGrow: 1 }}>
        //     <AppBar position="static" className='nav-bar' sx={{ bgcolor: 'primary.900' }}>
        //         <Toolbar >

        //             <Typography variant="h3" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
        //                 <NavLink to="/" >The Golf Group</NavLink>
        //             </Typography>
        //             <BasicMenu />
        //         </Toolbar>
        //     </AppBar>
        // </Box>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: 'primary.900' }}>
                <Toolbar sx={{ justifyContent: 'space-between', padding: '0 16px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* <Avatar alt="Logo" src="./logo.png" sx={{ width: 48, height: 48 }} /> */}
                        <Typography variant="h4" component="div" sx={{ fontFamily: 'Montserrat', marginLeft: 1 }}>
                            <NavLink to="/" style={{ textDecoration: 'none', color: 'secondary.300' }}>The Golf Group</NavLink>
                        </Typography>
                    </Box>
                    <BasicMenu />
                </Toolbar>
            </AppBar>
        </Box>
    )
}
