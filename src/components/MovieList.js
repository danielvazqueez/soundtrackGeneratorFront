import React, {Component} from 'react'
import {
  Grid,
  TextField
} from '@material-ui/core'
import axios from 'axios'

class MovieList extends Component {
  state= {
    movies: [],
    searchString: ''
  }

  constructor() {
    super()
    this.getMovies()
  }

  getMovies = () => {
    // get movies with ajax
    axios.get()
    .then((response) => {
      this.setState({movies: response.items})
    })
    .catch((error) => {
      console.log("Error al traer información de peliculas")
      console.log(error)
    })
  }

  onInputChange = (event) => {
    if (event.target.value) {
      this.setState({searchString: event.target.value })
    } else {
      this.setState({searchString: ''})
    }
  }

  render() {
    return (
      <div>
        {this.state.movies ? (
          <div>
            <TextField style={{padding: 24}}
              id="searchInput"
              placeholder="Peliculas a buscar"
              margin="normal"
              onChange={this.onInputChange} />
            <Grid container spacing={24} style={{padding: 24}}>
              { this.state.movies.map(currentMovie => {
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Movie movie={currentMovie} />
                </Grid>
              })}
            </Grid>
          </div>
        ) : "No se encontraron peliculas" }
      </div>
    )
  }
}
export default MovieList;