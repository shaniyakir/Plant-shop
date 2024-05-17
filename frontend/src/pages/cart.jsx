import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import {UserContext} from '../contexts/UserContext'
import { useContext } from 'react';
import { useEffect } from 'react';
import { deleteCart, getCart, removeItemFromCart } from '../api/cartApi'
import { removeProduct } from '../api/productApi';
import { Navigate, useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [totalPrice, setTotalPrice] = useState(0);

  
  const fetchCart = async () => {
    getCart(loggedUser.username).then((res) => {
      if(typeof(res.cart) !== 'undefined')
      setCartItems(res.cart.products)
    })
  }
  
  const navigate = useNavigate()

  useEffect(()=> {
       fetchCart()
  })


  return (
    <Grid align= 'center'>
        {/* <Button variant="contained" style={{ color:"white", marginTop:"10px", background: "red"}} onClick={(ev) => {
            deleteCart(loggedUser.username).then((res) => {
              fetchCart().then((res) => {
                window.location.reload(false);
              })
            })
        }}>
            CLEAR CART
        </Button> */}
    <Typography variant= 'h4' align= 'center' style={{marginTop: 30}} paragraph= 'true' sx={{
        mr: 2,
        fontFamily: 'monospace',
        letterSpacing: '.2rem',
        fontWeight: '700',
        color: 'inherit',
        textDecoration: 'none',
        margin: '0px',
      }}>
        YOUR SHOPPING CART
      </Typography>
    <TableContainer component={Paper} style={{paddingTop: "30px", paddingBottom: "40px"}} align="center">
      <Table sx={{ width: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right" style={{width:"1px"}}></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {cartItems.map((item, index) => 
        {
          // setTotalPrice(totalPrice+item.productPrice);
          console.log(item)
          return (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="item">
                {item.name}
              </StyledTableCell>
              <StyledTableCell align="right" style={{paddingRight: "15px"}}>
                {item.productPrice}$
              </StyledTableCell>
              <StyledTableCell align="right" style={{paddingRight: "5px"}}>
                <ClearIcon fontSize='small' style={{marginTop:"10px", marginLeft:"2px"}} onClick={() => {
                    removeItemFromCart(loggedUser.username, item.name).then((res) => {
                      fetchCart().then((res) => {
                        // window.location.reload(false);
                      })
                    })
                }}></ClearIcon>
              </StyledTableCell>
            </StyledTableRow>
            
          )
        })}
        </TableBody>
      </Table>
      <div></div>
      <div style={{float: 'right', paddingRight: '320px'}}>
        <Button variant="contained" style={{ color:"white", marginTop:"10px", background: "black"}}onClick={(ev) => {
          cartItems.forEach((item) => {
            removeProduct(item.productId).then((res) => {
              console.log("removed product res = " + res.success)
            })
            deleteCart(loggedUser.username)
            navigate('/checkout')
          })
        }}>
            PROCEED TO CHECKOUT
        </Button>
      </div>
    </TableContainer>
    </Grid>
  );
}

export default Cart;
