//Tells react that this is an component
import { Component } from "react";
import foodChoices from "../data/categories";
import FoodOptionButton from "./FoodOptionButton";
import "../App.css"
import styles from "./FoodOptionButtons.module.css"
import Modal from './Modal/Modal';

//Creates the Buttons component
class FoodOptionButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false  // State to control modal visibility
        };
    }

    // open spinner modal
    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    // close spinner modal
    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    handleClick = (type) => {
        //generate a random type from the food choice array
        if (type === "random") {
            const randomNumber = Math.floor(Math.random() * foodChoices.length);
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
                <div className={styles.buttonsContainer}>
                    {foodChoices.map((choice, index) => (
                        <FoodOptionButton key={index} foodOption={choice} onClick={this.handleClick} />
                    ))}
                </div>
                <div id="startDiv">
                    <div>
                        <button className={styles.button} onClick={this.openModal} style={{ width: "55%" }}><h2>Surprise Me!</h2></button>
                    </div>
                    <div>
                        <button className={styles.button} onClick={() => this.onQuizButtonClick("quizStart")} style={{ width: "55%" }}><h2>Take the Quiz!</h2></button>
                    </div>
                </div>
                <div className={styles.quiz} id="questionOne">
                    <h3>Sweet or Savoury?</h3>
                    <button className={styles.button} onClick={() => this.onQuizButtonClick("sweet")} style={{ width: "30%" }}><h2>Sweet</h2></button>
                    <button className={styles.button} onClick={() => this.onQuizButtonClick("savoury")} style={{ width: "30%" }}><h2>Savoury</h2></button>
                </div>
                <div className={styles.quiz} id="questionTwo">
                    <h3>Big Feed or Little Treat?</h3>
                    <button className={styles.button} onClick={() => this.onQuizButtonClick("bigFeed")} style={{ width: "30%" }}><h2>Big Feed</h2></button>
                    <button className={styles.button} onClick={() => this.onQuizButtonClick("littleTreat")} style={{ width: "30%" }}><h2>Little Treat</h2></button>
                </div>
                <div className={styles.quiz} id="quizFinish">
                    <h2>Quiz Finished</h2>
                </div>
                <div className={styles.stopQuiz} style={{ marginTop: '15px' }}>
                    <button className={styles.stopButton} onClick={() => this.onQuizButtonClick("")} style={{ width: "20%" }}><h3>Stop Quiz</h3></button>
                </div>
                <p className={styles.attribution}>Image by catalyststuff and rocketpixel on Freepik</p>

                <p className={styles.attribution}>Image by catalyststuff and rocketpixel on Freepik</p>

                <Modal
                    isOpen={this.state.isModalOpen}
                    onClose={this.closeModal}
                />
            </div>


        )

    }
}

export default FoodOptionButtons;
