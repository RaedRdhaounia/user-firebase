import * as React from "react";
import { addDoc, collection } from "firebase/firestore";
import {
  Button,
  Paper,
  TextField,
  Typography,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  LinearProgress,
} from "@mui/material";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddressForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [userfirstname, setUserfirstname] = React.useState("");
  const [userLastName, setUserLastName] = React.useState("");
  const [age, setAge] = React.useState(16);
  const [email, setEmail] = React.useState("");
  const [degree, setDegree] = React.useState("");
  const handeChange = (target) => {
    switch (target.id) {
      case "firstName":
        setUserfirstname(target.value);
        break;
      case "lastName":
        setUserLastName(target.value);
        break;
      case "age":
        setAge(target.value);
        break;
      case "email":
        setEmail(target.value);
        break;
      case "degree":
        setDegree(target.value);
        break;
      default:
        break;
    }
  };
  const usersCollectionRef = collection(db, "users");
  const createUser = async () => {
    setLoading(true)
    await addDoc(usersCollectionRef, {
      lastName: userLastName,
      firstName: userfirstname,
      age,
      email,
      degree,
    });
    navigate("/");
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        template for a user informaion
      </Typography>
      <Box sx={style}>
      
      {loading? <Typography variant="h6" gutterBottom>
waiting of add your profile
        <LinearProgress/>
      </Typography>:<>
<Typography variant="h6" gutterBottom>
        Please put your details here
      </Typography>
      <Paper
        
        evolution={24}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          required
          id="firstName"
          name="firstName"
          label="First name"
          fullWidth
          autoComplete="given-name"
          variant="standard"
          value={userfirstname}
          onChange={(e) => handeChange(e.target)}
        />

        <TextField
          required
          id="lastName"
          name="lastName"
          label="Last name"
          fullWidth
          autoComplete="family-name"
          variant="standard"
          value={userLastName}
          onChange={(e) => handeChange(e.target)}
        />

        <TextField
          required
          id="age"
          name="age"
          label="Age"
          type="number"
          aria-valuemax={20}
          fullWidth
          autoComplete="Age"
          variant="standard"
          InputProps={{ inputProps: { min: 16, max: 60 } }}
          value={age}
          onChange={(e) => handeChange(e.target)}
        />

        <TextField
          required
          id="email"
          name="email"
          label="email"
          fullWidth
          autoComplete="email"
          variant="standard"
          value={email}
          onChange={(e) => handeChange(e.target)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">highest degree</InputLabel>
          <Select
            labelId="highest degree"
            id="degree"
            value={degree}
            label="highest degree"
            onChange={(e) => setDegree(e.target.value)}
            >
            <MenuItem value="">none</MenuItem>
            <MenuItem value="Bachelor">Bachelor</MenuItem>
            <MenuItem value="Masters">Masters</MenuItem>
            <MenuItem value="PhD">PhD</MenuItem>
          </Select>
        </FormControl>

        <Grid item xs={12}>
          <Button fullWidth onClick={() => createUser()}>
            {" "}
            save{" "}
          </Button>
        </Grid>
      </Paper></>}
      </Box>
    </React.Fragment>
  );
}
