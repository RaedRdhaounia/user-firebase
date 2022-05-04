import React from "react";
import AddressForm from "./components/AddressForm"
import {Routes, Route, Link} from "react-router-dom";
import { Button, CardMedia } from "@mui/material";
import UserList from "./components/UserList";
import pic from "./images/deleteCollection.png"
const App = () => {
  
  
  return (
 <div>
<nav style={{ display:"flex", justifyContent:"space-between", backgroundColor:"gray"}}>
  
<Link to="/"><Button> hello to your exercice </Button></Link>
<>
<Link to="/adduser"><Button> Add a user</Button></Link>
<Link to="/delateall"><Button> Reset</Button></Link>
</>
</nav>
         

         <React.Fragment >
         <Routes>
         <Route path="/" element={<UserList/>}></Route>

           <Route path="/adduser" element={<AddressForm/>}></Route>
           <Route path="/delateall" element={<Button> 
            <CardMedia
        component="img"
        
        style={{maxHeight:500}}
        image={pic}
        alt="Paella dish"
      />
           </Button>}>
              </Route>
         </Routes>
         </React.Fragment>
            </div>
  );
};

export default App;
