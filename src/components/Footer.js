import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
// import { makeStyles } from '@mui/core';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Grid } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         backgroundColor: theme.palette.primary.main,
//         color: theme.palette.common.white,
//         padding: theme.spacing(4),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'center',
//     },
//     link: {
//         color: theme.palette.common.white,
//         '&:hover': {
//             color: theme.palette.secondary.main,
//         },
//     },
//     icon: {
//         margin: theme.spacing(1),
//     },
// }));

export default function Footer() {
    // const classes = useStyles();

    return (
        // <Box position="static" sx={{ bgcolor: 'primary.900', display: 'flex', flexDirection: 'column' }}>
        //     <Typography sx={{ fontFamily: 'Montserrat' }} variant="h6" gutterBottom>
        //         The Golf Group
        //     </Typography>
        //     <Typography variant="body2" sx={{fontFamily: 'Montserrat'}} gutterBottom>
        //         © {new Date().getFullYear()} The Golf Group. All Rights Reserved.
        //     </Typography>
        //     <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        //         <Typography sx={{ fontFamily: 'Montserrat' }}>
        //         <Link href="#">
        //             Privacy Policy
        //         </Link>
        //         </Typography>
        //         <Link href="#" style={{ textDecoration: 'none', color: 'secondary.300', fontFamily:'Montserrat' }}>
        //             Terms of Use
        //         </Link>
        //     </Box>
        //     <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        //         <IconButton aria-label="Facebook">
        //             <FacebookIcon />
        //         </IconButton>
        //         <IconButton aria-label="Twitter">
        //             <TwitterIcon />
        //         </IconButton>
        //         <IconButton aria-label="Instagram">
        //             <InstagramIcon />
        //         </IconButton>
        //     </Box>
        // </Box>
        <Box
            position="static"
            sx={{ bgcolor: 'primary.900', display: 'flex', flexDirection: 'column', py: 1 }}
        >
            <Grid container direction="column" alignItems="center" spacing={1}>
                <Grid item>
                    <Typography variant="h6" sx={{ fontFamily: 'Montserrat', color: 'common.white' }}>
                        The Golf Group
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2" sx={{ fontFamily: 'Montserrat', color: 'common.white' }}>
                        © {new Date().getFullYear()} The Golf Group. All Rights Reserved.
                    </Typography>
                </Grid>
                <Grid item container justifyContent="center" spacing={2}>
                    <Grid item>
                        <Typography variant="body2" sx={{ fontFamily: 'Montserrat', color: 'common.white' }}>
                            <Link href="#" color="inherit">
                                Privacy Policy
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" sx={{ fontFamily: 'Montserrat', color: 'common.white' }}>
                            <Link href="#" color="inherit">
                                Terms of Use
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container justifyContent="center" spacing={2}>
                    <Grid item>
                        <IconButton aria-label="Facebook">
                            <FacebookIcon sx={{ color: 'common.white' }} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="Twitter">
                            <TwitterIcon sx={{ color: 'common.white' }} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="Instagram">
                            <InstagramIcon sx={{ color: 'common.white' }} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        );
}
