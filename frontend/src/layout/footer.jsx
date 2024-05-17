import Image from '../components/BazarImage';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from '@mui/material/styles/styled';
import Link from '@mui/material/Link';
import mainPic from '../assets/greenWall.jpeg';
import SpaIcon from '@mui/icons-material/Spa';


const StyledLink = styled('a')(({
    theme
}) => ({
    position: 'relative',
    display: 'block',
    padding: '0.3rem 0rem',
    color: '#04371E',
    cursor: 'pointer',
    borderRadius: 4,
    '&:hover': {
        color: theme.palette.grey[100]
    }
}));

const Footer = () => {
    return (
        <footer>
            <Box bgcolor="#748E81">
                <Container sx={{
                    p: '1rem',
                    color: 'white'
                }}>
                    <Box py={10} overflow="hidden">
                        <Grid container spacing={3}>
                            <Grid item lg={2} md={6} sm={6} xs={12}>
                                <SpaIcon fontSize='medium'></SpaIcon>
                            </Grid>
                            <Grid item lg={2} md={6} sm={6} xs={12}>
                                <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1" color="white" fontFamily="Playfair Display">
                                    About Us
                                </Box>

                                <div>
                                    {aboutLinks.map(({text, href}, ind) => (
                                        <StyledLink href={href} key={ind}>{text}</StyledLink>
                                    ))}
                                </div>
                            </Grid>
                            <Grid item lg={3} md={6} sm={6} xs={12}>
                                <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1" color="white" fontFamily="Playfair Display">
                                    Contact Us
                                </Box>
                                <Box py={0.6} color="#04371E">
                                    Email: <Link href="mailto:planty@gmail.com" target="_blank" sx={{color:'#04371E'}}>planty@gmail.com</Link>
                                </Box>
                                <Box py={0.6} color="#04371E">
                                    Phone: +972-525381648
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </footer>
    );
};

const aboutLinks = [{
    text: 'Terms & Conditions',
    href: '/terms'
}, {
    text: 'Refund Policy',
    href: '/refund'
}, {
    text: 'About Us',
    href: '/about'
}];


export default Footer;
