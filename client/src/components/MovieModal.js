import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form,  FormGroup,
         Label, Input, Card, CardImg } from 'reactstrap';
import {connect} from 'react-redux';
import {addMovie} from '../actions/movieActions'
import store from '../store';
import PropTypes from 'prop-types';

class MovieModal extends Component {   

  constructor(props) {
      super(props);      

      this.state= {
       modal:false,
       movieName: '',
       contentType:'',
       imageBase64:'',      
       description:'',
       genre: '' ,
       rating: ''
      } 
    }
 
toggle = () => {
    console.log("this =", this);
    this.setState({
        modal: !this.state.modal        
    });
};

  picLoad = (event) =>{   
    this.setState({contentType : event.target.files[0].type});
    var reader = new FileReader();
    this.loadFile(event,reader) ; 
  }
  
  loadFile = (event, reader) =>{     
   reader.onload =() =>   {  
        var output = document.getElementById('output');
        output.src = reader.result;  
        this.setState({imageBase64: output.src});            
    }      

        reader.readAsDataURL(event.target.files[0]);              
  };
  

onChange = (e) => {
this.setState({ [e.target.name] : e.target.value });
}


onSubmit = (e) => { 
  e.preventDefault();          
   
  const newMovie = {     
      movieName: this.state.movieName,
      contentType:this.state.contentType,
      imageBase64: this.state.imageBase64,       
      description:this.state.description,
      genre: this.state.genre,
      rating: this.state.rating
    }
  
   this.props.addMovie(newMovie);
  // Close modal
   this.toggle();
}

render() {
  store.subscribe(  ()=> { store.getState()  } );    
  const myStore = store.getState();  
  const displayCart = myStore.movie.displayCart;

if (displayCart === true ) return null; 
      return(
          <div>
            <Button onClick={this.toggle} color="dark" 
            style={{marginBottom: '2rem'}}>
             Add Movie </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} >
              <ModalHeader toggle={this.toggle} >Add a Movie to Movie List</ModalHeader>
                <ModalBody>

                  <Form onSubmit={this.onSubmit}>

                       <FormGroup>
                         <Label for="movie">MOVIE NAME: </Label>
                         <Input type="text" name="movieName" id="movie"
                               maxLength = "20"  onChange={this.onChange} />
                        </FormGroup>

                        <FormGroup>
                         <Label for="description">MOVIE DESCRIPTION :</Label>
                         <Input type="textbox" name="description" id="description" 
                               maxLength = "500" onChange={this.onChange} />
                         </FormGroup>                                  
                    
                        <FormGroup>
                          <Label for="genre">GENRE</Label>
                          <Input type="select" name="genre" id="genre"
                            onChange={this.onChange} >
                                     <option>Horror</option>
                                     <option>Suspense</option>
                                     <option>Drama</option>
                                     <option>Comedy</option>
                                     <option>Animated</option>
                                     <option>Fantasy</option>
                         </Input>
                        </FormGroup>
                     
                        <FormGroup>
                           <Label for="rating">Rating:</Label>
                           <Input type="select" name="rating" id="rating" 
                             onChange={this.onChange}>
                                     <option>rating</option>
                                     <option>G </option>
                                     <option>PG </option>
                                     <option>PG-13 </option>
                                     <option>R </option>
                                     <option>NR </option>                                 
                           </Input>
                        </FormGroup>

                        <FormGroup>    
                          <Card>
                            <Input type="file" accept="image/*" onChange={this.picLoad}/>                           
                            <CardImg width="70%"  id="output" />    
                                         
                         </Card>
                        </FormGroup>    

                      <FormGroup>
                       <Button color="dark"  block> Click to Add Movie </Button>  
                      </FormGroup> 
                         
                     </Form>
              </ModalBody>          
            </Modal>
          </div>
      )
   }
}

MovieModal.propTypes = {
  movie: PropTypes.object.isRequired,
  displayMovieList: PropTypes.object.isRequired,
  displayCart:PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movieName   : state.movieName,
  contentType : state.contentType, 
  imageBase64 : state.imageBase64,
  description : state.description,
  genre       : state.genre,
  rating      : state.rating, 
  displayMovieList: state.movie.displayMovieList,
  displayCart: state.movie.displayCart
  
});

export default connect(mapStateToProps, {addMovie} ) (MovieModal)
