import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { Spacing } from '@mui/system';

export default function ImageAvatars() {
    return (
        <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center', m: 2}} >
        <Stack direction="row" spacing={2}>
            <Avatar alt="Jonny Green" src="./images/jonny.jpg" />
            <Avatar alt="Alex Duckett" src="./images/duck.jpg" />
            <Avatar alt="Matty Bent" src="./images/matty.jpg" />
            <Avatar alt="Adam Steel" src="./images/steel.jpg" />
            <Avatar alt="Sam Glaves" src="./images/sam.jpg" />
        </Stack>
        </Box>
    );
}