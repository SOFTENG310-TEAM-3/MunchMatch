//Tells react that this is an component
import { Component } from "react";
import "../App.css"
import foodChoices from "../data/categories";
import FoodOptionButton from "./FoodOptionButton";
import "./FoodOptionButtons.css";

//Creates the Buttons component
class FoodOptionButtons extends Component{
  onButtonClick = (type) => {
      //generate a random type from the food choice array
      if (type === "random"){
          const randomNumber = Math.floor(Math.random() * foodChoices.length);
          type = foodChoices[randomNumber];
      }

      this.props.onButtonClick(type);
  }

  render(){
    return(
      //To export multiple components, surround it with a <div> tag
      <>
      <div className="buttonsContainer">
        {foodChoices.map((choice) => (
          <FoodOptionButton foodOption={choice} />
        ))}
      </div>
        <div>
          <button className="button" onClick={() => this.onButtonClick("random")} style={{width: "55%"}}><h2>Surprise Me!</h2></button>
        </div>
        <p className="attribution">Image by catalyststuff and rocketpixel on Freepik</p>
      </>
      
      
      )
  }
}

export default FoodOptionButtons;