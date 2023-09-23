//Tells react that this is an component
import { Component } from "react";
import foodChoices from "../data/categories";
import FoodOptionButton from "./FoodOptionButton";
import "../App.css"
import styles from "./FoodOptionButtons.module.css"

//Creates the Buttons component
class FoodOptionButtons extends Component{
  handleClick = (type) => {
      //generate a random type from the food choice array
      if (type === "random"){
          const randomNumber = Math.floor(Math.random() * foodChoices.length);
          type = foodChoices[randomNumber];
      }

      this.props.onButtonClick(type);
  }

  render(){
    return(
      <>
      <div className={styles.buttonsContainer}>
        {foodChoices.map((choice, index) => (
          <FoodOptionButton key={index} foodOption={choice} onClick={this.handleClick} />
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
