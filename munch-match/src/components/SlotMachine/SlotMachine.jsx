import React, { useState, useEffect, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './SlotMachine.module.css';
import Lottie from 'react-lottie';
import animationData from './data.json';  // Update the path accordingly

import bakery from '../../images/bakery.png';
import burger from '../../images/burger.png';
import cafe from '../../images/cafe.png';
import chicken from '../../images/chicken.png';
import dessert from '../../images/dessert.png';
import fruit from '../../images/fruit.png';
import pizza from '../../images/pizza.png';
import sushi from '../../images/sushi.png';

const SlotMachine = ({onReveal}) => {
  console.log(" is function SLOT ", typeof onReveal);

  const controls = useAnimation();
  const [isSpinning, setIsSpinning] = useState(false);
  const [results, setResults] = useState([null, null, null]);
  const [winnerCategory, setWinnerCategory] = useState(null);
  const [hasSpunOnce, setHasSpunOnce] = useState(false);
  const [playConfetti, setPlayConfetti] = useState(false); 

  const confettiOptions = {
    loop: playConfetti,
    autoplay: playConfetti,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };


  const foodItems = useMemo(() => [
    { name: 'bakery', image: bakery },
    { name: 'burger', image: burger },
    { name: 'cafe', image: cafe },
    { name: 'chicken', image: chicken },
    { name: 'dessert', image: dessert },
    { name: 'fruit', image: fruit },
    { name: 'pizza', image: pizza },
    { name: 'sushi', image: sushi },
  ], []);

  useEffect(() => {
    const checkForMatch = () => {
      const foundItems = results.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});

      const winningImage = Object.keys(foundItems).find(key => foundItems[key] >= 2);

      if (winningImage) {
        const winningItem = foodItems.find(item => item.image === winningImage);
        setWinnerCategory(winningItem ? winningItem.name : null);
        setPlayConfetti(true);
      } else {
        setWinnerCategory(null);
        setPlayConfetti(false);
      }
    };

    if (!isSpinning && results[0]) {
      checkForMatch();
    }
  }, [isSpinning, results, foodItems]);



  const handleSpin = async () => {
    setIsSpinning(true);
    setWinnerCategory(null);
    setHasSpunOnce(true)

    const numPoints = 500;
    const yPoints = Array.from({ length: numPoints }, (_, i) => {
      return Math.sin((i / numPoints) * (2 * Math.PI)) * 50;
    });

    controls.start({
      y: yPoints,
      transition: {
        duration: 3,
        ease: 'linear',
        times: Array.from({ length: numPoints }, (_, i) => i / (numPoints - 1)),
      },
    });

    const newResults = [];
    const spinInterval = setInterval(() => {
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * foodItems.length);
        newResults[i] = foodItems[randomIndex].image;
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
      <Lottie
        options={confettiOptions}
        height={'100%'}
        width={'100%'}
        isStopped={!playConfetti}
        isPaused={!playConfetti}
      />

      <div className={styles.reels}>
        {results.map((result, index) => (
          <motion.div key={index} className={styles.icons} animate={controls}>
            {result && <img src={result} alt='food' />}
          </motion.div>
        ))}
      </div>
      {winnerCategory ? (
        <div className={styles.searchButton}>
          Winner: {winnerCategory}!!
        </div>
      ) : (!isSpinning && hasSpunOnce) ? (
        <div className={styles.spinAgain}>Spin again!</div>
      ) : null}
      <button
        className={`${styles['spin-button']} ${isSpinning ? styles['spinning'] : ''}`}
        onClick={handleSpin}
        disabled={isSpinning}
      >
        {isSpinning ? 'Spinning...' : 'Spin'}
      </button>
      {winnerCategory && (
       <button
       className={styles['spin-button']}
       onClick={() => onReveal(winnerCategory)} 
     >
       Take me there
     </button>
      )}
    </div>
  );
};



export default SlotMachine;
