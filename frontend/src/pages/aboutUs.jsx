import Typography from '@mui/material/Typography';

function About() {
  return (
    <Typography
    variant="subtitle1"
    
    style={{margin: 80}}
    paragraph="true"
    sx={{
      mr: 2,
      fontFamily: 'monospace',
      fontWeight: 200,
      letterSpacing: '.2rem',
      color: 'inherit',
      textDecoration: 'none',
    }}
    >
      <h4>About Us</h4>
      
        Planty was founded in 2022 as a botanic design company. We create living installations that foster a connection to nature, bringing more plant life and awarenes to all around us.<br />
        Our focus is on the emerging field of biophilic design and collaborating with our clients to create environments that successfully incorporate nature into human spaces to make happier, healthier and more productive places to live and work.

    </Typography>

  );
}

export default About;
