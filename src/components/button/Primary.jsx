import PropTypes from 'prop-types';
import styles from './primary.module.scss';

export const PrimaryButton = ({ isFilled, onClick, name, children }) => {
  return (
    <button 
      onClick={onClick}
      className={`${styles.button} ${isFilled ? styles.filled : ''}`}
      name={name}
    >
      {children}
    </button>
  );
};

PrimaryButton.propTypes = {
  isFilled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string,
};

PrimaryButton.defaultProps = {
  isFilled: false,
};
