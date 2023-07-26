import React, { Component } from "react";
import Mengnan from './Mengnan.png'; 
import Nirjari from './Nirjari.png'; 
import Shivam from './Shivan.png'; 
import Ahlad from './Ahlad.png'; 
import Shrawani from './Shrawani.png'; 
/*console.log(logo);*/


class Stuff extends Component {
  render() {
    return (
      <div>

        <h2>About</h2>  
        <br></br>
    
        <p>Team members:</p>
        <br></br>
        <br></br>
       
        <img src={Mengnan} alt="Mengnan" />
        <li> Mengnan Xu</li>
        <p>Scrum Master</p>
        <p2> I never think of the future - it comes soon enough.  </p2>
        <br></br>
        <br></br>
        <br></br>
        <img src={Shrawani} alt="Shrawani" />
        <li>Shrawani Bawage </li>
        <p>Data Engineer </p>
        <p2>Better Yourself, not be yourself</p2>
        <br></br>
        <br></br>
        <br></br>

        <img src={Ahlad} alt="Ahlad" />
        <li>Ahlad Satyam</li>
        <p>Back-End Developer </p>
        <p2> The buried talent is the sunken rock on which most lives strike and founder. </p2>
        <br></br>
        <br></br>
        <br></br>
        <img src={Nirjari} alt="Nirjari" />
        <li>Nirjari Mehta</li>
        <p>Developer </p>
        <p2> Ultimately love is everything. </p2>
        <br></br>
        <br></br>
        <br></br>
        <img src={Shivam} alt="Shivam" />
        <li>Shivam Bhardwaj</li>
        <p>Software Developer </p>
        <p2> The artist belongs to his work, not the work to the artist.   </p2>
         
        
      </div>
    );
  }
}
 
export default Stuff;
