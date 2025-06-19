import { PrimaryButton } from '../button';
import { HeaderNav } from './HeaderNav';
import LogoIcon from '../../assets/icons/logo.svg?react';
import styles from './header.module.scss';

const SIGN_IN_BUTTON_NAME = 'sign-in';
const SIGN_UP_BUTTON_NAME = 'sign-up';

export const Header = () => {
  const handleAuthClick = (e) => {
    if (e.target.name === SIGN_IN_BUTTON_NAME) {
      console.log('SIGN_IN_HANDLER');
    }
    if (e.target.name === SIGN_UP_BUTTON_NAME) {
      console.log('SIGN_UP_HANDLER');
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <LogoIcon />
      </div>

      <HeaderNav />

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