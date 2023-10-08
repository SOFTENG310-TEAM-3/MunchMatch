import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ShareModal.module.css';

const ShareModal = ({ isOpen, onClose }) => {
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
                        <h2>Share with friends</h2>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '10px' }}>
                            <img className={'restaurantImage'} src={require(`../../images/sushi.png`)} />
                            <div style={{ display: 'flex', flexDirection: 'column', width: '250px', paddingBottom: '30px' }}>
                                <h3>Restaurant Name</h3>
                                <h4>Restaurant Address</h4>
                            </div>
                        </div>
                        <h4>Link to share:</h4>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: '40px' }}>
                            <input className={styles.linkField} type="text" placeholder="Insert Link" readOnly />
                            <button className={styles.copyButton}>Copy Link</button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '20px' }}>
                            <button className={styles.copyButton} style={{ width: "20%", margin: '20px' }}>
                                <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '5px' }} />
                                Facebook
                            </button>
                            <button className={styles.copyButton} style={{ width: "20%", margin: '20px' }}>
                                <FontAwesomeIcon icon={faTwitter} style={{ marginRight: '5px' }} />
                                Twitter
                            </button>
                            <button className={styles.copyButton} style={{ width: "20%", margin: '20px' }}>
                                <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '5px' }} />
                                Gmail
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )
            }
        </AnimatePresence >
    );
};

export default ShareModal;
