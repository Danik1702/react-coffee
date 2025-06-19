import PropTypes from 'prop-types';
import styles from './square.module.scss';

export const SquareButton = ({ onClick, label, children }) => {
  return (
    <button
      className={styles.squareButton}
      onClick={onClick}
      aria-label={label}
    >
      {children}
    </button>
  );
};

SquareButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
};
