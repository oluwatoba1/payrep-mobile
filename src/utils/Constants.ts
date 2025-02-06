import { Dimensions, StatusBar } from 'react-native';

import {
  APP_MODE,
  PROD_BASE_URL,
  SANDBOX_BASE_URL,
} from '@env';
import ComponentImages from '../../assets/images/components';

export const { height, width } = Dimensions.get('window');

export const baseDP = 10;

export const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 15;

export const MAIN_LAYOUT_HORIZONTAL_PADDING = 16;

export const BOTTOM_TAB_CONTAINER_HEIGHT = 71;

export const HEADER_CONTAINER_HEIGHT = 60;

export const RESEND_COUNTDOWN = 300;

export const ONBOARDING_DATA = [
  {
    title: 'Welcome to PayRep',
    description:
      'Your all-in-one platform for seamless, secure, and efficient payment solutions through POS terminals and mobile app transactions',
    backgroundImage: ComponentImages.onboarding.one,
    progressImage: ComponentImages.onboarding.progressOnePng,
  },
  {
    title: 'Secure Transactions',
    description:
      'Your financial security is our top priority. Rest easy, knowing your transactions are protected by state-of-the-art security measures',
    backgroundImage: ComponentImages.onboarding.two,
    progressImage: ComponentImages.onboarding.progressTwoPng,
  },
  {
    title: '24/7 Support',
    description:
      'Our support team is available around the clock to assist agents, merchants, and individual users whenever needed',
    backgroundImage: ComponentImages.onboarding.three,
    progressImage: ComponentImages.onboarding.progressThreePng,
  },
];

export const USER_TYPES = [
  {
    title: 'Personal',
    description:
      'An customer Performs transfers using the POS or mobile app without the necessity of manually inputting settlement details',
    icon: ComponentImages.userTypeCard.individual,
    value: 'individual',
  },
  {
    title: 'Corporate',
    description:
      'A merchant uses a POS for transactions but focuses on settling funds with a designated bank rather than transferring to other accounts',
    icon: ComponentImages.userTypeCard.merchant,
    value: 'merchant',
  },
];

export const BASE_URL = APP_MODE === 'development' ? SANDBOX_BASE_URL : PROD_BASE_URL;
console.log("BASE_URL::::::::: ", BASE_URL)
export const DEFAULT_ERROR_MESSAGE = "An unexpected error occurred"