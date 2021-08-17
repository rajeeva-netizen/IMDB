import {
    SEARCH_MOVIE,
    FETCH_MOVIES,
    FETCH_MOVIE,
    LOADING
  } from '../actions/type'
//intial state is defined 
  const intialState = {
      // loading : true,
        movies:[],
        text:'',
        loading:false,
        movie:[]
  }
  //reducer is defined 
  const reducer = (state=intialState, action)=>{
    switch(action.type){
        case FETCH_MOVIES:
            return{
                ...state,
                movies:action.payload,
                loading:false    
            }
            case SEARCH_MOVIE:
            return{
                ...state,
                text:action.payload,
                loading:false
            }
            case LOADING:
              return{
                ...state, 
                loading:true
              }
            case FETCH_MOVIE:
              return{
                ...state,
                movie:action.payload,
                loading:false
              }
        default:
            return state
    }
  }

  export default reducer