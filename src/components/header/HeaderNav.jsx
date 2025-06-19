import styles from './headerNav.module.scss';
import { HEADER_NAVIGATION_MAP } from '../../utils/constants';

export const HeaderNav = () => {
  return (
    <nav className={styles.headerNav}>
      <ul className="text-white">
        {HEADER_NAVIGATION_MAP.map(({ id, title, url }) => (
          <li key={id} className={styles.navItem}>
            <a href={url}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
