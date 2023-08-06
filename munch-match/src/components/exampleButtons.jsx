//Tells react that this is an component

import { Component } from "react";
//Imports Button from Bootstrap
import Button from "react-bootstrap/Button";

//Creates the Buttom component
class exampleButtons extends Component{
  render(){
    return(
      //To export multiple components, surround it with a <div> tag
      <div>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
      
      )
  }
}

//Exports the component
export default exampleButtons;