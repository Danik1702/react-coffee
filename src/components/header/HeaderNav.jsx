import PropTypes from 'prop-types';
import styles from './headerNav.module.scss';
import { HEADER_NAVIGATION_MAP } from '../../utils/constants';

export const HeaderNav = ({ onCloseMobileHeader }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onCloseMobileHeader();
    }
  }

  return (
    <nav className={styles.headerNav}>
      <ul className="text-white">
        {HEADER_NAVIGATION_MAP.map(({ id, title, url }) => (
          <li key={id} className={styles.navItem}>
            <a href={url} onKeyDown={handleKeyDown}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

HeaderNav.propTypes = {
  onCloseMobileHeader: PropTypes.func,
};
