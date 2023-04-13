import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';

import './ImageAvatars.css';

export default function ImageAvatars() {
    const [name, setName] = useState('');

    const handleAvatarClick = (name) => {
        // navigate to the user's page using the name
        // you can use a router library like react-router-dom to handle the navigation
        console.log(`Navigating to ${name}'s page...`);
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', m: 2 }}>
            <Stack direction="row" spacing={2}>
                <button className="avatar-button" onClick={() => handleAvatarClick('Jonny')}>
                    <Avatar alt="Jonny Green" src="./images/jonny.jpg" />
                </button>
                <button className="avatar-button" onClick={() => handleAvatarClick('Duckett')}>
                    <Avatar alt="Alex Duckett" src="./images/duck.jpg" />
                </button>
                <button className="avatar-button" onClick={() => handleAvatarClick('Matty')}>
                    <Avatar alt="Matty Bent" src="./images/matty.jpg" />
                </button>
                <button className="avatar-button" onClick={() => handleAvatarClick('Steel')}>
                    <Avatar alt="Adam Steel" src="./images/steel.jpg" />
                </button>
                <button className="avatar-button" onClick={() => handleAvatarClick('Sam')}>
                    <Avatar alt="Sam Glaves" src="./images/sam.jpg" />
                </button>
            </Stack>
        </Box>
    );
}
