import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import Banner from './Banner';
import store from '../store';
import {connect} from 'react-redux';
import {displayMovieList, displayCart} from '../actions/movieActions';
import { Button, Collapse, Navbar, NavbarBrand, Nav, NavItem,
          Container  } from 'reactstrap';
import './styleMNavBar.css'; 
 
store.subscribe(  ()=> { store.getState()  } );

class MNavbar extends Component {  
    
  componentDidMount() { 
 }

onCartLoad ()  {   
  this.props.displayCart();
}

onReturnToMovieList = () => {
  this.props.displayMovieList();      
}
      
    render(){
     store.subscribe(  ()=> { store.getState()  } );
     const myStore = store.getState();          
     const myRentedList = myStore.movie.rentedList;    
     const num = myRentedList.length;         
  //   const displayCart = myStore.movie.displayCart ;
     const displayMovieList = myStore.movie.displayMovieList;
   
      return(
      <div>        
          <Navbar color="dark" dark expand="sm" className="mb-5" >
              <Container>

                {displayMovieList ? (
                  <NavbarBrand href="/" > Movies Now Playing</NavbarBrand>
                ) : (
                  <NavbarBrand href="/" > My Cart</NavbarBrand>
                ) }
                   <Collapse  navbar>

                      <Nav className="ml-auto" navbar>
                          <NavItem> 

                          {displayMovieList ? (
                          <Button  className="cart-button"                       
                             onClick={()=> this.onCartLoad()} >Cart <br/> {num}           
                          </Button>                        
                          ) : (
                            <Button 
                            onClick={()=> this.onReturnToMovieList()} >
                            Return to <br/> MovieList
                            </Button>
                          )}

                          </NavItem>
     
                      </Nav>  
                  </Collapse> 
              </Container>
          </Navbar>
      </div>
  )};
  }
//export default MNavbar;
MNavbar.propTypes = {    
    movie : PropTypes.object.isRequired,  
    displayMovieList: PropTypes.func.isRequired,
    displayCart: PropTypes.func.isRequired,
    rentList: PropTypes.object.isRequired 
  };

const mapStateToProps = state => ({  
    movie: state.movie,
    rentedList: state.movie.RentedList
  })
  
  export default connect(
    mapStateToProps, 
    {displayMovieList, displayCart}   
    )(MNavbar);


