// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MenuIcon from '@mui/icons-material/Menu';
// import { NavLink } from 'react-router-dom';

// export default function BasicMenu() {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     return (
//         <div>
//             <Button
//                 id="basic-button"
//                 aria-controls={open ? 'basic-menu' : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? 'true' : undefined}
//                 onClick={handleClick}
//             >
//                 <MenuIcon />
//             </Button>
//             <Menu
//                 id="basic-menu"
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//                 MenuListProps={{
//                     'aria-labelledby': 'basic-button',
//                 }}
//             >
//                 <MenuItem onClick={handleClose}><NavLink to="/" >Home</NavLink></MenuItem>
//                 <MenuItem onClick={handleClose}><NavLink to="/Jonny" >Jonny</NavLink></MenuItem>
//                 <MenuItem onClick={handleClose}><NavLink to="/Duck" >Duckett</NavLink></MenuItem>
//                 <MenuItem onClick={handleClose}><NavLink to="/Matty" >Matty</NavLink></MenuItem>
//                 <MenuItem onClick={handleClose}><NavLink to="/Sam" >Sam</NavLink></MenuItem>
//                 <MenuItem onClick={handleClose}><NavLink to="/Steel" >Steel</NavLink></MenuItem>
//             </Menu>
//         </div>
//     );
// }

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon sx={{ width: 28, height: 28, color: 'secondary.200' }} />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}><NavLink to="/" >Home</NavLink></MenuItem>
                <Menu
                    id="golfers-submenu"
                    anchorEl={open ? document.getElementById('golfers-submenu') : null}
                    open={Boolean(document.getElementById('golfers-submenu')?.getAttribute('aria-expanded'))}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'golfers-submenu',
                    }}
                >
                    <MenuItem onClick={handleClose}><NavLink to="/Jonny" >Jonny</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to="/Duck" >Duckett</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to="/Matty" >Matty</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to="/Sam" >Sam</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to="/Steel" >Steel</NavLink></MenuItem>
                </Menu>
                <MenuItem onClick={() => {
                    if (open) {
                        document.getElementById('golfers-submenu').setAttribute('aria-expanded', 'true');
                    }
                }}
                    onMouseOver={() => {
                        if (open) {
                            document.getElementById('golfers-submenu').setAttribute('aria-expanded', 'true');
                        }
                    }}
                    onMouseLeave={() => {
                        document.getElementById('golfers-submenu').setAttribute('aria-expanded', 'false');
                    }}
                    id="golfers-submenu"
                >
                    Golfer
                </MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/MoneyList" >2023 MoneyList</NavLink></MenuItem>
            </Menu>
        </div>
    );
}
