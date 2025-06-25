import styles from './Married.module.css';
import { useState } from 'react';
import { FaLock } from "react-icons/fa";

function Married() {
  return (
    <div className={styles.container}>
      <FaLock 
        className={ styles.lock }
      />
      <div>This Area Is Currently Locked</div>
    </div>
  );
}

export default Married;
