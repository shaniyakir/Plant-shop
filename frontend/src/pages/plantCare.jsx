import './plantCare.css';
import lightPic from '../assets/light.jpg';
import humidityPic from '../assets/light.jpeg';
import bgImage from '../assets/products.jpg';
import plantCarePic from '../assets/plantCare.jpg';
import lovePlantPic from '../assets/lovePlant.jpg';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/material';
import Button from '@mui/material/Button';
import StepConnector from '@mui/material/StepConnector';
import Link from '@mui/material/Link'

const intro = 'In Planty we believe in the power of plants and we believe plants deserve to be well taken care of. This guide will help you keep your houseplants happy and healthy, from knowing how often to water to providing the correct amount of light, here are the best tips.'
const light = 'Before you buy a houseplant, make sure your house can provide the amount of light that plant needs. For example, if you buy a cacti, you will need a window that provides bright light (or a supplemental light).When you first bring a plant home, it’s normal for the plant to drop a few leaves as it gets used to its new space. If the lighting is to its liking, it will soon adjust. How do you know if plants aren’t getting enough light? The plant will not flower, it will show little new growth or spindly (leggy) growth, or it will lose its lower leaves. On the other hand, if the edges of a plant’s leaves scorch, or the leaves bleach out or appear dull, then the light may be too bright.'
const artificialLight = 'If you don’t have a bright window in your home, you can still grow plants that require medium to high light levels. Place the plant next to the brightest window you have and use artifical lighting to provide extra light. This is especially important in the darker winter months. Fancy “grow” bulbs and red-blue LEDs aren’t necessary for your average houseplant, so don’t bother spending hundreds on a complicated setup. A “daylight” or “full-spectrum” LED bulb that is equivalent to at least 60 watts will provide enough supplementary lighting to grow most plants indoors just fine. To grow flowering or fruiting plants indoors, you will need something stronger, however. Learn about using grow lights to grow veggies indoors.'
const water = 'Believe it or not, more houseplants die from overwatering than from anything else! Most houseplants can not tolerate soil that is always wet. Some succulent plants (such as cacti or jade) can survive a month or two without watering. Learn the preferences of your plants. The first step, of course, is to ensure the bottom of your pot has drainage holes. Otherwise, you will need to repot the plant into a pot that does provide sufficient drainage. If a plant sits in wet soil for too long, it can develop root rot and die! So, how to water?'
const howToWaterTips = ['Use filtered water if your tap water contains high amounts of minerals or chemicals. Fluoride can cause the leaf tips of some houseplants, such as peace lilies, to turn brown.', 'Always water until the excess water drains out of the holes. Even plants that prefer dry soil should be watered this way (just not as frequently).', 'Water gently over the top of the soil; avoid water on the plant leaves or crown. A long-spouted watering can works best.', 'If water is not almost immediately absorbed by the soil, drainage is poor. Mix perlite, vermiculite, or sand into the soil. For best results, remove and repot the plant in the amended soil, if possible.' ]
const humidity = ['Humidity is a tough factor to perfect, as most homes are fairly dry—especially in the winter. Here are some things to consider about humidity:']
const humidityTips = ['Many of the most common houseplants come from tropical regions, where humidity is naturally high. They will be happiest when the relative humidity is kept at 50 percent or higher.', 'Plants like cactus and succulents can tolerate lower levels of humidity.', 'Group houseplants near each other to form a support group to cope with the low humidity of most homes in winter.', 'Place plants in a bathroom or kitchen where humidity is higher.']
const  fertilizer = ['Most houseplants respond well to feeding, but be sure to follow the instructions included with whichever fertilizer you buy.']
const fertilizerTips = ['Too much fertilizer can be detrimental to a plant’s health, so don’t fertilize more than necessary.', 'In winter, feed sparingly or not at all; houseplants will be especially sensitive to overfeeding at this time of year, when most go into dormancy.', 'Come spring, start to feed plants again. This, along with more hours of daylight, will help to kickstart their growing phase. Continue feeding through fall.', 'For flowering plants, use a fertilizer with more phosphorous.']
const emailUs = ['If you have any questions please contact us on']

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
  paragraph="true"
  sx={{
    mr: 2,
    fontFamily: 'monospace',
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
      <Container style={{marginTop: "50px"}}>
        {titleStyle("Tips for Keeping Indoor Plants Happy & Healthy".toUpperCase(), "h4")}
      </Container>
      <Container style={{ width: '73%', marginBottom: 30}} >
        {paragraphStyle(intro)}
      </Container>

      <StepConnector style={{marginRight: "40px", marginLeft: "40px"}}></StepConnector>

      <div style={{display: "flex", flexDirection: "row", padding: "40px"}}>
        <div style={{width: "80%"}} align="center">
          {titleStyle("LIGHT", "h6")}
          {paragraphStyle(light)}
          {paragraphStyle(artificialLight)}
        </div>
        <div style={{width: "20%"}} align="center">
          <img src={lightPic} class="image" alt="BigCo Inc. logo" style={{width: "95%", height:"95%"}}/>
        </div>
      </div>

      <StepConnector style={{marginRight: "40px", marginLeft: "40px"}}></StepConnector>

      <div style={{display: "flex", flexDirection: "row", padding: "40px"}}>
        <div style={{width: "100%"}} align="center">
          {titleStyle("WATER", "h6")}
          {paragraphStyle(water)}
          {/* {paragraphStyle(howToWater)} */}
          {howToWaterTips.map( item => {
            return (
              <li>
                <Typography
                  variant= 'subtitle1'
                  align= 'center'
                  fontSize= {18}
                  paragraph="true"
                  sx={{
                    mr: 2,
                    fontWeight: 100,
                    width: '90%',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                  >
                  {item}
                </Typography>
              </li>
            )})}
        </div>
      </div>

      <StepConnector style={{marginRight: "40px", marginLeft: "40px"}}></StepConnector>

      <div style={{display: "flex", flexDirection: "row", padding: "40px"}}>
        <div style={{width: "20%"}} align="center">
          <img src={humidityPic} class="image" alt="BigCo Inc. logo" style={{width: "95%", height:"95%", marginTop:"50px"}}/>
        </div>
        <div style={{width: "80%", paddingLeft: "20px"}}>
          {titleStyle("HUMIDITY", "h6")}
          <Typography
            variant= 'subtitle1'
            fontSize= {21}
            paragraph="true"
            sx={{
              mr: 2,
              fontWeight: 100,
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
              {humidity}
          </Typography>
          <ul>
            {humidityTips.map( item => {
              return (
                <li>
                  <Typography
                    variant= 'subtitle1'
                    fontSize= {18}
                    paragraph="true"
                    sx={{
                      mr: 2,
                      marginBottom: 0,
                      fontWeight: 100,
                      width: '80%',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                    >
                    {item}
                  </Typography>
                </li>
              )})}
            </ul>
            {titleStyle("FERTILIZER", "h6")}
            <Typography
            variant= 'subtitle1'
            fontSize= {21}
            paragraph="true"
            sx={{
              mr: 2,
              fontWeight: 100,
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
              {fertilizer}
          </Typography>
          <ul>
            {fertilizerTips.map( item => {
              return (
                <li>
                  <Typography
                    variant= 'subtitle1'
                    fontSize= {18}
                    paragraph="true"
                    sx={{
                      mr: 2,
                      marginBottom: 0,
                      fontWeight: 100,
                      width: '80%',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                    >
                    {item}
                  </Typography>
                </li>
              )})}
            </ul>
            <StepConnector style={{marginRight: "40px", marginLeft: "40px"}}></StepConnector>
        </div>
      </div>

      <div style={{display: "flex", flexDirection: "row", padding: "40px"}}>
        <div style={{width: "20%", marginTop: "55px"}} align="center">
          {titleStyle("THANK YOU FOR READING!", "h6")}  
          {paragraphStyle(emailUs)}  
          <Box py={0.6} color="#04371E">
            <Link href="mailto:planty@gmail.com" target="_blank" sx={{color:'#04371E'}}>planty@gmail.com</Link>
          </Box>   
        </div>
        <div style={{width: "80%", height: "350px"}} align="center">
            <img src={bgImage} alt="BigCo Inc. logo" style={{width: "95%", height:"95%"}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
