import PropTypes from 'prop-types';
import styles from './aboutUsCard.module.scss';

export const AboutUsCard = ({ title, description, children }) => {
  return (
    <div className={styles.cardContainer}>
      {children}
      <h4 className={`${styles.cardHeader} text-brown text-align-center`}>{title}</h4>
      <p className={`${styles.cardDescription} text-gray text-align-center`}>{description}</p>
    </div>
  );
};

AboutUsCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

