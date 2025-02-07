import AsyncStorage from '@react-native-async-storage/async-storage';

import { height, width } from './Constants';
import {
  APP_STATE
} from '@env';

const GUIDELINEWIDTH = 375;
const GUIDELINEHEIGHT = 812;

export const scale = (size: number, factor: number = 1.02): number =>
  (width / GUIDELINEWIDTH / factor) * size; // scale dp according to width

export const scaleHeight = (size: number): number =>
  (height / GUIDELINEHEIGHT) * size; // scale dp according to height

export const moderateScale = (size: number, factor: number = 0.5) =>
  size + (scale(size) - size) * factor; // font-size, border-radius

export const formatLabel = (key: string) => {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
};

export const groupNotificationsByDate = (notifications: INotification[]) => {
  const groups: { [key: string]: INotification[] } = {};

  const sortedNotifications = notifications.sort(
    (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime(),
  );

  sortedNotifications.forEach(notification => {
    const notificationDate = new Date(notification.time);
    const today = new Date();

    const isSameDay =
      notificationDate.getDate() === today.getDate() &&
      notificationDate.getMonth() === today.getMonth() &&
      notificationDate.getFullYear() === today.getFullYear();

    let dateKey: string;

    if (isSameDay) {
      dateKey = 'Today';
    } else {
      dateKey = formatDate(notificationDate);
    }

    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(notification);
  });

  return Object.keys(groups)
    .sort((a, b) => {
      if (a === 'Today') return -1;
      if (b === 'Today') return 1;

      return new Date(b).getTime() - new Date(a).getTime();
    })
    .map(date => ({
      title: date,
      notifications: groups[date],
    }));
};

const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  const daySuffix = getDaySuffix(day);

  return `${day}${daySuffix} ${month}, ${year}`;
};

const getDaySuffix = (day: number): string => {
  if (day >= 11 && day <= 13) return 'th';
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

export const getRelativeTime = (notificationDate: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - notificationDate.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffYears > 0) {
    if (diffYears === 1) return '1 year ago';
    return `${diffYears} years ago`;
  } else if (diffMonths > 0) {
    if (diffMonths === 1) return '1 month ago';
    return `${diffMonths} months ago`;
  } else if (diffDays > 0) {
    if (diffDays === 1) return '1 day ago';
    return `${diffDays} days ago`;
  } else if (diffHours > 0) {
    if (diffHours === 1) return '1 hour ago';
    return `${diffHours} hours ago`;
  } else if (diffMinutes > 0) {
    if (diffMinutes === 1) return '1 minute ago';
    return `${diffMinutes} minutes ago`;
  } else {
    return 'Just now';
  }
};

export const formatCountdown = (countdown: number) => {
  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  return `${hours > 0 ? `${hours.toString().padStart(2, '0')}:` : ''}${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export const fetchAppState = async (): Promise<IAppState | null> => {
  try {
    const data = await AsyncStorage.getItem(APP_STATE);

    return data ? JSON.parse(data) : data;
  } catch (error) {
    // Do we really want to show users this error. I think its better to catch this type of errors with something like sentry
    return null;
  }
};

export async function persistAppState(state: Partial<IAppState>): Promise<void> {
  try {
    const appState = (await fetchAppState()) || {};
    const data = {
      ...appState,
      ...state,
    };
    await AsyncStorage.setItem(APP_STATE, JSON.stringify(data));
  } catch (error) {
    //TODO: Decide on what to do here
  }
}

export const chunkArray = (array: Array<any> = [], size: number) => {
  let index = 0;
  const chunkedArray = [];

  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + size));
    index += size;
  }

  return chunkedArray;
};