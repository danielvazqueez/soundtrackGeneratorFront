import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core'

const Movie = (props) => {
  const createPlaylist = () => {
    
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
          <Button size="small" color="primary" onClick={createPlaylist} target="_blank">
            Add playlist
          </Button>
        </CardActions>
        </Card>
      ) : null}
    </div>
  )
}
export default Movie