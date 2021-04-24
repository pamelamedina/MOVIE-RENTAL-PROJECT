import MNavbar from './components/MNavbar';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieModal from './components/MovieModal';
import MovieList from './components/MovieList';
import CartList from './components/CartList';
import {Provider} from 'react-redux';
import store from './store';
import {Container} from 'reactstrap';


class App extends Component {
  render() {
  return (
    <Provider store = {store}>
   
      <div className="App">
     
         <MNavbar />
         <Container>   
         <MovieModal />          
         <MovieList />  
         <CartList />      
        </Container>         
      </div>
    </Provider>
  );
  }
}

export default App;
