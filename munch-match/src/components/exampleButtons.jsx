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
class ExampleButtons extends Component{
  onButtonClick = (type) => {
    //generate a random type
      if (type == "supriseme"){
          const randomNumber = Math.floor(Math.random() * 8) + 1;
          if (randomNumber === 1){
              type = "cafe";
          }else if (randomNumber === 2){
              type = "burger";
          }else if (randomNumber === 3){
              type = "sushi";
          }else if (randomNumber === 4){
              type = "fruit";
          }else if (randomNumber === 5){
              type = "dessert";
          }else if (randomNumber === 6){
              type = "pizza";
          }else if (randomNumber === 7){
              type = "chicken";
          }else if (randomNumber === 8){
              type = "bakery";
          }
      }

      this.props.onButtonClick(type);
  }

  render(){
    return(
      //To export multiple components, surround it with a <div> tag
      <div>
        <div>
          <button className="button" onClick={() => this.onButtonClick("cafe")}><img className="food" src={cafe} alt="cafe"></img></button>
          <button className="button" onClick={() => this.onButtonClick("burger")}><img className="food" src={burger} alt="burger"></img></button>
          <button className="button" onClick={() => this.onButtonClick("sushi")}><img className="food" src={sushi} alt="sushi"></img></button>
          <button className="button" onClick={() => this.onButtonClick("fruit")}><img className="food" src={fruit} alt="fruit"></img></button>
        </div>
        <div>
          <button className="button" onClick={() => this.onButtonClick("dessert")}><img className="food" src={dessert} alt="dessert"></img></button>
          <button className="button" onClick={() => this.onButtonClick("pizza")}><img className="food" src={pizza} alt="pizza"></img></button>
          <button className="button" onClick={() => this.onButtonClick("chicken")}><img className="food" src={chicken} alt="chicken"></img></button>
          <button className="button" onClick={() => this.onButtonClick("bakery")}><img className="food" src={bakery} alt="bakery"></img></button>
        </div>
        <div>
          <button className="button" onClick={() => this.onButtonClick("supriseme")} style={{width: "55%"}}><h2>Surprise Me!</h2></button>
        </div>
      </div>
      
      
      )
  }
}

//Exports the component
export default ExampleButtons;