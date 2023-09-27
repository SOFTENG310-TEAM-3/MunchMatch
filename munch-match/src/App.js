import React, { useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import FoodOptionButtons from './components/foodOptionButtons';
import Results from './components/resultsLayout';
import fork from './images/fork.png';
import knife from './images/knife.png';
import Modal from './components/Modal/Modal'; // Import the Modal component

function App() {
  const [showResults, setShowResults] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling the modal
  

  const onButtonClick = (type) => {
    setShowResults(true);
    setSelectedType(type);
    setIsModalOpen(false); 
  };
  const onReveal = (type) => {
    console.log('type', type);
    setShowResults(true);
    setSelectedType(type);
    setIsModalOpen(false);
  };
  

  const onBackClick = () => {
    setShowResults(false);
    setSelectedType('');
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  
  return (
    <div className="App">
      <SkeletonTheme baseColor="#f2f2f2" highlightColor="#444">
        <header className="App-header">
          <h1>MunchMatch</h1>
        </header>
        <img className="knife" src={knife} alt="knife"></img>
        {showResults ? (
          <Results type={selectedType} onBackClick={onBackClick} />
        ) : (
          <>
            <FoodOptionButtons onButtonClick={onButtonClick} />
          </>
        )}
        <img className="fork" src={fork} alt="fork"></img>
      </SkeletonTheme>
    </div>
  );
}

export default App;
