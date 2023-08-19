//Tells react that this is an component
import { Component } from "react";
import "../App.css"
import Rating from "./rating";
import ResultCard from "./resultCard"
import dessert from "../images/dessert.png"
import { getResults } from "../Results.js"

//Creates the Button component
class Results extends Component{
    state = {
        results: [],
      };
    
      onBackClick = () => {
        this.props.onBackClick();
      };
    
      componentDidMount() {
        this.fetchResults(); 
      }
    
      fetchResults = () => {
        getResults(this.props.type)
          .then(results => {
            this.setState({ results }); 
          })
          .catch(error => {
            console.error('Error fetching results:', error);
          });
      }

    render(){
        console.log(this.selectedType)
        const { results } = this.state;
        console.log(results[2]);

        return(
        //To export multiple components, surround it with a <div> tag
        <div>
            <div className="resultsRow">
                <ResultCard result={results[0]}/>
                <ResultCard result={results[1]}/>
                <ResultCard result={results[2]}/>
            </div>
            <div className="resultsRow">
                <ResultCard result={results[3]}/>
                <ResultCard result={results[4]}/>
                <ResultCard result={results[5]}/>
            </div>
            <div>
            <button className="button" onClick={() => this.onBackClick()} style={{width: "30%"}}><h3>Choose Again</h3></button>
            </div>
        </div>
        
        
        );
    }
}

//Exports the component
export default Results;