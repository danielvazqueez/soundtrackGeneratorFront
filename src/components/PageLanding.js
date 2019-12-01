import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  Grid,
  TextField
} from "@material-ui/core";
import React, { useState } from "react";
import NavBar from "./NavBar";
import SignIn from './SignIn';
import { Route } from 'react-router-dom';
import SignUp from "./SignUp";
const PageLanding = () => {
  return (
    <div className="PageLanding">
      <NavBar />
      <Route
        exact
        path="/"
        key="Login"
        render={() => (
          <div className="PageContainer">
            <SignIn />
          </div>
        )}
      />
      <Route
        exact
        path="/register"
        key="Register"
        render={() => (
          <div className="PageContainer">
            <SignUp />
          </div>
        )}
      />
    </div>
  )
}

export default PageLanding;