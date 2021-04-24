import React, {Component} from 'react';
import './styleBanner.css';
import {    
    Container
} from 'reactstrap';



class Banner extends Component {   
  render() {
      return(
      <div>  
           <title>TINSELTOWN</title>
           <br/><br/>
           <div  id="marquee"   >
              <h1  class="marqueeanim" >TINSELTOWN  VIRTUAL   CINEMA  </h1>
           </div>
      </div>
      );
  }
}
export default Banner;
