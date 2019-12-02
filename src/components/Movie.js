import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core'
import axios from 'axios';
const Movie = (props) => {
  const createPlaylist = () => {
    var token = localStorage.getItem('token');
    if (token) {
      token = token.replace(/^"(.*)"$/, '$1'); // Remove quotes from token start/end.
    }
    // get movies with ajax
    axios.post('http://localhost:8080/spotify/publishPlaylist', {token: props.token, movieName: props.movie.name, soundtrack: ["Stone Cold", "In My Mind"]} , {
      headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    .then((response) => {
      alert(response.data)
    })
    .catch((error) => {
      alert(error.response)
    })
  }
  return (
    <div>
      { props.movie ? (
        <Card>
          <CardMedia style={{height: 0, paddingTop: '56%'}}
            image={props.movie.imageUrl}
            title={props.movie.name}
          />
        <CardContent>
           <Typography gutterBottom variant="h6" compontent="h2">
             {props.movie.name}
           </Typography>
           <Typography component="p">
             {props.movie.description}
           </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={createPlaylist}>
            Add playlist
          </Button>
        </CardActions>
        </Card>
      ) : null}
    </div>
  )
}
export default Movie