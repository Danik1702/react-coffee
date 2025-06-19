import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Image, PrimaryButton } from '../index';
import styles from './coffeeCard.module.scss';

export const CoffeeCard = ({
  alt,
  src,
  title,
  description,
  price
}) => {
  const [oderNowBottomPos, setOrderNoBottomPos] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      setOrderNoBottomPos(-Math.round(buttonRef.current.offsetHeight / 2));
    }
  }, [buttonRef]);

  const handleOrderNow = () => {
    console.log(`COFFEE_CARD - ${title}`)
  };

  return (
    <div className={styles.coffeeCard}>
      <Image
        alt={alt}
        src={src}
        width={280}
        height={222}
      />

      <div className={styles.coffeeCardTextContainer}>
        <h4 className={`${styles.coffeeCardHeader} text-brown`}>{title}</h4>
        <p className={`${styles.coffeeCardDescription} text-black`}>{description}</p>
        <p className={`${styles.coffeeCardPrice} text-brown`}>${price.toFixed(2)}</p>
        <div className={`${styles.coffeeCardButtonWrap}`} style={{ bottom: `${oderNowBottomPos}px` }} ref={buttonRef}>
          <PrimaryButton
            isFilled={true}
            onClick={handleOrderNow}
          >
            <strong>Order Now</strong>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};
