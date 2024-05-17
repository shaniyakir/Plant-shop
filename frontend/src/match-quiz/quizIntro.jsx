import Typography from '@mui/material/Typography';

function QuizIntro() {

    return (
        <Typography
        variant= 'h6'
        align= 'center'
        paragraph= 'true'
        sx={{
          fontFamily: 'monospace',
          letterSpacing: '.2rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
        >
            Answer only 3 questions about yourself and we will help you choose your perfect plant.<br />
            Let's get started!  
        </Typography>
  );
}

export default QuizIntro;
