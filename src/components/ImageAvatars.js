import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { BrowserRouter as Link } from 'react-router-dom';


export default function ImageAvatars() {
    return (
        
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', m: 2 }}>
                <Stack direction="row" spacing={1.5}>
                    <Link to="/Jonny">
                    <Avatar alt="Jonny Green" src="./images/jonny.jpg" sx={{ width: 56, height: 56 }} />
                    </Link>
                    <Link to="/Duck">
                    <Avatar alt="Alex Duckett" src="./images/duck.jpg" sx={{ width: 56, height: 56 }} />
                    </Link>
                    <Link to="/Matty">
                    <Avatar alt="Matty Bent" src="./images/matty.jpg" sx={{ width: 56, height: 56 }} />
                    </Link>
                    <Link to="/steel">
                    <Avatar alt="Adam Steel" src="./images/steel.jpg" sx={{ width: 56, height: 56 }} />
                    </Link>
                    <Link to="/Sam">
                        <Avatar alt="Sam Glaves" src="./images/sam.jpg" sx={{width:56, height:56}}/>
                    </Link>
                </Stack>
            </Box>

        
    );
}
