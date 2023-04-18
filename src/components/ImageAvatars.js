import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Badge } from '@mui/material';


export default function ImageAvatars() {
    return (

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', m: 2 }}>
            <Stack direction="row" spacing={2} sx={{mb:2}}>
                <Link to="/Jonny">
                    <Avatar alt="Jonny Green" src="./images/jonny.jpg" sx={{ width: 56, height: 56 }} />
                </Link>
                <Link to="/Duck">
                    <Avatar alt="Alex Duckett" src="./images/duck.jpg" sx={{ width: 56, height: 56 }} />
                </Link>
                <Link to="/Matty">
                    <Avatar alt="Matty Bent" src="./images/matty.jpg" sx={{ width: 56, height: 56 }} />
                </Link>
                <Link to="/Lewis">
                    <Avatar alt="Lewis Evans" src="./images/lewis.jpg" sx={{ width: 56, height: 56 }} />
                </Link>
            </Stack>
            <Stack direction="row" spacing={2}>

                <Link to="/Phil">
                    <Avatar alt="Phil Green" src="./images/phil.jpg" sx={{ width: 56, height: 56 }} />
                </Link>
                <Badge badgeContent={<LocalHospitalIcon color='warning' />}>
                    <Link to="/Sam">
                        <Avatar alt="Sam Glaves" src="./images/sam.jpg" sx={{ width: 56, height: 56 }} />
                    </Link>
                </Badge>
                <Link to="/steel">
                    <Badge badgeContent={<LocalHospitalIcon color='error' />}  >
                        <Avatar alt="Adam Steel" src="./images/steel.jpg" sx={{ width: 56, height: 56 }} />
                    </Badge>
                </Link>
            </Stack>
        </Box>


    );
}
