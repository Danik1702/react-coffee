import PropTypes from "prop-types";
import styles from './image.module.scss';

export const Image = ({ 
  alt,
  src,
  fetchPriority,
  width,
  height
}) => {
  return (
    <img
      className={styles.image}
      alt={alt}
      src={src}
      fetchPriority={fetchPriority}
      width={width}
      height={height}
    />
  );
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  fetchPriority: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

Image.defaultProps = {
  fetchPriority: 'auto',
};
