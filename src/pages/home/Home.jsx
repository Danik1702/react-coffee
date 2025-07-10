import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  AboutUsCard,
  ActionCard,
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
import bannerImgL from '../../assets/img/coffee-1280.jpg';
import bannerImgM from '../../assets/img/coffee-768.jpg';
import bannerImgS from '../../assets/img/coffee-480.jpg';
import morningCoffeeImgL from '../../assets/img/morning-coffee-1280.jpg';
import morningCoffeeImgM from '../../assets/img/morning-coffee-768.jpg';
import morningCoffeeImgS from '../../assets/img/morning-coffee-480.jpg';
import coffeeBeanImgM from '../../assets/img/coffee-bean-768.png';
import coffeeBeanImgS from '../../assets/img/coffee-bean-480.png';
import CoffeeIcon from '../../assets/icons/coffee.svg?react';
import coffeeCupImg from '../../assets/img/coffee-cup.png';
import { 
  ABOUT_US_DATA, 
  ACTION_MODAL_APPEARANCE_TIME,
  BREAKPOINTS,
  NEW_BLEND_COFFEE_DATA,
  TABLET_BREAKPOINT,
} from '../../utils/constants';
import { generateSrcSet } from '../../utils/generateSrcSet';
import { usePageWidth } from '../../hooks/usePageWidth';
import { 
  addActionModal,
  getActionModalsData,
  getIsActionModalVisible,
  removeModal, 
} from '../../store/reducers/actionModal';

import styles from './home.module.scss';

const HomePage = () => {
  const [isMobileHeaderOpened, setIsMobileHeaderOpened] = useState(false);

  const dispatch = useDispatch();

  const isActionModalVisible = useSelector(getIsActionModalVisible);
  const actionModalsData = useSelector(getActionModalsData);

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
    dispatch(addActionModal({
      id: 'order-now',
      title: 'Order Now Action',
      appearanceTime: ACTION_MODAL_APPEARANCE_TIME,
    }));
  };

  const handleLearnMoreClick = () => {
    dispatch(addActionModal({
      id: 'learn-more',
      title: 'Learn More Action',
      appearanceTime: ACTION_MODAL_APPEARANCE_TIME,
    }));
  };

  const handleJoinUsClick = () => {
    dispatch(addActionModal({
      id: 'join-us',
      title: 'Join Us Action',
      appearanceTime: ACTION_MODAL_APPEARANCE_TIME,
    }));
  };

  const handleEmailSubmit = (email) => {
    dispatch(addActionModal({
      id: 'email submit',
      title: `Email Submit Action - ${email}`,
      appearanceTime: ACTION_MODAL_APPEARANCE_TIME,
    }));
  };

  const handleBurgerClick = () => {
    setIsMobileHeaderOpened(prevValue => !prevValue);
  };

  const handleCloseActionModal = (id) => {
    dispatch(removeModal(id));
  };

  const getHeaderTranslateValue = () => {
    if (pageWidth > BREAKPOINTS[TABLET_BREAKPOINT]) {
      return 0;
    }

    return isMobileHeaderOpened ? 0 : 100;
  };

  return (
    <div className={styles.homePage}>
      {isActionModalVisible && (
        <div className={styles.actionsModal}>
          {actionModalsData.map(({ id, appearanceTime, title }) => (
            <ActionCard
              key={id} 
              appearanceTime={appearanceTime}
              onClose={() => handleCloseActionModal(id)}
            >
              <p className="text-regular text-black">{title}</p>
            </ActionCard>
          ))}
        </div>
      )}

      <section id="main-banner-section">
        <BackgroundImage
          src={bannerImgL}
          alt='coffee'
          fetchPriority='high'
          width={1366}
          height={768}
          contentWrapClasses='gradient'
          srcset={generateSrcSet([
            [bannerImgL, 1280],
            [bannerImgM, 768],
            [bannerImgS, 480],
          ])}
          sizes="100vw"
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
            src={morningCoffeeImgL}
            alt='morning coffee'
            width={1366}
            height={574}
            contentWrapClasses='coffee-background'
            srcset={generateSrcSet([
              [morningCoffeeImgL, 1280],
              [morningCoffeeImgM, 768],
              [morningCoffeeImgS, 480],
            ])}
            sizes="100vw"
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
                src={coffeeBeanImgM}
                width={657}
                height={574}
                srcset={generateSrcSet([
                  [coffeeBeanImgM, 768],
                  [coffeeBeanImgS, 480],
                ])}
                sizes="50vw"
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
            src={morningCoffeeImgL}
            alt='morning coffee'
            width={1366}
            height={374}
            contentWrapClasses='coffee-background'
            srcset={generateSrcSet([
              [morningCoffeeImgL, 1280],
              [morningCoffeeImgM, 768],
              [morningCoffeeImgS, 480],
            ])}
            sizes="100vw"
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
