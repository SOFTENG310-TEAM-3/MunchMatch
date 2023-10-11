import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY; // Make sure to add your API key to a .env file
const apiEndpoint = "https://api.spoonacular.com/recipes/random?number=1&tags=&limitLicense=true";

async function fetchRandomRecipe() {
  try {
    const response = await axios.get(`${apiEndpoint}&apiKey=${apiKey}`);
    console.log("API Response: ", response); // Debugging line
    const recipe = response.data.recipes[0];
    return {
      title: recipe.title,
      image: recipe.image,
      type: recipe.dishTypes[0], // taking first dish type, you can adjust this
    };
  } catch (error) {
    console.error('API call failed:', error);
    return null;
  }
}

export default function EitherComponent({ onClose }) {
  const [option1, setOption1] = useState(null);
  const [option2, setOption2] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await fetchRandomRecipe();
      const data2 = await fetchRandomRecipe();

      setOption1(data1);
      setOption2(data2);
    };

    fetchData();
  }, []);

  const handleSelect = (type) => {
    setSelectedTypes([...selectedTypes, type]);
  };

  return (
    <div>
      <h4>Find out your favorite food by choosing one of the options!</h4>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {option1 && (
            <div onClick={() => handleSelect(option1.type)}>
              <motion.img 
                src={option1.image} 
                alt={option1.title} 
                initial={{ scale: 0.7 }} 
                animate={{ scale: 1 }} 
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{ width: '300px', height: '300px' }}
              />
              <p>{option1.title}</p>
            </div>
          )}
          {option2 && (
            <div onClick={() => handleSelect(option2.type)}>
              <motion.img 
                src={option2.image} 
                alt={option2.title} 
                initial={{ scale: 0.7 }} 
                animate={{ scale: 1 }} 
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{ width: '300px', height: '300px' }}
              />
              <p>{option2.title}</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
