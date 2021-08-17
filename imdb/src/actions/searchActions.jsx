import {
    SEARCH_MOVIE,
    FETCH_MOVIES,
    FETCH_MOVIE,
    LOADING
} from './type'

import { APIKey } from '../APIkey';

import axios from 'axios'

export const searchMovie= (text)=>{
    console.log(text)
    return(dispatch)=>{
        dispatch({
        type:SEARCH_MOVIE,
        payload:text
        })
        
    }
}
//movie is fetched using the axios by giving the text 
export const fetchMovie = (text)=>{
    console.log(text)
    return(dispatch)=>{
        axios
        .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
        .then(res=>{
            dispatch({
                type:FETCH_MOVIES,
                payload:res.data
            })
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    
}

// details of the movie is fetched using the axios by giving the imdbid 
export const movieDetail=(id)=>{
    console.log(id)
    return(dispatch)=>{
        axios
        .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
        .then(res=>{
            console.log(res)
            dispatch({
                type:FETCH_MOVIE,
                payload:res.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const setLoading = ()=>{
    return{
        type:LOADING
    }
}