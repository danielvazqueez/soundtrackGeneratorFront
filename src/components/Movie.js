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
  return (
    <div>
      { props.movie ? (
        <Card>
          <CardMedia style={{height: 0, paddingTop: '56%'}}
          image={props.movie.image.url}
          title={props.movie.title}
          />
        <CardContent>
           <Typography gutterBottom variant="headline" compontent="h2">
             {props.movie.title}
           </Typography>
           <Typography component="p">
             {props.movie.description}
           </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href={props.course.url} target="_blank">
            Go to movie
          </Button>
        </CardActions>
        </Card>
      ) : null}
    </div>
  )
}
export default Movie