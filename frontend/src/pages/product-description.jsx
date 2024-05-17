import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StepConnector from '@mui/material/StepConnector';
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Container';
import Container from '@mui/material/Container';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProductTOCart } from '../api/cartApi';
import { UserContext } from '../contexts/UserContext';




function ProductDescription() {
    const [loggedUser, setLoggedUser] = useContext(UserContext)
    const { state } = useLocation();
    const { id, name, price, quantity, description } = state;
    const theme = createTheme();
    const [suggestedItems, setSuggestedItems] = useState([]); 
    const navigate = useNavigate();
    const handleClick = (id, productName, price, quantity, description) => {
      console.log(id, productName, price, quantity, description)
      navigate('/products-description', { state: { id: id, name: productName, price: price, quantity: quantity, description: description} })
    }
    
    useEffect(() => {
      const loadAllProducts = async () => {
        try {
          await fetch('http://localhost:9000/products/products')
          .then(res => res.json())
          .then(res => {
            setSuggestedItems( res.plants.sort(() => Math.random() - Math.random()).slice(0, 4));
        })
        } catch (err) {
          console.log(err)
        }
      }
      loadAllProducts();
    },[])

  return (
    <div>
      <Typography
        variant= 'h5'
        align= 'center'
        style={{marginTop: 50}}
        paragraph="true"
        
        sx={{
          mr: 2,
          letterSpacing: '.2rem',
          fontFamily: 'monospace',
          textDecoration: 'none',
          color: '#4C5B54',
        }}
        >
          {name.toUpperCase()} <tab />  
          {price}$
      </Typography>
      <StepConnector orientation="vertical" style={{marginRight: "100px", marginLeft: "100px"}}></StepConnector>
      <div style={{display: "flex", flexDirection: "row", padding: "30px", paddingBottom: "70px"}}>
        <div style={{width: "50%"}} align="center">
          <img src={require("../assets/products/"+id.toString()+".webp")} alt="plant picture" style={{width: "400px", height: "550px", margin: 15}}/>
        </div>
        <div style={{width: "50%", marginLeft: "30px"}} align="center">
            <Typography
                variant= 'body2'
                align= 'center'
                fontSize= {21}
                paragraph="true"
                sx={{
                    mr: 2,
                    width: 450,
                    fontWeight: 3,
                    padding: 10,
                    paddingBottom:3,
                    paddingTop: 0,
                    paddingLeft: 0,
                    fontFamily: 'monospace',
                    color:'#5F6B65',
                    textDecoration: 'none',
                }}
                >
                  <h3 style={{ margin: 10 }}>OVERVIEW</h3>
                  {description}
            </Typography>
          <Button variant="outlined" style={{color: "#B7FD0B", borderColor: "#B7FD0B"}} onClick={() => {
            addProductTOCart(loggedUser.username, name, price, id)
            }}>Add to Cart </Button>
        </div>
      </div>
      <StepConnector orientation="vertical" style={{marginRight: "100px", marginLeft: "170px"}}></StepConnector>
      <ThemeProvider theme={theme}>
        <Container sx={{ padding: 8, width: 1000 }}>
          <Grid container spacing={4}>
          <Typography
                fontSize= {21}
                paragraph="true"
                sx={{
                    mr: 2,
                    margin: 0,
                    width: 450,
                    paddingLeft: 1,
                    fontFamily: 'monospace',
                    color:'#5F6B65',
                    textDecoration: 'none',
                }}
                >
                  <h3>You May Also Like</h3>
        </Typography>
                <Grid container spacing={4}>
                  {suggestedItems.map(product => {
                    return (
                      <Grid item xs={12} sm={6} md={3} key={product.id}> 
                        <Card
                          sx={{ height: '100%', display: 'flex', flexDirection: 'column', paddingTop: '0px' }}
                        >   
                          <CardContent sx={{ flexGrow: 1 }}>
                            {/* <img src={require("../assets/products/"+product.id.toString()+".webp")} alt="plant picture" style={{height: "200px", width: "100%"}} onClick= { () => {
                                navigate('/products-description', { state: { id: product.id, name: product.productName, price: product.price, quantity: product.quantity, description: product.description} })
                              }}/> */}
                               <img src={require("../assets/products/"+product.id.toString()+".webp")} alt="plant picture" style={{height: "200px", width: "100%"}} onClick= {() => handleClick(product.id, product.productName, product.price, product.quantity, product.description)}></img>
                          </CardContent>
                        </Card>
                      </Grid>
                      )})}
                </Grid>
          </Grid>
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default ProductDescription;
