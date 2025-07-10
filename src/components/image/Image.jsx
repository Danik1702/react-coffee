import PropTypes from "prop-types";
import styles from './image.module.scss';

export const Image = ({ 
  alt,
  src,
  fetchPriority,
  width,
  height,
  srcset,
  sizes,
}) => {
  return (
    <img
      className={styles.image}
      alt={alt}
      src={src}
      fetchPriority={fetchPriority}
      width={width}
      height={height}
      srcset={srcset}
      sizes={sizes}
    />
  );
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  fetchPriority: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  srcset: PropTypes.string,
  sizes: PropTypes.string,
};

Image.defaultProps = {
  fetchPriority: 'auto',
};
