import React, {Component} from 'react';
import store from '../store';
import {connect} from 'react-redux';
import {getMovies, deleteMovie, rentMovie} from '../actions/movieActions';
import PropTypes from 'prop-types';
import './styleMovieList.css';
import { Button,Card,Container,CardHeader,CardBody,Row,Col }  from 'reactstrap';


class MovieList extends Component { 

componentDidMount() {  
      this.props.getMovies();      
   }

onDelete = (id) => {
    this.props.deleteMovie(id);
}

onRented = ( movie  ) => {   
  this.props.rentMovie(movie); 
 }

ifRentedDisableButton = ( m_id, myRentedList  ) => {  
 
 if (myRentedList.length === 0) return false; 

 if (myRentedList.some(r => r._id === m_id))  return true

 return  false;
 
 }
    

buttonMessage = ( m_id, myRentedList  ) => {    

  if (myRentedList.length === 0)  return "RENT THIS";    

  if (myRentedList.some(r => r._id === m_id))  return "RENTED";
   
  return "RENT THIS";     
}

   
    render(){      
      store.subscribe(  ()=> { store.getState()  } ); 
      const myStore = store.getState();      
      const {movies} = this.props.movie;        
      const myRentedList = myStore.movie.rentedList;     
    //  const displayMovieList = myStore.movie.displayMovieList;
      const displayCart = myStore.movie.displayCart;  
     if (displayCart === true ) return null;
       return(
         <div className="movieList">                         
          {movies.map(movie => { 
           return (                  
             <div>                                                    
                 <Card className="moviecard" >                   
                    <CardHeader className="cardheader"> 
                    <Container>
                    <Row>
                        <Col>
                           <Button className="deletebutton" key={movie._id}                         
                           onClick={this.onDelete.bind(this,movie._id) }                  
                           ><strong>&times;</strong></Button>
                           {movie.movieName}
                        </Col>

                        <Col className="genre"> 
                           <Row>
                                 &nbsp; &nbsp; Genre:  &nbsp; {movie.genre}  
                                 <Button  className="rentthis"                                          
                                          key={movie._id} 
                                          onClick={ this.onRented.bind(this,movie)}
                                          disabled={this.ifRentedDisableButton(movie._id, myRentedList)}>
                                          {this.buttonMessage(movie._id, myRentedList )}
                                  </Button>
                     

                               </Row>    
                             <Row>                           
                                &nbsp; &nbsp;  Rated: &nbsp; {movie.rating}  
                             </Row>
                           </Col>
                        
                     
                     
                    </Row>
                    </Container>
                   </CardHeader>  
                      <CardBody className="moviecardbody"> 
                      <Container>
                       <Row>   
                         <Col>                 
                           <img className="cardimg" src={movie.imageBase64} alt="pic" ></img> 
                               
                        </Col>
                       <Col>  
                           {movie.description}       
                                  
                       </Col>        
                     </Row>  
                     </Container>         
                 </CardBody>
               </Card>  
                               
           </div>           
    ) }) }  
  </div> 
   )
 }
}

MovieList.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  rentMovie: PropTypes.func.isRequired,
  displayMovieList: PropTypes.object.isRequired,
  displayCart:PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movie: state.movie,
  rentedList : state.movie.rentedList,
  displayMovieList: state.movie.displayMovieList,
  displayCart: state.movie.displayCart
  
})

export default connect(
  mapStateToProps,
  {getMovies, deleteMovie, rentMovie}
  )(MovieList);
  

  