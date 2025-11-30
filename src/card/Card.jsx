import DashaPic from 'D:\\IT\\REACT\\my-react-app\\src\\assets\\dasha_taran.png';
import styles from './Card.module.css';

function Card() {
    return (
      <div className={styles.card}>
        <img className={styles.card-image} src={DashaPic} alt="This is my profile" />
        <h2 className={styles.card-title}>Dasha Taran</h2>
        <p className={styles.card-text}>So...Beautiful</p>
      </div>
    );
}

export default Card;