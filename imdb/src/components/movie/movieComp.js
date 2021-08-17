import React, { Component } from 'react';

import { connect } from 'react-redux';

import MovieCard from './movieCard';

export class Movies extends Component {
  render() {
    const { movies } = this.props;
    let content = '';
// if movies.response is true then need map through the movies and sent to the moviecard 
//component
    content =
      movies.Response === 'True'
        ? movies.Search.map((movie, index) => (
            <MovieCard  key={index} movie={movie} />
            
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}
//movies is recieved 
const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(Movies);