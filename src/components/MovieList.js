import React, {Component} from 'react'
import {
  Grid,
  TextField,
  Button
} from '@material-ui/core'
import axios from 'axios'
import Movie from './Movie'
import './MovieList.css'

class MovieList extends Component {
  state= {
    movies: [],
    searchString: ''
  }
  
  getMovies = () => {
    var token = localStorage.getItem('token');
    if (token) {
      token = token.replace(/^"(.*)"$/, '$1'); // Remove quotes from token start/end.
    }
    // get movies with ajax
    axios.get('http://localhost:8080/movies', {
      headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    .then((response) => {
      this.setState({movies: response.data})
    })
    .catch((error) => {
      alert(error.response.data.error)
    })
  }

  componentDidMount() {
    console.log(this.props.accessToken)
    this.getMovies()
  }


  onInputChange = (event) => {
    if (event.target.value) {
      this.setState({searchString: event.target.value })
    } else {
      this.setState({searchString: ''})
    }
  }

  searchMovies = () => {
    // get movies with ajax
    var token = localStorage.getItem('token');
    if (token) {
      token = token.replace(/^"(.*)"$/, '$1'); // Remove quotes from token start/end.
    }
    axios.post('http://localhost:8080/movies', { title: this.state.searchString }, {
      headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    .then((response) => {
      this.setState({movies: [...this.state.movies, response.data]})      
    })
    .catch((error) => {
      alert(error.response.data.error)
    })
  }

  render() {
    return (
      <div className="MovieList">
        {this.state.movies ? (
          <div>
            <div className="flex" >
              <TextField
                id="searchInput"
                placeholder="Pelicula a buscar"
                margin="normal"
                onChange={this.onInputChange} />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={this.searchMovies}
              >
                Add Movie
              </Button>
            </div>
            
            <Grid container spacing={4} style={{padding: 24}}>
              { this.state.movies.map(currentMovie => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Movie token={this.props.token} movie={currentMovie} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : "No se encontraron peliculas" }
      </div>
    )
  }
}
export default MovieList;