//Tells react that this is an component
import {Component} from "react";
import foodChoices from "../data/categories";
import FoodOptionButton from "./FoodOptionButton";
import "../App.css"
import styles from "./FoodOptionButtons.module.css"
import quizQuestions from "../data/quizQuestions";
import Modal from './Modal/Modal';

//Creates the Buttons component
class FoodOptionButtons extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isModalOpen: false  // State to control modal visibility
          quizStep: "start", // Initial quiz step
          currentQuestionId: 0,
          disabledOptions: [],
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
      if (type === "random"){
          const randomNumber = Math.floor(Math.random() * foodChoices.length);
          type = foodChoices[randomNumber];
      }
        this.props.onButtonClick(type);
    }

    handleQuizAnswerClick = (answer) => {
        const {currentQuestionId} = this.state;
        const nextQuestionId = currentQuestionId + 1;

        // Move to the next question if available
        if (currentQuestionId < quizQuestions.steps.length - 1) {
            this.disableFoodOptions(quizQuestions.steps[currentQuestionId].options.find((option) => option.answer === answer).disables);
            this.setState({currentQuestionId: nextQuestionId, quizStep: `question${nextQuestionId}`});
        } else {
            this.disableFoodOptions(quizQuestions.steps[currentQuestionId].options.find((option) => option.answer === answer).disables);
            // Finish the quiz since there are no more questions
            this.setState({quizStep: "finish"});
        }
    };

    handleQuizStart = () => {
        this.setState({quizStep: "question0"});
    };

    handleQuizEnd = () => {
        this.setState({quizStep: "start", currentQuestionId: 0, disabledOptions: []});
    }

    disableFoodOptions = (foodOptions) => {
        const {disabledOptions} = this.state;
        const updatedDisabledOptions = [...disabledOptions, ...foodOptions];

        this.setState({disabledOptions: updatedDisabledOptions});
    }

    render() {
        const {quizStep, currentQuestionId, disabledOptions} = this.state;
        const currentQuestion = quizQuestions.steps[currentQuestionId];

        return (
            //To export multiple components, surround it with a <div> tag
            <div>
                <div className={styles.buttonsContainer}>
                    {foodChoices.map((choice, index) => {
                        const isDisabled = disabledOptions.includes(choice);
                        const buttonDisabledStyle = isDisabled ? "disabledButton" : "";
                        const imageDisabledStyle = isDisabled ? "disabled" : "";

                        return (
                            <FoodOptionButton imageDisabledStyle={imageDisabledStyle} buttonDisabledStyle={buttonDisabledStyle} key={index} foodOption={choice}
                                              disabled={isDisabled} onClick={this.handleClick}/>)
                    })}
                </div>
                {quizStep === "start" && (
                    <div>
                        <div>
                            <button
                                className="button"
                                onClick={this.openModal}
                                style={{width: "55%"}}
                            >
                                <h2>Surprise Me!</h2>
                            </button>
                        </div>
                        <div>
                            <button
                                className="button"
                                onClick={this.handleQuizStart}
                                style={{width: "55%"}}
                            >
                                <h2>Take the Quiz!</h2>
                            </button>
                        </div>
                    </div>
                )}

                {quizStep === `question${currentQuestionId}` && (
                    <div>
                        <h3>{currentQuestion.question}</h3>
                        {currentQuestion.options.map((option, index) => (
                            <button
                                className="button"
                                key={index}
                                onClick={() => this.handleQuizAnswerClick(option.answer)}
                                style={{width: "30%"}}
                            >
                                <h2>{option.answer}</h2>
                            </button>
                        ))}
                        <div style={{marginTop: '15px'}}>
                            <button className="stopButton" onClick={() => this.handleQuizEnd()} style={{width: "20%"}}><h3>Stop Quiz</h3></button>
                        </div>
                    </div>
                )}

                {quizStep === "finish" && (
                    <div>
                        <div>
                            <h2>Quiz Finished</h2>
                        </div>
                        <div style={{marginTop: '15px'}}>
                            <button className="stopButton" onClick={() => this.handleQuizEnd()} style={{width: "20%"}}><h3>Reset Questions</h3></button>
                        </div>
                    </div>
                )}

                <p className="attribution">Image by catalyststuff and rocketpixel on Freepik</p>

                <Modal 
                    isOpen={this.state.isModalOpen} 
                    onClose={this.closeModal}
                />
            </div>


        )
        
    }
}

export default FoodOptionButtons;
