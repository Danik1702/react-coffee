import PropTypes from 'prop-types';
import styles from './actionCard.module.scss';
import CrossIcon from '../../assets/icons/cross.svg?react';

export const ActionCard = ({ appearanceTime = 3, onClose, children }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClose();
    }
  }

  return (
    <div 
      className={styles.actionCard} 
      style={{ '--appearanceTime': `${appearanceTime + 0.3}s` }}
    >
      <div className={styles.cardContent}>
        {children}
        <div 
          className={styles.crossIconWrap} 
          tabIndex={0} 
          aria-label='close action modal'
          onClick={onClose}
          onKeyDown={handleKeyDown}
        >
          <CrossIcon />
        </div>
      </div>

      <div 
        className={styles.actionCardTimeline} 
        style={{ '--appearanceTime': `${appearanceTime}s` }} 
      />
    </div>
  );
}

ActionCard.propTypes = {
  appearanceTime: PropTypes.number,
};
