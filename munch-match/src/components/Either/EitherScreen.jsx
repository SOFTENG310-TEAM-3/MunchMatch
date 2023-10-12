import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Either.module.css';
import { Pie } from 'react-chartjs-2';

const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

async function fetchRandomRecipe(tag) {
  const apiEndpoint = `https://api.spoonacular.com/recipes/random?number=1&tags=${tag}&limitLicense=true`;
  try {
    const response = await axios.get(`${apiEndpoint}&apiKey=${apiKey}`);
    const recipe = response.data.recipes[0];
    return {
      title: recipe.title,
      image: recipe.image,
      category: tag,
    };
  } catch (error) {
    console.error('API call failed:', error);
    return null;
  }
}

export default function EitherScreen({ onClose }) {
  const [options, setOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [optionSelected, setOptionSelected] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]); // Store selected types
  const [showGraph, setShowGraph] = useState(false);

  function handleGraph() {
    console.log("Implement graph visualization here. Current selected types:", selectedTypes);
    setShowGraph(true);
}
const pieChartData = {
  labels: [...new Set(selectedTypes)], // get unique category names
  datasets: [
      {
          data: [...new Set(selectedTypes)].map(
              (type) => selectedTypes.filter((item) => item === type).length
          ), // count occurrences of each category
          backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
          ],
      },
  ],
};

  const fetchData = async () => {
    const randomOptions = ['pizza', 'burger', 'chicken', 'dessert'];
    const randomIndex1 = Math.floor(Math.random() * randomOptions.length);
    let randomIndex2;

    // Generate a different random index for the second option (make them different)
    do {
      randomIndex2 = Math.floor(Math.random() * randomOptions.length);
    } while (randomIndex2 === randomIndex1);

    const data1 = await fetchRandomRecipe(randomOptions[randomIndex1]);
    const data2 = await fetchRandomRecipe(randomOptions[randomIndex2]);

    setOptions([data1, data2]);
    setSelectedCategory(null); // Reset selected category when new data is fetched
    setOptionSelected(false); // Reset the option selected flag
  };

  const handleSelect = (category) => {
    setSelectedCategory(category);
    setOptionSelected(true); // Set the option selected flag to trigger fetching new data
    setSelectedTypes([...selectedTypes, category]); // Add the selected category to the array
    fetchData(); // Fetch new data when an option is selected
  };

  useEffect(() => {
    // Fetch initial data when the component mounts
    fetchData();
  }, []); 


  return (
    <div>
        <h3 className={styles.heading}>Find out your favorite food by choosing one of the options!</h3>
        <div className={styles.container}>
            <AnimatePresence>
                {options.map((option, index) => (
                    <motion.div
                        key={`option${index + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {option && (
                            <div
                                className={`${styles.imageContainer} ${option.category === selectedCategory && styles.selectedImage}`}
                                onClick={() => {
                                    handleSelect(option.category);
                                    console.log('Current selection:', option.category);
                                }}
                            >
                                <motion.img
                                    src={option.image}
                                    alt={option.title}
                                    initial={{ scale: 0.7 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                    style={{ width: '400px', height: '400px' }}
                                    className={styles.image}
                                />
                            </div>
                        )}
                        <p className={styles.titleText}>{option?.title}</p>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
        <div className={styles['button-container']}>
            <button className={`${styles.button} ${styles.close}`} onClick={onClose}>
                Close
            </button>
            <button
                className={`${styles.button} ${styles.graph}`}
                onClick={handleGraph}
            >
                Graph it! 📊
            </button>
        </div>

        {showGraph && (
            <div className={styles.graphContainer}>
                <Pie data={pieChartData} options={{ responsive: true }} />
            </div>
        )}
    </div>
);

}
