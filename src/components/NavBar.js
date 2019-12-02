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
import ProfileMenu from './ProfileMenu';
import './NavBar.css';

const NavBar = ({setProfile}) => {
  return (
     <div>
      <AppBar position="static" className="Navigation">
        <Toolbar className="ToolBar">
          <Typography variant="h5" colo="inherit">
            Soundtrack generator
          </Typography>
          { setProfile ? <ProfileMenu /> : null}
        </Toolbar>
      </AppBar>      
     </div>
  )
}


export default NavBar;