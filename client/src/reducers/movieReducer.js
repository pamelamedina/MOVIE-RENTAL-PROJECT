import {GET_MOVIES, ADD_MOVIE, DELETE_MOVIE, 
        RENT_MOVIE, DISPLAY_MOVIELIST, DISPLAY_CART,
        REMOVE_CART_ITEM } from '../actions/mactiontypes';

const initialState = {
       movies : [],
       loading : false,
       rentedList: [],
       numRented: 0,
       displayMovieList : true,
       displayCart: false
};

export const movieReducer = (state=initialState, action)  => {

    switch (action.type)  {

          case  ADD_MOVIE : 
               return ({
                  ...state,
                   movies: [...state.movies, action.payload] }
              ); 
  
          case GET_MOVIES :
               return({
                   ...state,
                   movies:action.payload,
                   loading:false
               });

               case DELETE_MOVIE :             
                return({
                    ...state,
                    movies:state.movies.filter(movie => movie._id !== action.payload)
                      });
                    

               case RENT_MOVIE :   {                 ; 
                const newRentedList = state.rentedList;
                newRentedList.push(action.payload);   
                const newNumRented = newRentedList.length;    
               return({
                    ...state,
                    rentedList: newRentedList,
                    numRented: newNumRented,               
                     });                   
                  }
                     
                  case REMOVE_CART_ITEM :   {                    
                    const myRentedList = state.rentedList;
                    const newRentedList = myRentedList.filter(r => r._id !== action.payload);
                    const newNumRented = newRentedList.length;    
                   return({
                        ...state,
                        rentedList: newRentedList,
                        numRented: newNumRented,               
                         });                   
                      }
                          

                  case DISPLAY_CART :   {                      
                    return({
                        ...state,
                        displayMovieList : false, 
                        displayCart: true                              
                         });                   
                      }
                    
                      case DISPLAY_MOVIELIST :   {                         
                        return({
                            ...state,
                            displayMovieList : true, 
                            displayCart: false                               
                             });                   
                          }
             
               default:
                   return  state;

    }
 
}