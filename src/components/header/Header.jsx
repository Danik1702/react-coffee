import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addActionModal } from '../../store/reducers/actionModal';
import { PrimaryButton } from '../button';
import LogoIcon from '../../assets/icons/logo.svg?react';
import { ACTION_MODAL_APPEARANCE_TIME } from '../../utils/constants';
import { HeaderNav } from './HeaderNav';

import styles from './header.module.scss';

const SIGN_IN_BUTTON_NAME = 'sign-in';
const SIGN_UP_BUTTON_NAME = 'sign-up';

export const Header = ({ isMobileHeaderOpened, onCloseMobileHeader }) => {
  const dispatch = useDispatch();

  const handleAuthClick = (e) => {
    if (e.target.name === SIGN_IN_BUTTON_NAME) {
      dispatch(addActionModal({
        id: 'auth-sign-in',
        title: 'Sign In Action',
        appearanceTime: ACTION_MODAL_APPEARANCE_TIME,
      }));
    }
    if (e.target.name === SIGN_UP_BUTTON_NAME) {
      dispatch(addActionModal({
        id: 'auth-sign-up',
        title: 'Sign Up Action',
        appearanceTime: ACTION_MODAL_APPEARANCE_TIME,
      }));
    }
  };

  return (
    <header
      className={styles.header}
      style={{ '--mobileDisplay': `${isMobileHeaderOpened ? 'flex' : 'none'}` }}
    >
      <div className={styles.logoSection}>
        <LogoIcon />
      </div>

      <HeaderNav onCloseMobileHeader={onCloseMobileHeader} />

      <div className={styles.authButtonsWrap}>
        <PrimaryButton 
          name={SIGN_IN_BUTTON_NAME} 
          onClick={handleAuthClick}
        >
          Sign In
        </PrimaryButton>
        <PrimaryButton
          name={SIGN_UP_BUTTON_NAME}
          onClick={handleAuthClick} 
          isFilled={true}
        >
          Sign Up
        </PrimaryButton>
      </div>
    </header>
  );
};

Header.propTypes = {
  isMobileHeaderOpened: PropTypes.bool,
  onCloseMobileHeader: PropTypes.func,
};
