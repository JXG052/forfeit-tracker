import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import './NavBar.css'




export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='nav-bar' sx={{ bgcolor: 'primary.900' }}>
                <Toolbar >

                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                        <NavLink to="/" >The Golf Group</NavLink>
                    </Typography>
                    
                    <Button color="inherit"><NavLink to="/ForfeitTracker" >Forfeits</NavLink></Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
