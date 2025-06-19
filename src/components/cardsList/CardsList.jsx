import styles from './cardsList.module.scss';

export const CardsList = ({ children }) => {
  return (
    <div className={styles.cardsList}>
      {children}
    </div>
  );
};