import './App.css';
import mainPic from './assets/greenWall.jpeg';
import productsPic from './assets/products.jpg';
import accessoriesPic from './assets/accessories.jpg';
import plantCarePic from './assets/plantCare.jpg';
import lovePlantPic from './assets/lovePlant.jpg';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/material';
import Button from '@mui/material/Button';
import StepConnector from '@mui/material/StepConnector';



const intro = 'In Planty we believe in the power of plants. We supply  plants  and  accessories for any and all occasions as a way to treat yourself or to show love to your dear ones. We are delighted and grateful to be bringing the love of nature accross Israel.'
const products = 'We supply happy and healthy plants that were planted and grown under professional supervision.'
const accessories = 'Our plants deserve the best. We offer unique, beautiful and flawless accessories in different sizes and shapes.'
const plantCare = 'A guide of tricks and tips to make plant care easy, fun and well done.'
const findMatch = 'Planty offers a short quiz to help you find the best plant for your. Fairytale ending and living happily ever after is promised (ish).'

const paragraphStyle = (text) => (
  <Typography
  variant= 'subtitle1'
  align= 'center'
  fontSize= {21}
  paragraph="true"
  sx={{
    mr: 2,
    fontWeight: 100,
    color: 'inherit',
    textDecoration: 'none',
  }}
  >
    {text}
  </Typography>
)

const titleStyle = (title, titleType) => (
  <Typography
  variant= {titleType}
  align= 'center'
  style={{marginTop: 50}}
  paragraph="true"
  sx={{
    mr: 2,
    letterSpacing: '.2rem',
    fontWeight: '700',
    color: 'inherit',
    textDecoration: 'none',
  }}
  >
    {title}   
  </Typography>
)

function App() {

  return (
    <div>
      <img src={mainPic} alt="BigCo Inc. logo" style={{ width: '100%'}}/>
      <Container>
        {titleStyle("PLANTY IS ABOUT BLENDING THE SCIENCE OF HORTICULTURE WITH THE ART OF NATURE", "h4")}
      </Container>
      <Container style={{ width: '48%', marginBottom: 70}} >
        {paragraphStyle(intro)}
      </Container>

      <StepConnector style={{marginRight: "40px", marginLeft: "40px"}}></StepConnector>

      <div style={{display: "flex", flexDirection: "row", padding: "40px", height: "300px"}}>
        <div style={{width: "50%"}} align="center">
          {titleStyle("PRODUCTS", "h6")}
          {paragraphStyle(products)}
          <Button variant="outlined" style={{color: "#B7FD0B", borderColor: "#B7FD0B"}} href="/products">SHOP PLANTS</Button>
        </div>
        <div style={{width: "50%"}} align="center">
          <img src={productsPic} alt="BigCo Inc. logo" style={{width: "100%", height:"100%"}}/>
        </div>
      </div>

      <div style={{display: "flex", flexDirection: "row", padding: "40px", height: "300px"}}>
        <div style={{width: "50%"}} align="center">
          <img src={accessoriesPic} alt="BigCo Inc. logo" style={{width: "100%", height:"100%"}}/>
        </div>
        <div style={{width: "50%", marginLeft: "30px"}} align="center">
          {titleStyle("ACCESSORIES", "h6")}
          {paragraphStyle(accessories)}
          <Button variant="outlined" style={{color: "#B7FD0B", borderColor: "#B7FD0B"}} href="/accessories">SHOP ACCESSORIES</Button>
        </div>
      </div>

      <div style={{display: "flex", flexDirection: "row", padding: "40px", height: "300px"}}>
        <div style={{width: "50%"}} align="center">
          {titleStyle("PLANT CARE", "h6")}
          {paragraphStyle(plantCare)}
          <Button variant="outlined" style={{color: "#B7FD0B", borderColor: "#B7FD0B"}} href="/plant-care">FIND OUT MORE</Button>
        </div>
        <div style={{width: "50%"}} align="center">
          <img src={plantCarePic} alt="BigCo Inc. logo" style={{width: "100%", height:"100%"}}/>
        </div>
      </div>

      <div style={{display: "flex", flexDirection: "row", padding: "40px", height: "300px"}}>
        <div style={{width: "50%"}} align="center">
          <img src={lovePlantPic} alt="BigCo Inc. logo" style={{width: "100%", height:"100%"}}/>
        </div>
        <div style={{width: "50%", marginLeft: "30px"}} align="center">
          {titleStyle("FIND MY MATCH", "h6")}
          {paragraphStyle(findMatch)}
          <Button variant="outlined" style={{color: "#B7FD0B", borderColor: "#B7FD0B"}} href="/find-my-match">FIND OUT MORE</Button>
        </div>
      </div>

    </div>
  );
}

export default App;
