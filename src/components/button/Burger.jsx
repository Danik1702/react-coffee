import PropTypes from 'prop-types';
import styles from './burger.module.scss';

export const BurgerButton = ({ isBurgerState, onClick }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  }

  return (
    <div
      className={styles.burgerContainer}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <div className={`${isBurgerState ? styles.burgerWrap : styles.crossWrap} ${styles.contentWrap}`}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

BurgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
