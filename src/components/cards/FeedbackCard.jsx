import PropTypes from 'prop-types';
import { Image } from '../image/Image';
import styles from './feedbackCard.module.scss';

export const FeedbackCard = ({ feedback, authorInfo }) => {
  const { fullName, workPosition, imageSrc } = authorInfo;

  return (
    <div className={styles.feedbackCard}>
      <p className={`${styles.feedbackText} text-gray text-align-center`}>{feedback}</p>
      <h4 className={`${styles.feedbackAuthorName} text-brown`}>{fullName}</h4>
      <p className="text-regular text-gray">{workPosition}</p>

      <div className={styles.authorImage}>
        <Image
          alt="feedback's author"
          src={imageSrc}
          width={112}
          height={112}
        />
      </div>
    </div>
  );
};

FeedbackCard.propTypes = {
  feedback: PropTypes.string.isRequired,
  authorInfo: PropTypes.object.isRequired,
};
