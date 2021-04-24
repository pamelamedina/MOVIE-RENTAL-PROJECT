import {GET_MOVIES, ADD_MOVIE, DELETE_MOVIE,
        MOVIES_LOADING,RENT_MOVIE, DISPLAY_CART, 
        DISPLAY_MOVIELIST, REMOVE_CART_ITEM } from './mactiontypes';
import axios from 'axios';

export const getMovies = () => dispatch => {
//read database then update UI
dispatch(setMoviesLoading());
axios
.get('/api/movies')
.then(res => 
    dispatch({
         type: GET_MOVIES,
         payload: res.data }))
};

export const addMovie = (movie) => dispatch => {
    //update database then update UI       
    axios.post('/api/movies', movie)    
   .then(res => {             
        dispatch({
             type: ADD_MOVIE,
             payload: res.data })
           }) }
     
    export const deleteMovie = id => dispatch => {               
        axios        
        .delete(`/api/movies/${id}` )        
        .then(res => 
            dispatch({
                 type: DELETE_MOVIE,
                 payload: id }))
        }

    export const setMoviesLoading = ()  => {
        return {
            type: MOVIES_LOADING
          
        };
    };

    export const rentMovie  = (movie) => dispatch =>{    
        dispatch({  
        type: RENT_MOVIE,
        payload: movie })    
    };

    export const removeCartItem  = (id) => dispatch =>{    
        dispatch({  
        type: REMOVE_CART_ITEM,
        payload: id })    
    };

    export const displayCart  = () => dispatch =>{    
        dispatch({  
        type: DISPLAY_CART,
          })    
    };

    export const displayMovieList  = () => dispatch =>{    
        dispatch({  
        type: DISPLAY_MOVIELIST,
          })    
    };
       
    