import { useState, useEffect } from 'react';
import { 
  AboutUsCard,
  BackgroundImage,
  CardsList,
  CoffeeCard,
  Header,
  Image,
  PrimaryButton,
  FeedbacksSlider,
  EmailInput,
  Footer,
  BurgerButton,
} from "../../components";
import bannerImg from '../../assets/img/coffee.png';
import morningCoffeeImg from '../../assets/img/morning-coffee.png';
import coffeeBeanImg from '../../assets/img/coffee-bean.png';
import CoffeeIcon from '../../assets/icons/coffee.svg?react';
import coffeeCupImg from '../../assets/img/coffee-cup.png';
import { 
  ABOUT_US_DATA, 
  BREAKPOINTS,
  NEW_BLEND_COFFEE_DATA,
  TABLET_BREAKPOINT,
} from '../../utils/constants';
import { usePageWidth } from '../../hooks/usePageWidth';

import styles from './home.module.scss';

const HomePage = () => {
  const [isMobileHeaderOpened, setIsMobileHeaderOpened] = useState(false);

  useEffect(() => {
    if (isMobileHeaderOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    }
  }, [isMobileHeaderOpened]);

  const handleCloseMobileHeaderOnResize = (newPageWidth) => {
    if (newPageWidth > BREAKPOINTS[TABLET_BREAKPOINT]) {
      setIsMobileHeaderOpened(false);
    }
  };

  const pageWidth = usePageWidth(handleCloseMobileHeaderOnResize);

  const handleOrderNowClick = () => {
    console.log('ORDER_NOW');
  };

  const handleLearnMoreClick = () => {
    console.log('LEARN_MORE');
  };

  const handleJoinUsClick = () => {
    console.log('JOIN_US');
  };

  const handleEmailSubmit = (email) => {
    console.log("EMAIL_SUBMIT: ", email);
  };

  const handleBurgerClick = () => {
    setIsMobileHeaderOpened(prevValue => !prevValue);
  };

  const getHeaderTranslateValue = () => {
    if (pageWidth > BREAKPOINTS[TABLET_BREAKPOINT]) {
      return 0;
    }

    return isMobileHeaderOpened ? 0 : 100;
  };

  return (
    <div className={styles.homePage}>
      <section id="main-banner-section">
        <BackgroundImage
          src={bannerImg}
          alt='coffee'
          fetchPriority='high'
          width={1366}
          height={768}
          contentWrapClasses='gradient'
        >
          <div className={`${styles.mainBannerContainer} layout`}>
            <div
              className={styles.headerWrap}
              style={{ transform: `translateX(${getHeaderTranslateValue()}%)` }}
            >
              <Header />
            </div>
            <div className={`${styles.burgerMenu} ${isMobileHeaderOpened ? styles.fixed : ''}`}>
              <BurgerButton isBurgerState={!isMobileHeaderOpened} onClick={handleBurgerClick} />
            </div>

            <div className={styles.bannerTextWrap}>
              <h3 className={`${styles.bannerHeader} text-white`}>We’ve got your morning covered with</h3>
              <div className={styles.bannerIconWrap}>
                <CoffeeIcon />
              </div>
              <p className="text-regular text-white">
                It is best to start your day with a cup of coffee. Discover the
                best flavours coffee you will ever have. We provide the best
                for our customers.
              </p>
              <div className={styles.bannerButtonWrap}>
                <PrimaryButton
                  isFilled={true}
                  name="order-now"
                  onClick={handleOrderNowClick}
                >
                  <strong>Order Now</strong>
                </PrimaryButton>
              </div>
            </div>
          </div>
        </BackgroundImage>
      </section>

      <section id="best-coffee">
        <div className={`${styles.bestCoffeeContainer} layout`}>
          <div className={styles.bestCoffeeTextWrap}>
            <h2 className={`${styles.bestCoffeeHeader} text-brown section-header`}>Discover the best coffee</h2>
            <p className="text-regular text-gray">
              Bean Scene is a coffee shop that provides you with quality coffee that helps 
              boost your productivity and helps build your mood. Having a cup of coffee is good, 
              but having a cup of real coffee is greater. There is no doubt that you will enjoy 
              this coffee more than others you have ever tasted.
            </p>
            <div className={styles.bestCoffeeButtonWrap}>
              <PrimaryButton
                isFilled={true}
                name="learn-more"
                onClick={handleLearnMoreClick}
              >
                <strong>Learn More</strong>
              </PrimaryButton>
            </div>
          </div>

          <div>
            <Image
              alt="coffee cup"
              src={coffeeCupImg}
              width={559}
              height={426}
            />
          </div>
        </div>
      </section>

      <section id="new-coffee-blend">
        <div className={`${styles.newBlendContainer} layout`}>
          <h2 className={`${styles.newBlendHeader} text-brown section-header`}>
            Enjoy a new blend of coffee style
          </h2>
          <p className="text-regular text-gray">
            Explore all flavours of coffee with us. There is always a new cup worth experiencing
          </p>
          <div className={styles.newBlendCoffeeListWrap}>
            <CardsList>
              {NEW_BLEND_COFFEE_DATA.map(({ id, ...restData }) => (
                <CoffeeCard
                  key={id}
                  {...restData}
                />
              ))}
            </CardsList>
          </div>
        </div>
      </section>

      <section id="about-us">
        <div className={`${styles.aboutUsContainer} layout`}>
          <h2 className={`${styles.newBlendHeader} text-brown section-header`}>
            Why are we different?
          </h2>
          <p className="text-regular text-gray">
            We don’t just make your coffee, we make your day!
          </p>
          <div className={styles.aboutUsListWrap}>
            <CardsList>
              {ABOUT_US_DATA.map(({ id, iconComponent, ...restCardData }) => (
                <AboutUsCard key={id} {...restCardData}>
                  {iconComponent}
                </AboutUsCard>
              ))}
            </CardsList>
          </div>
          <p className="text-regular text-gray">
            Great ideas start with great coffee, Lets help you achieve that
          </p>
          <h3 className={`${styles.aboutUsSubHeader} text-brown`}>
            Get started today.
          </h3>
          <PrimaryButton
            isFilled={true}
            onClick={handleJoinUsClick}
          >
            <strong>Join Us</strong>
          </PrimaryButton>
        </div>
      </section>

      <section id="morning-coffee">
        <div className={styles.morningCoffeeContainer}>
          <BackgroundImage
            src={morningCoffeeImg}
            alt='morning coffee'
            width={1366}
            height={574}
            contentWrapClasses='coffee-background'
          >
            <div className={`${styles.morningCoffeeContent} layout`}>
              <div className={styles.morningCoffeeContentWrap}>
                <h2 className="text-white section-header">
                  Get a chance to have an Amazing morning
                </h2>
                <p className={`${styles.morningCoffeeDescription} text-regular text-white`}>
                  We are giving you are one time opportunity to
                  experience a better life with coffee.
                </p>
                <PrimaryButton
                  isFilled={true}
                  onClick={handleOrderNowClick}
                >
                  <strong>Order Now</strong>
                </PrimaryButton>
              </div> 
            </div>

            <div className={styles.morningCoffeeImageWrap}>
              <Image
                alt="coffee beans"
                src={coffeeBeanImg}
                width={657}
                height={574}
              />
            </div>
          </BackgroundImage>
        </div>
      </section>

      <section id="feedback">
        <div className={`${styles.feedbackContainer} layout`}>
          <h2 className="text-brown section-header">
            Our coffee perfection feedback
          </h2>
          <p className={`${styles.feedbackDescription} text-regular text-gray`}>
            Our customers has amazing things to say about us
          </p>
          <FeedbacksSlider />
        </div>
      </section>

      <section id="subscribe">
        <div className={styles.subscribeContainer}>
          <BackgroundImage
            src={morningCoffeeImg}
            alt='morning coffee'
            width={1366}
            height={374}
            contentWrapClasses='coffee-background'
          >
            <div className={`${styles.subscribeContent} layout`}>
              <h2 className="text-white section-header">
                Subscribe to get the Latest News
              </h2>
              <p className={`${styles.subscribeDescription} text-regular text-white`}>
                Our customers has amazing things to say about us
              </p>
              <div className={styles.subscribeEmailInoutWrap}>
                <EmailInput
                  placeholder="Enter your mail"
                  buttonText="Subscribe"
                  onSubmit={handleEmailSubmit}
                />
              </div>
            </div>
          </BackgroundImage>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default HomePage;
