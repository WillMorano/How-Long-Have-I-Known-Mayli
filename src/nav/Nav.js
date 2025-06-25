import styles from './Nav.module.css';

function Nav(props) {
  return (
    <div className={ styles.container }>
      <div 
        className={ styles.link }
        style={ {
          color: props.selected === 0 ? "white" : "grey"
        } }
        onClick={ () => props.onSelect(0) }>
        Met
      </div>
      <div 
        className={ styles.link }
        onClick={ () => props.onSelect(1) }
        style={ {
          color: props.selected === 1 ? "white" : "grey"
        } }>
        Dated
      </div>
      <div 
        className={ styles.link }
        onClick={ () => props.onSelect(2) }
        style={ {
          color: props.selected === 2 ? "white" : "grey"
        } }>
        Engaged
      </div>
      <div 
        className={ styles.link }
        onClick={ () => props.onSelect(3) }
        style={ {
          color: props.selected === 3 ? "white" : "grey"
        } }>
        Married
      </div>
    </div>
  );
}

export default Nav;
