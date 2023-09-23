//Tells react that this is an component
import {Component} from "react";
import "../App.css"
import bakery from "../images/bakery.png"
import burger from "../images/burger.png"
import cafe from "../images/cafe.png"
import chicken from "../images/chicken.png"
import dessert from "../images/dessert.png"
import fruit from "../images/fruit.png"
import pizza from "../images/pizza.png"
import sushi from "../images/sushi.png"

//Creates the Buttons component
class FoodOptionButtons extends Component {
    onButtonClick = (type) => {
        //generate a random type from the food choice array
        if (type === "supriseMe") {
            const foodChoices = ["cafe", "burger", "sushi", "fruit", "dessert", "pizza", "chicken", "bakery"];
            const randomNumber = Math.floor(Math.random() * 8);
            type = foodChoices[randomNumber];
        }

        this.props.onButtonClick(type);
    }

    onQuizButtonClick = (type) => {
        document.querySelector(".stopButton h3").textContent = "Stop Quiz";
        switch (type) {
            case "quizStart":
                // Start the quiz by hiding the existing buttons and showing the first question
                document.getElementById("startDiv").style.display = "none";
                document.getElementById("stopQuiz").style.display = "block";
                this.showNextQuestion("questionOne");
                break;
            case "sweet":
                this.disableFoodOptions(["burger", "pizza", "chicken", "sushi"]);
                this.showNextQuestion("questionTwo");
                break;
            case "savoury":
                this.disableFoodOptions(["fruit", "dessert", "bakery"]);
                this.showNextQuestion("questionTwo");
                break;
            case "bigFeed":
                this.disableFoodOptions(["dessert", "fruit"]);
                this.showNextQuestion("quizFinish");
                document.querySelector(".stopButton h3").textContent = "Back to Menu";
                break;
            case "littleTreat":
                this.disableFoodOptions(["burger", "pizza", "chicken"]);
                this.showNextQuestion("quizFinish");
                document.querySelector(".stopButton h3").textContent = "Back to Menu";
                break;
            default:
                // Default is to go back to start
                document.getElementById("stopQuiz").style.display = "none";
                this.showNextQuestion("startDiv");
                this.enableAllButtons();
                break;
        }
    }

    showNextQuestion = (nextQuestion) => {
        const quizQuestions = document.getElementsByClassName("quiz");

        // Hide ALL quiz question containers
        for (let i = 0; i < quizQuestions.length; i++) {
            quizQuestions[i].style.display = "none";
        }

        document.getElementById(nextQuestion).style.display = "block";
    }

    disableFoodOptions = (foodOptions) => {
        // Take the input array and disable those specific buttons
        for (let foodOption of foodOptions) {
            const foodOptionId = document.getElementById(foodOption);
            foodOptionId.disabled = true;
            foodOptionId.style.backgroundColor = "darkgrey"
            foodOptionId.classList.add('disabled');
        }
    }

    enableAllButtons = () => {
        // Find all food buttons and enable them all again
        const buttons = document.querySelectorAll(".foodButton");
        buttons.forEach((button) => {
            button.disabled = false;
            button.style.backgroundColor = ""
            button.classList.remove('disabled');
        });
    }

    render() {
        return (
            //To export multiple components, surround it with a <div> tag
            <div>
                <div>
                    <button id="cafe" className="button foodButton" onClick={() => this.onButtonClick("cafe")}><img className="food" src={cafe} alt="cafe"></img></button>
                    <button id="burger" className="button foodButton" onClick={() => this.onButtonClick("burger")}><img className="food" src={burger} alt="burger"></img>
                    </button>
                    <button id="sushi" className="button foodButton" onClick={() => this.onButtonClick("sushi")}><img className="food" src={sushi} alt="sushi"></img>
                    </button>
                    <button id="fruit" className="button foodButton" onClick={() => this.onButtonClick("fruit")}><img className="food" src={fruit} alt="fruit"></img>
                    </button>
                </div>
                <div>
                    <button id="dessert" className="button foodButton" onClick={() => this.onButtonClick("dessert")}><img className="food" src={dessert}
                                                                                                               alt="dessert"></img></button>
                    <button id="pizza" className="button foodButton" onClick={() => this.onButtonClick("pizza")}><img className="food" src={pizza} alt="pizza"></img>
                    </button>
                    <button id="chicken" className="button foodButton" onClick={() => this.onButtonClick("chicken")}><img className="food" src={chicken}
                                                                                                               alt="chicken"></img></button>
                    <button id="bakery" className="button foodButton" onClick={() => this.onButtonClick("bakery")}><img className="food" src={bakery} alt="bakery"></img>
                    </button>
                </div>
                <div id="startDiv">
                    <div>
                        <button className="button" onClick={() => this.onButtonClick("supriseMe")} style={{width: "55%"}}><h2>Surprise Me!</h2></button>
                    </div>
                    <div>
                        <button className="button" onClick={() => this.onQuizButtonClick("quizStart")} style={{width: "55%"}}><h2>Take the Quiz!</h2></button>
                    </div>
                </div>
                <div className="quiz" id="questionOne">
                    <h3>Sweet or Savoury?</h3>
                    <button className="button" onClick={() => this.onQuizButtonClick("sweet")} style={{width: "30%"}}><h2>Sweet</h2></button>
                    <button className="button" onClick={() => this.onQuizButtonClick("savoury")} style={{width: "30%"}}><h2>Savoury</h2></button>
                </div>
                <div className="quiz" id="questionTwo">
                    <h3>Big Feed or Little Treat?</h3>
                    <button className="button" onClick={() => this.onQuizButtonClick("bigFeed")} style={{width: "30%"}}><h2>Big Feed</h2></button>
                    <button className="button" onClick={() => this.onQuizButtonClick("littleTreat")} style={{width: "30%"}}><h2>Little Treat</h2></button>
                </div>
                <div className="quiz" id="quizFinish">
                    <h2>Quiz Finished</h2>
                </div>
                <div id="stopQuiz" style={{marginTop: '15px'}}>
                    <button className="stopButton" onClick={() => this.onQuizButtonClick("")} style={{width: "20%"}}><h3>Stop Quiz</h3></button>
                </div>
                <p className="attribution">Image by catalyststuff and rocketpixel on Freepik</p>
            </div>


        )
    }
}

export default FoodOptionButtons;