import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  Grid,
  TextField
} from '@material-ui/core'
import Link from '../components/Link'
import axios from 'axios'
const NavBar = () => {
  const [isLoginOpened, setIsLoginOpened] = useState(false);
  return (
     <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" colo="inherit">
            Soundtrack generator
          </Typography>
        </Toolbar>
      </AppBar>      
     </div>
  )
}

const LoginDialog = ({...props}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    let json_to_send = {
      "email": email,
      "password" : password
    };
  
    json_to_send = JSON.stringify(json_to_send)
    console.log(json_to_send)
    axios({
      url: 'https://todos-examen.herokuapp.com/users/login',
      // headers: {
      //     'Content-Type':'application/json'
      // },
      method: 'POST',
      data: json_to_send
    }).then((data) => {
      localStorage.setItem('token', data.token)
      window.location = './app'
      return true
    }).catch((error) => {
      return error["responseText"]
    })
  } 
  const authenticate = async () => {
    const response = await login(email, password);
    if (response === true) {
      props.history.push("/app");
    } else {
      alert(response);
    }
  };

  return (
    <Dialog {...props}>
      <DialogTitle variant="h6">Credentials</DialogTitle>
      <form className="LoginDialogForm">
        <Grid container direction="column">
          <TextField
            id="email"
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            // margin="normal"
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => authenticate()}
          >
            Log In
          </Button>
        </Grid>
      </form>
    </Dialog>
  );
}
export default NavBar;