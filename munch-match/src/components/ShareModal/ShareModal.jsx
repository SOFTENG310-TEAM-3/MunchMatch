import { motion, AnimatePresence } from 'framer-motion';
import styles from './ShareModal.module.css';

const ShareModal = ({ isOpen, onClose, children }) => {
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
                        <button onClick={onClose} className={styles.modalCloseButton}>
                            &#10005;
                        </button>
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ShareModal;
