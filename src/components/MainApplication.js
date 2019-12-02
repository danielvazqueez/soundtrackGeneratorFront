import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Route } from 'react-router-dom';
import MovieList from './MovieList';
import { Button } from "@material-ui/core";

const MainApplication = (props) => {
  const authEndpoint = 'https://accounts.spotify.com/authorize?';
  const [token, setToken] = useState('')
  // Replace with your app's client ID, redirect URI and desired scopes
  const clientId = "7dd8d06f826b4134a3d2af811523a00b";
  const redirectUri = "https://soundtrack-generator.herokuapp.com//app";
  const scopes = [
    'playlist-modify-public',
    'playlist-read-private'
  ];
  // Get the hash of the url
  const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function(initial, item) {
      if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
  window.location.hash = "";

  useEffect(() => {
    let _token = hash.access_token;
    if (_token) {
      // Set token
      setToken(_token)
    }
  })
  return (
    <>
      <NavBar setProfile={true} />
      <Route
        exact
        path="/app"
        key="App"
        render={() => (
          <div className="PageContainer">
            {!token && (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{margin: '26px'}}
                href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
              >
                Login to Spotify
              </Button>
            )}
            {token && (
              <MovieList token={token} />
            )}
          </div>
        )}
      />
    </>
  )
}

export default MainApplication;