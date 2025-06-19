import PropTypes from 'prop-types';
import styles from './backgroundImage.module.scss';
import { Image } from '../image/Image';

export const BackgroundImage = ({ contentWrapClasses, children, ...imageProps }) => {
  return (
    <div className={styles.imageWrapper}>
      <Image {...imageProps} />
      <div className={`${styles.contentWrapper} ${contentWrapClasses}`}>
        {children}
      </div>
    </div>
  );
};

BackgroundImage.propTypes = {
  contentWrapClass: PropTypes.string,
};

BackgroundImage.defaultProps = {
  contentWrapClass: '',
};
