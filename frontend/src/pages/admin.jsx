import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/material';
import Button from '@mui/material/Button';
import StepConnector from '@mui/material/StepConnector';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import BasicTable from './table'
import Alert from "@mui/material/Alert";


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

function Admin() {

    const [allUsers, setAllUsers] = useState([]);
    const [products, setProducts] = useState([]); 
    const [plantName, setPlantName] = useState('');
    const [plantDescription, setPlantDescription] = useState('');
    const [plantPhoto, setPlantPhoto] = useState('');
    const [numOfPlant, setNumOfPlants] = useState(15);
    const [plantToRemove, setPlantToRemove] = useState('');
    const [filterString, setFilterString] = useState('');

    const handlePlantNameChange = (event) => {
      setPlantName(event.target.value);
    }
    const handleDescriptionChange = (event) => {
      setPlantDescription(event.target.value);
    }
    const handlePhotoChange = (event) => {
      setPlantPhoto(event.target.value);
    }
    const handlePlantToRemove = (event) => {
      setPlantToRemove(event.target.value);
    }

    const addNewPlant = () => {
      let route = 'http://localhost:9000/products/product'; 
      let data = {
        productId: numOfPlant+1,
        productAmount: 1,
        productName: plantName,
        productDescription: plantDescription,
        productPrice: 0
      };

      console.log(plantDescription)
      setNumOfPlants(numOfPlant+1);

      fetch(route, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        }).then(res => res.json())
            .then(res => {
                if (res.success == true) {
                    //TODO save user id 
                    console.log("Added")
                } else {
                    console.log("Cant")
                }
        })  
        setPlantName('');
        setPlantDescription('');
        setPlantPhoto('');
    }

    const removePlant = () => {
      try{
        products.map(product => {
          if  (product.productName.toLowerCase() == plantToRemove.toLowerCase()) {
            alert("Are you sure you want to remove the plant?")
            let route = 'http://localhost:9000/products/product'; 
            let data = {
              productId: product.id
            };
            fetch(route, { 
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
              }).then(res => res.json())
                  .then(res => {
                      console.log("deleted")
              }) 
              setPlantToRemove('');
              return
          } else {
            // alert("No product with this name");
            setPlantToRemove('');
            return 
          }
        })
      } catch (err) {
        console.log(err)
      }

    }

    useEffect(() => {
        const loadUsers = async () => {
          try {
            await fetch('http://localhost:9000/users')
            .then(res => res.json())
            .then(res => {
                //console.log(res)
                setAllUsers(res.users);
                //console.log(allUsers)
          })
          } catch (err) {
            console.log(err)
          }
        }
        loadUsers();
      },[])

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

  return (
    <div>
      <div align="center" style={{padding: "40px"}}>
          {titleStyle("USERS ACTIVITY", "h6")}
          <TextField id="standard-basic" style={{paddingBottom:"12px"}} label="Search" variant="standard" onChange={(ev) => {
            setFilterString(ev.target.value)
          }}/>
            <BasicTable rows={allUsers.map((user) => {
              return {id: user.id ,name: user.user, loginAmount: user.loginAmount, cartItems: user.userCart}
            }).filter(({name}) => {
              var re = new RegExp(filterString+'.+$', 'i');
              return name.search(re) != -1;
              
            })}></BasicTable>
        </div>

        {titleStyle("ADD NEW PRODUCT", "h6")}

        <div style={{ paddingBottom: "50px"}}>
          <div  align="center">
          <Grid container direction="column" alignItems="center"  justify="center" style={{ paddingBottom: '20px' }}>
          <TextField mb={2}
                    name="plant"
                    label="Plant name"
                    placeholder="plant name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    style={{ marginLeft:"50px", marginRight:"50px", width:"400px", paddingBottom:"10px"}}
                    onChange={ handlePlantNameChange }
                    value={plantName}
                />
          <TextField
                    mb={2}
                    name="description"
                    label="Plant description"
                    placeholder="Plant description"
                    variant="outlined"
                    size="small"
                    fullWidth
                    style={{ marginLeft:"50px", marginRight:"50px", width:"400px", paddingBottom:"10px"}}
                    onChange={ handleDescriptionChange }
                    value={plantDescription}
                />
            <TextField
                    mb={2}
                    name="photo"
                    label="Plant photo"
                    placeholder="Plant photo link"
                    variant="outlined"
                    size="small"
                    fullWidth
                    style={{ marginLeft:"50px", marginRight:"50px", width:"400px", paddingBottom:"10px"}}
                    onChange={ handlePhotoChange }
                    value={plantPhoto}
                />
          <Button variant="outlined" disabled={!plantName || !plantDescription || !plantPhoto} style={{color: "#1F764B", borderColor: "#1F764B"}} onClick={addNewPlant}>ADD PLANT</Button>
          </Grid>
          </div>
        </div>

        <StepConnector style={{marginRight: "40px", marginLeft: "40px"}}></StepConnector>
        {titleStyle("REMOVE EXISTING PRODUCT", "h6")}

        <div style={{padding: "40px", paddingBottom: "60px"}}>
          <div  align="center">
          <TextField mb={2}
                    name="plant"
                    label="Plant name"
                    placeholder="plant name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    style={{ marginLeft:"50px", marginRight:"50px", width:"400px"}}
                    onChange={ handlePlantToRemove }
                    value={plantToRemove}
            />
          <Button variant="outlined" style={{color: "#1F764B", borderColor: "#1F764B"}} disabled={!plantToRemove} onClick={removePlant}>REMOVE PLANT</Button>
          </div>
        </div>
    </div>

  );
}

export default Admin;
