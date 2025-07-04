import React from 'react';
import { BackgroundImage } from '../index';
import footerImg from '../../assets/img/footer-image.png';
import LogoIcon from '../../assets/icons/logo.svg?react';
import { SOCIALS, FOOTER_SECTIONS } from '../../utils/constants';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer id="footer">
      <BackgroundImage
        alt="coffee beans"
        src={footerImg}
        width={1366}
        height={384}
        contentWrapClasses="coffee-background"
      >
        <div className={`${styles.footerContent} layout`}>
          <div className={styles.footerContentGrid}>
            <div className={styles.leftSection}>
              <div className={styles.socialsContainer}>
                <LogoIcon />
                <p className={`${styles.socialsDescription} text-white`}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <ul className={styles.socialsList}>
                  {SOCIALS.map(({ id, iconComponent }) => (
                    <li key={id}>
                      {iconComponent}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.rightSection}>
              {FOOTER_SECTIONS.map(section => (
                <div key={section.id} className={styles.footerSection}>
                  <h4 className={`${styles.footerSectionTitle} text-white`}>{section.title}</h4>
                  <div className={styles.footerSubSectionContainer}>
                    {section.subSections.map(subSection => (
                      <React.Fragment key={subSection.id}>
                        {subSection.url ? (
                          <a 
                            className={`${styles.footerSubSectionTitle} text-white`}
                            href={subSection.url}
                          >
                            {subSection.title}
                          </a>
                        ) : (
                          <p className={`${styles.footerSubSectionTitle} text-white`}>{subSection.title}</p>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BackgroundImage>
    </footer>
  );
};
