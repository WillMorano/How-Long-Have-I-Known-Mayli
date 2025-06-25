import styles from './App.module.css';
import { useState } from 'react';
import Met from './met/Met';
import Dating from './dating/Dating';
import Engaged from './engaged/Engaged';
import Nav from './nav/Nav';
import Married from './married/Married';

function App() {
  const [ page, setPage ] = useState(0)
  return (
    <div className={ styles.App }>
      <div className={ styles.navbar }>
        <Nav 
          onSelect={ (n) => setPage(n) }
          selected={ page }
        />
      </div>
      <div
        className={ styles.body }>
        {
          page === 0 && <Met />
        }
        {
          page === 1 && <Dating />
        }
        {
          page === 2 && <Engaged />
        }
        {
          page === 3 && <Married />
        }
      </div>
    </div>
  );
}

export default App;
