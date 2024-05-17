import React from "react";
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';


function FindMatch() {

  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const quizTitles = ["FIND YOUR PLANT MATCH", "QUESTION 1", "QUESTION 2", "QUESTION 3", "CONGRATS!"];
  const quizSubTitles = ["", "Choose your intention", "Describe your current relationship with plants", "What’s your light like?", "Your match is..."];
  const [products, setProducts] = useState([]); 

  const handleClick = (id, productName, price, quantity, description) => {
    navigate('/products-description', { state: { id: id, name: productName, price: price, quantity: quantity, description: description} })
  }

  let randomNum =  Math.floor(Math.random() * 15)+1;

  useEffect(() => {
    const loadAllProducts = async () => {
      try {
        await fetch('http://localhost:9000/products/products')
        .then(res => res.json())
        .then(res => {
          setProducts(res.plants);
        })
      } catch (err) {
        console.log(err)
      }
    }
    loadAllProducts();
  },[])

  const [checked1, setChecked1] = useState({
    1: false,
    2: false,
    3: false,
  });

  const error1 = !checked1[1] && !checked1[2] && !checked1[3];

  const handleChange11 = () => {
      setChecked1({
          1: !checked1[1]
      })
      return
  }

  const handleChange12 = () => {
      setChecked1({
          2: !checked1[2]
      })
      return
  }
  const handleChange13 = () => {
      setChecked1({
          3: !checked1[3]
      })
      return
  }

  const [checked2, setChecked2] = useState({
    1: false,
    2: false,
    3: false,
  });

  const error2 = !checked2[1] && !checked2[2] && !checked2[3];

  const handleChange21 = () => {
      setChecked2({
          1: !checked2[1]
      })
      return
  }

  const handleChange22 = () => {
      setChecked2({
          2: !checked2[2]
      })
      return
  }
  const handleChange23 = () => {
      setChecked2({
          3: !checked2[3]
      })
      return
  }

  const [checked3, setChecked3] = useState({
    1: false,
    2: false,
    3: false,
  });

  const error3 = !checked3[1] && !checked3[2] && !checked3[3];

  const handleChange31 = () => {
      setChecked3({
          1: !checked3[1]
      })
      return
  }

  const handleChange32 = () => {
      setChecked3({
          2: !checked3[2]
      })
      return
  }
  const handleChange33 = () => {
      setChecked3({
          3: !checked3[3]
      })
      return
  }


  const pageRender = () => {
    if ( page == 0 ) {
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
      )
    } else if ( page == 1 ) {
      return (
        <Box sx={{ display: 'flex' }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" required error={ error1 } >
            <FormGroup>
                <FormControlLabel
                control={
                  <Checkbox checked={checked1[1]} onChange={handleChange11} name="1" style={{color: "#194D33"}} />
                }
                label="Get out and explore"
                />
                <FormControlLabel
                control={
                  <Checkbox checked={checked1[2]} onChange={handleChange12} name="2" style={{color: "#194D33"}} />
                }
                label="Tap into my creative side"
                />
                <FormControlLabel
                control={
                  <Checkbox checked={checked1[3]} onChange={handleChange13} name="3" style={{color: "#194D33"}} />
                }
                label="Be more mindful"
                />
            </FormGroup>
            <FormHelperText>Please pick an answer</FormHelperText>
          </FormControl>
        </Box>
      )
    } else if ( page == 2 ) {
      return (
      <Box sx={{ display: 'flex' }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" required error={ error2 } >
          <FormGroup>
              <FormControlLabel
              control={
                <Checkbox checked={checked2[1]} onChange={handleChange21} name="1" style={{color: "#194D33"}} />
              }
              label="I’m a novice"
              />
              <FormControlLabel
              control={
                <Checkbox checked={checked2[2]} onChange={handleChange22} name="2" style={{color: "#194D33"}} />
              }
              label="I’m an enthusiast and an explorer"
              />
              <FormControlLabel
              control={
                <Checkbox checked={checked2[3]} onChange={handleChange23} name="3" style={{color: "#194D33"}} />
              }
              label="I’m a plant expert"
              />
          </FormGroup>
          <FormHelperText>Please pick an answer</FormHelperText>
        </FormControl>
      </Box>
      )
    } else if ( page == 3 ) {
      return (
        <Box sx={{ display: 'flex' }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" required error={ error3 } >
          <FormGroup>
              <FormControlLabel
              control={
                <Checkbox checked={checked3[1]} onChange={handleChange31} name="1" style={{color: "#194D33"}} />
              }
              label="Medium to low light"
              />
              <FormControlLabel
              control={
                <Checkbox checked={checked3[2]} onChange={handleChange32} name="2" style={{color: "#194D33"}} />
              }
              label="Medium to bright light"
              />
              <FormControlLabel
              control={
                <Checkbox checked={checked3[3]} onChange={handleChange33} name="3" style={{color: "#194D33"}} />
              }
              label="No light at all"
              />
          </FormGroup>
          <FormHelperText>Please pick an answer</FormHelperText>
        </FormControl>
      </Box>
      )
    } else {
      return (
        <Grid item xs={12} sm={6} md={3}> 
            {products.map(product => {
              if (product.id == randomNum) {
                return (
                <img src={require("../assets/products/"+product.id.toString()+".webp")} alt="plant picture" style={{height: "200px", width: "200px", paddingBottom: "20px"}} onClick= {() => handleClick(product.id, product.productName, product.price, product.quantity, product.description)}></img> 
                )
              }})}
        </Grid>
        
      )
    }
  }

  const titleStyle = (title) => (
    <Typography variant= 'h4' align= 'center' style={{marginTop: 30}} paragraph= 'true' sx={{
      mr: 2,
      fontFamily: 'monospace',
      letterSpacing: '.2rem',
      fontWeight: '700',
      color: 'inherit',
      textDecoration: 'none',
      margin: '0px',
    }}>
      {title}   
    </Typography>)

  const subTitleStyle = (subTitle) => (
    <Typography variant= 'subtitle2' align= 'center' style={{marginTop: 0}} paragraph= 'true' sx={{
      mr: 2,
      fontFamily: 'monospace',
      letterSpacing: '.2rem',
      fontWeight: '700',
      color: 'inherit',
      textDecoration: 'none',
      margin: '0px',}}>
      <h3>{subTitle}</h3>
    </Typography>)

  return (
    <div style={{display: "flex", flexDirection: "row", padding: "40px"}}>
        <div style={{width: "35%"}} />
        <div style={{width: "30%", border:"1.3px solid grey"}} align="center" >
        <div className="form-container" style={{ padding: "20px" }}>
        <div className="header">
          {titleStyle(quizTitles[page])}
          {subTitleStyle(quizSubTitles[page])}
        </div>
        <div className="body">
          {pageRender()}
        </div>
        <div className="footer">
          <Button 
            variant="contained"  
            style={{ background: "#194D33", marginRight: "5px" }} 
            disabled= { page == 0 } 
            onClick= { () => {
              setPage((currPage) => currPage-1);
              }
            }
          >
            Prev
          </Button>
          <Button 
            variant="contained"  
            style={{ background: "#194D33" }} 
            disabled= { page == quizTitles.length-1 || (page==1 && error1) || (page==2 && error2) || (page==3 && error3) } 
            onClick= { () => {
              setPage((currPage) => currPage+1);
              }
            }
          >
            Next
          </Button>
        </div>
      </div>
      </div>
      <div style={{width: "35%"}} align="center" />
    </div>
  );
}

export default FindMatch;

