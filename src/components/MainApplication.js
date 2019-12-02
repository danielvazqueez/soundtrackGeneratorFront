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
import MovieList from './MovieList';

const MainApplication = () => {
  return (
    <div >
      <NavBar />
      <Route
        exact
        path="/app"
        key="App"
        render={() => (
          <div className="PageContainer">
            <MovieList />
          </div>
        )}
      />
    </div>
  )
}

export default MainApplication;