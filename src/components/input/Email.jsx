import { useState } from 'react';
import PropTypes from 'prop-types';
import { EMAIL_REGEX } from '../../utils/constants';
import styles from './email.module.scss';

export const EmailInput = ({ placeholder, onSubmit, buttonText }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    onSubmit(email);
    setEmail('');
  };

  const getIsEmailValid = () => {
    return EMAIL_REGEX.test(email);
  };

  return (
    <div className={styles.inputContainer}>
      <form onSubmit={handleEmailSubmit}>
        <input
          className={`${styles.emailInput} text-regular text-black`}
          type="email"
          value={email}
          placeholder={placeholder}
          onChange={handleEmailChange}
        />
        <button
          className={`${styles.submitEmailButton} text-brown`}
          disabled={!getIsEmailValid()}
          type="submit"
        >
          <strong>{buttonText}</strong>
        </button>
      </form>
    </div>
  );
};

EmailInput.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
};
