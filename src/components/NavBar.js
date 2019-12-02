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
const NavBar = () => {
  const [isLoginOpened, setIsLoginOpened] = useState(false);
  return (
     <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" colo="inherit">
            Soundtrack generator
          </Typography>
        </Toolbar>
      </AppBar>      
     </div>
  )
}


export default NavBar;