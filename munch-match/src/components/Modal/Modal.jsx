import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Modal.module.css';
import SlotMachine from '../SlotMachine/SlotMachine';

const Modal = ({ isOpen, onClose, onReveal}) => {

  const [slotMachineResult, setSlotMachineResult] = useState(null);
  
  const handleButtonClick = () => {
    if (slotMachineResult) {
      // If a category is revealed, trigger the onReveal function
    } else {
      // Handle the case when no category is revealed (you can display a message)
      console.log("No category revealed");
    }
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
            <button onClick={onClose} className={styles.modalCloseButton}>&#10005; </button>

            {slotMachineResult ? (
              // If a category is revealed, show the result
              <button onClick={handleButtonClick}>{slotMachineResult}</button>
            ) : (
              // If no category is revealed, show the slot machine
              <>
                <h2>Spin to discover your next meal!</h2>
                {/* Replace AnimatedCards with SlotMachine */}
                <SlotMachine onReveal={onReveal}/>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
