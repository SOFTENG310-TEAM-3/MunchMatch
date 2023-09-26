import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Modal.module.css';
import SlotMachine from '../SlotMachine/SlotMachine'; 

const Modal = ({ isOpen, onClose }) => {
  const handleReveal = (randomCategory) => {
    // Function to handle when food item is selected
    console.log("Revealed category: ", randomCategory);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.modalOverlay}
        >
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "10vh" }}
            className={styles.modalContent}
          >
            <button onClick={onClose} className="modalCloseButton">X</button>
            
            <h2>Spin to discover your next meal!</h2>
            
            {/* Replace AnimatedCards with SlotMachine */}
            <SlotMachine onReveal={handleReveal} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
