import cappuccinoImg from '../assets/img/cappuccino.png';
import chaiLatteImg from '../assets/img/chai-latte.png';
import espressoImg from '../assets/img/espresso.png'
import macchiatoImg from '../assets/img/macchiato.png';
import authorImg from '../assets/img/author.jpeg';
import CoffeeBeansIcon from '../assets/icons/coffeeBeans.svg?react';
import BadgeIcon from '../assets/icons/badge.svg?react';
import CoffeeCup from '../assets/icons/coffeeCup.svg?react';
import BestPrice from '../assets/icons/bestPrice.svg?react';
import FacebookIcon from '../assets/icons/facebook.svg?react';
import InstagramIcon from '../assets/icons/instagram.svg?react';
import YoutubeIcon from '../assets/icons/youtube.svg?react';
import TwitterIcon from '../assets/icons/twitter.svg?react';

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const HEADER_NAVIGATION_MAP = [
  {
    id: 0,
    title: 'Home',
    url: "#main-banner-section",
  },
  {
    id: 1,
    title: 'Menu',
    url: '#new-coffee-blend',
  },
  {
    id: 2,
    title: 'About Us',
    url: '#about-us',
  },
  {
    id: 3,
    title: 'Contact Us',
    url: '#footer',
  }
];

export const NEW_BLEND_COFFEE_DATA = [
  {
    id: 0,
    alt: 'cappuccino blend',
    src: cappuccinoImg,
    title: 'Cappuccino',
    description: 'Coffee 50% | Milk 50%',
    price: 8.5,
  },
  {
    id: 1,
    alt: 'chai latte blend',
    src: chaiLatteImg,
    title: 'Chai Latte',
    description: 'Coffee 40% | Milk 60%',
    price: 9.5,
  },
  {
    id: 2,
    alt: 'macchiato blend',
    src: macchiatoImg,
    title: 'Macchiato',
    description: 'Coffee 45% | Milk 55%',
    price: 10.5,
  },
  {
    id: 3,
    alt: 'espresso blend',
    src: espressoImg,
    title: 'Espresso',
    description: 'Coffee 65% | Milk 35%',
    price: 7.5,
  }
];

export const ABOUT_US_DATA = [
  {
    id: 0,
    title: 'Supreme Beans',
    description: 'Beans that provides great taste',
    iconComponent: <CoffeeBeansIcon />
  },
  {
    id: 1,
    title: 'High Quality',
    description: 'We provide the highest quality',
    iconComponent: <BadgeIcon />
  },
  {
    id: 2,
    title: 'Extraordinary',
    description: 'Coffee like you have never tasted',
    iconComponent: <CoffeeCup />
  },
  {
    id: 3,
    title: 'Affordable Price',
    description: 'Our Coffee prices are easy to afford',
    iconComponent: <BestPrice />
  }
];

export const FEEDBACKS_DATA = [
  {
    id: 0,
    feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
    authorInfo: {
      fullName: "Jonny Thomas",
      workPosition: "Project Manager",
      imageSrc: authorImg,
    },
  },
  {
    id: 1,
    feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
    authorInfo: {
      fullName: "Tom Borklin",
      workPosition: "QA Engineer",
      imageSrc: authorImg,
    },
  },
  {
    id: 2,
    feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
    authorInfo: {
      fullName: "Josh Morgan",
      workPosition: "Web Developer",
      imageSrc: authorImg,
    },
  }
];

export const SOCIALS = [
  { id: 0, iconComponent: <FacebookIcon /> },
  { id: 1, iconComponent: <InstagramIcon /> },
  { id: 2, iconComponent: <YoutubeIcon /> },
  { id: 3, iconComponent: <TwitterIcon /> },
];

export const FOOTER_SECTIONS = [
  {
    id: 0,
    title: 'About',
    subSections: [
      { id: 0, title: 'Menu', url: '#new-coffee-blend' },
      { id: 1, title: 'Features', url: '' },
      { id: 2, title: 'News & Blogs', url: '' },
      { id: 3, title: 'Help & Support', url: '' },
    ],
  },
  {
    id: 1,
    title: 'Company',
    subSections: [
      { id: 0, title: 'How we work', url: '' },
      { id: 1, title: 'Terms of service', url: '' },
      { id: 2, title: 'Pricing', url: '' },
      { id: 3, title: 'FAQ', url: '' },
    ],
  },
];

export const SMALL_PHONE_BREAKPOINT = 'small-phone';
export const PHONE_BREAKPOINT = 'phone';
export const TABLET_BREAKPOINT = 'tablet';
export const SMALL_DESKTOP_BREAKPOINT = 'small-desktop';

export const BREAKPOINTS = {
  [SMALL_PHONE_BREAKPOINT]: 480,
  [PHONE_BREAKPOINT]: 768,
  [TABLET_BREAKPOINT]: 1024,
  [SMALL_DESKTOP_BREAKPOINT]: 1280,
};

export const ACTION_MODAL_APPEARANCE_TIME = 5; // seconds
