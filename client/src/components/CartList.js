import React, {Component} from 'react';
import store from '../store';
import {connect} from 'react-redux';
import { displayMovieList , displayCart, removeCartItem } from '../actions/movieActions';
import PropTypes from 'prop-types';
import './styleCartList.css';
import { Button,Card, Container, CardHeader, CardBody,
         Row, Col } from 'reactstrap';

store.subscribe(  ()=> { store.getState()  } );

class CartList extends Component {  

componentDidMount() {
 
   }

onDelete = (id) => {
    this.props.deleteCartItem(id);
}
    
onRemoveCartItem = ( id  ) => {    
     this.props.removeCartItem(id);     
     }
  

    render(){  
    store.subscribe(  ()=> { store.getState()  } );    
    const myStore = store.getState();      
    const rentList = myStore.movie.rentedList;    
    const displayMovieList = myStore.movie.displayMovieList;
   // const displayCart = myStore.movie.displayCart;
    
   if (displayMovieList === true ) return null;
       return(
         <div  className="cartList">                     
          {rentList.map(r => { 
           return (                  
             <div>                                                    
                 <Card className="moviecard" >                                        
                    <CardHeader className="cardheader"> 
                    <Container>
                    <Row>
                        <Col>
                           <Button className="deletebutton" key={r._id} 
                           style={{visibility:'hidden'}}                       
                           onClick={this.onDelete.bind(this,r._id) }                  
                           ><strong>&times;</strong></Button>
                           {r.movieName}
                        </Col>

                        <Col className="genre"> 
                          
                              <Row>
                                 &nbsp; &nbsp; Genre:  &nbsp; {r.genre}                                  
                                 <Button  className="rentthis" key={r._id}                                
                                  onClick={ this.onRemoveCartItem.bind(this,r._id)}>
                                  Remove <br /> from cart    
                                 </Button>
                               

                               </Row>    
                             <Row>                           
                                &nbsp; &nbsp;  Rated: &nbsp; {r.rating}  
                             </Row>
                           </Col>
                                          
                    </Row>
                    </Container>
                   </CardHeader>  
                      <CardBody className="moviecardbody"> 
                      <Container>
                       <Row>   
                         <Col>                 
                           <img className="cardimg" src={r.imageBase64} alt="pic" ></img>                                
                        </Col>
                       <Col>  
                           {r.description}  
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

CartList.propTypes = {
  displayMovieList: PropTypes.func.isRequired, 
  displayCart:PropTypes.func.isRequired,
  removeCartItem: PropTypes.func.isRequired,
  rentList: PropTypes.object.isRequired 
};

const mapStateToProps = state => ({ 
  movie: state.movie,
  rentedList : state.movie.rentedList,
  displayMovieList : state.movie.displayMovieList,
  displayCart: state.movie.displayCart,     
})  

export default connect(
  mapStateToProps,
    {displayMovieList, displayCart, removeCartItem} 
  )(CartList);
  

 