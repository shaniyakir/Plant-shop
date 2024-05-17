import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Link, useNavigate} from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart3 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { UserContext } from '../contexts/UserContext';
import { SearchAppBar } from '../components/searchBar/SearchBar' 
import "./navBar.css"
import { getAllProducts } from '../api/productApi';
import { useState } from 'react';
import { DEFAULT_USER_LOGGED } from '..';
import SpaIcon from '@mui/icons-material/Spa';


const pages = [
  {name: 'Home', route: "/"},
  {name: 'Login', route: "/login"},
  {name: 'Products', route: "/products"},
  // {name: 'Accessories', route: "/accessories"},
  {name: 'Plant Care', route: "/plant-care"},
  {name: 'Find My Match', route: "/find-my-match"},
  {name: 'Logout', route: "/logout"},

];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [loggedUser, setLoggedUser] = React.useContext(UserContext)
  const [plants, setPlants] = useState([])
  const [fullPlantsData, setFullPlantData] = useState([])

  const navigate = useNavigate();

  //In case we addaccessories in the future.
  // React.useEffect(() => {
  //   getAllProducts().then((plantsRes) => {
  //     getAllAccessories().then((accessoriesRes) => {
  //       const concatedData = plantsRes.plants.concat(accessoriesRes.accesories)
  //       setFullPlantData(concatedData)
  //       setPlants(concatedData.map((plant) => {return plant.productName}))
  //     })
  //   })
  // }, [])

  React.useEffect(() => {
    getAllProducts().then((plantsRes) => {
        const data = plantsRes.plants
        setFullPlantData(data)
        setPlants(data.map((plant) => {return plant.productName}))
      
    })
  }, [])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const renderNavBarLinks =  () => (
    pages.map((navBarLink) => 
      <MenuItem key={navBarLink.name} onClick={handleCloseNavMenu}>
        <Link to={navBarLink.route} style={{textDecoration: "none", color:"#748E81" }}>
          <Typography textAlign="center">{navBarLink.name.toUpperCase()}</Typography>
        </Link>
      </MenuItem>
      
    )
  )

  const onSearchValueChanged = (event) => {
    if (event.key === 'Enter') {
      // Prevent's default 'Enter' behavior.
      event.defaultMuiPrevented = true;
      // your handler code
    }

    const selectedProduct = event.target.innerText
    const product = fullPlantsData.find((el) => {return el.productName === selectedProduct})
    if(product)
      navigate('/products-description', { state: { id: product.id, name: product.productName, price: product.price, quantity: product.quantity, description: product.description} })
  }

  return (
    <AppBar position="sticky" style={{ color: '#748E81', background: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SpaIcon fontSize='medium'></SpaIcon>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
            <Button
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <GiHamburgerMenu sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            </Button>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {renderNavBarLinks()}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
            {renderNavBarLinks()}
          </Box>

          <div id="left-icon-section">
            <SearchAppBar data={plants} fullData={fullPlantsData} onChange={onSearchValueChanged}></SearchAppBar>
          </div>
          <div style={{padding: "5px"}}>            
            <BsCart3 onClick={() => {
              console.log(DEFAULT_USER_LOGGED.username !== loggedUser.username)
              navigate(loggedUser.username !== DEFAULT_USER_LOGGED.username ? '/cart' : '/login')
            }}/>
            {loggedUser.isAdmin && 
              <VscAccount onClick={() => {
                navigate('/admin')
              }}/>}</div>
            {loggedUser.username}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;


