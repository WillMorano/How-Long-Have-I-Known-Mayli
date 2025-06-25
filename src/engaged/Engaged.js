import styles from './Engaged.module.css';
import { FaLock } from "react-icons/fa";

function Engaged() {
  return (
    <div className={styles.container}>
      <FaLock 
        className={ styles.lock }
      />
      <div>This Area Is Currently Locked</div>
    </div>
  );
}

export default Engaged;
