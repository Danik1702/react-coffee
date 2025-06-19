import { useState } from 'react';
import { FeedbackCard, SquareButton } from '../index';
import styles from './feedbacksSlider.module.scss';
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg?react';
import { FEEDBACKS_DATA } from '../../utils/constants';

export const FeedbacksSlider = () => { 
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesCount = FEEDBACKS_DATA.length;
  
  const handlePrev = () => {
    setActiveSlide(prevSlide =>
      prevSlide === 0 ? slidesCount - 1 : activeSlide - 1
    );
  };

  const handleNext = () => {
    setActiveSlide(prevSlide => 
      prevSlide === slidesCount - 1 ? 0 : activeSlide + 1
    );
  };

  return (
    <div className={styles.sliderContainer}>
      {activeSlide !== 0 && (
        <div className={styles.prevButtonWrap}>
          <SquareButton
            onClick={handlePrev}
            label="go to previous carousel's item"
          >
            <ArrowLeftIcon />
          </SquareButton>
        </div>
      )}

      <div className={styles.sliderWrap}>
        <ul 
          className={styles.slider} 
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {FEEDBACKS_DATA.map(({ id, ...restFeedbackData }) => (
            <li
              key={id}
              className={styles.slide}
            >
              <FeedbackCard {...restFeedbackData} />
            </li>
          ))}
        </ul>
      </div>

      {activeSlide !== slidesCount - 1 && (
      <div className={styles.nextButtonWrap}>
        <SquareButton
          onClick={handleNext}
          label="go to previous carousel's item"
        >
          <ArrowLeftIcon />
        </SquareButton>
      </div>
      )}
    </div>
  )
};
