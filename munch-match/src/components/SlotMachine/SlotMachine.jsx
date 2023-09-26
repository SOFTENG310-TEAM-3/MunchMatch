import React, { useState, useEffect } from 'react';
import styles from './SlotMachine.module.css'; 

// Import your food images
import bakery from '../../images/bakery.png';
import burger from '../../images/burger.png';
import cafe from '../../images/cafe.png';
import chicken from '../../images/chicken.png';
import dessert from '../../images/dessert.png';
import fruit from '../../images/fruit.png';
import pizza from '../../images/pizza.png';
import sushi from '../../images/sushi.png';

const SlotMachine = ({ onReveal }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [results, setResults] = useState([null, null, null]);
  const [winnerCategory, setWinnerCategory] = useState(null);
  const [spinAgain, setSpinAgain] = useState(false);

  const foodItems = [
    bakery, burger, cafe, chicken, dessert, fruit, pizza, sushi
  ];

  useEffect(() => {
    const checkForMatch = () => {
      // Check if two items in results array match by name
      if ((results[0] === results[1] || results[0] === results[2] || results[1] === results[2]) && results[0]) {
        setWinnerCategory(results[0]); // Set the winning category name
        setSpinAgain(false); // Reset the "Spin again!" message
      } else {
        setWinnerCategory(null); // Clear the winning category
        setSpinAgain(true); // Set the "Spin again!" message
      }
    };

    if (!isSpinning && results[0]) {
      checkForMatch();
    }
  }, [isSpinning, results]);

  const handleSpin = () => {
    setIsSpinning(true);
    setWinnerCategory(null); // Clear previous winner category
    setSpinAgain(false); // Clear "Spin again!" message
    const newResults = [];

    const spinInterval = setInterval(() => {
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * foodItems.length);
        newResults[i] = foodItems[randomIndex];
      }
      setResults([...newResults]);
    }, 100);

    setTimeout(() => {
      clearInterval(spinInterval);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <div className={styles['spinner-container']}>
      <div className={styles.reels}>
        {results.map((result, index) => (
          <div key={index} className={styles.icons}>
            {result && <img src={result} alt="food" />}
          </div>
        ))}
      </div>
      {winnerCategory && !spinAgain && (
        <div className={styles.winnerCategory}>
          {`Winner: ${winnerCategory}`}
        </div>
      )}
      {spinAgain && (
        <div className={styles.spinAgain}>
          Spin again!
        </div>
      )}
      <button
        className={`${styles['spin-button']} ${isSpinning ? styles['spinning'] : ''}`}
        onClick={handleSpin}
        disabled={isSpinning}
      >
        {isSpinning ? 'Spinning...' : 'Spin'}
      </button>
    </div>
  );
}

export default SlotMachine;
