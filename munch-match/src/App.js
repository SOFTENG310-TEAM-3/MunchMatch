import React, { useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import FoodOptionButtons from './components/foodOptionButtons';
import Results from './components/resultsLayout';
import fork from './images/fork.png';
import knife from './images/knife.png';
import Modal from './components/Modal/Modal';
import EitherScreen from './components/Either/EitherScreen';

function App() {
  const [showResults, setShowResults] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling the modal
  const [showEither, setShowEither] = useState(false);

  const openEither = () => {
    setShowEither(true); 
  };

  const closeEither = () => {
    setShowEither(false);  
  };

  const onButtonClick = (type) => {
    setShowResults(true);
    setSelectedType(type);
    setIsModalOpen(true); // Open the modal when the "Surprise Me" button is clicked
  };

  const onBackClick = () => {
    setShowResults(false);
    setSelectedType('');
    setIsModalOpen(false);
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
        ) : showEither ? (
          <EitherScreen onClose={closeEither} />
        ) : (
          <>
            <FoodOptionButtons onButtonClick={onButtonClick} openEither={openEither} />
            <Modal isOpen={isModalOpen} onClose={closeModal} onReveal={onButtonClick} />
          </>
        )}
        <img className="fork" src={fork} alt="fork"></img>
      </SkeletonTheme>
    </div>
  );
}

export default App;
