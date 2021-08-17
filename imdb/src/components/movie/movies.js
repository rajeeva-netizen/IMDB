import React, {useEffect} from 'react'
import { connect } from "react-redux"
import {movieDetail,setLoading} from '../../actions/searchActions'

function Movies(props){
  //checking the id and using the useEffect to recieve the movie details of that imdbID
    console.log(props.match.params.id)
    useEffect(()=>{
        props.movieDetail(props.match.params.id)
    },[])
    console.log(props.movie)
    console.log(props.movie.length)
    return(
        <>
        {/* title is displayed */}
        <h1 style={{margin:'20px 0px 50px 0px'}}>{props.movie.Title}</h1>
        <img style={{margin:'20px 0px 50px 0px'}}src={props.movie.Poster} className="thumbnail" alt="Poster" />
        <ul className="list-group">
        {/* genre of the movie is displayed */}
              <li className="list-group-item">
                <strong>Genre:</strong> {props.movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Language:</strong> {props.movie.Language}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {props.movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Run Time:</strong> {props.movie.Runtime}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {props.movie.Rated}
              </li>
            {/* imdb rating is displayed  */}
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {props.movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {props.movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {props.movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {props.movie.Actors}
              </li>
            </ul>
        </>
    )
}
const mapStateToProps = state => ({
    movie: state.movies.movie
})
export default connect(mapStateToProps, {movieDetail,setLoading })(Movies)