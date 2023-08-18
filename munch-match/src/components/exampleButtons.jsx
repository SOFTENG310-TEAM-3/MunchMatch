//Tells react that this is an component
import { Component } from "react";
import "../App.css"
import bakery from "../images/bakery.png"
import burger from "../images/burger.png"
import cafe from "../images/cafe.png"
import chicken from "../images/chicken.png"
import dessert from "../images/dessert.png"
import fruit from "../images/fruit.png"
import pizza from "../images/pizza.png"
import sushi from "../images/sushi.png"


//Creates the Button component
class exampleButtons extends Component{
  render(){
    return(
      //To export multiple components, surround it with a <div> tag
      <div>
        <div>
          <button class="button"><img class="food" src={dessert} alt="dessert"></img></button>
          <button class="button"><img class="food" src={pizza} alt="pizza"></img></button>
          <button class="button"><img class="food" src={chicken} alt="chicken"></img></button>
          <button class="button"><img class="food" src={bakery} alt="bakery"></img></button>
        </div>
        <div>
          <button class="button"><img class="food" src={cafe} alt="cafe"></img></button>
          <button class="button"><img class="food" src={burger} alt="burger"></img></button>
          <button class="button"><img class="food" src={sushi} alt="sushi"></img></button>
          <button class="button"><img class="food" src={fruit} alt="fruit"></img></button>
        </div>
        <div>
          <button class="button" style={{width: "55%"}}><h2>Surprise Me!</h2></button>
        </div>
      </div>
      
      
      )
  }
}

//Exports the component
export default exampleButtons;