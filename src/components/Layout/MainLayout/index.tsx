import {ReactNode} from 'react';
import {Keyboard, KeyboardAvoidingView, Platform, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Header} from '..';
import styles from './styles';
import Colors from '@theme/Colors';
import LogoLoader from './LogoLoader';
import Pad from '@components/Pad';
import {BOTTOM_TAB_CONTAINER_HEIGHT} from '@utils/Constants';

interface MainLayoutProps {
  showHeader?: boolean;
  backAction?: () => void;
  children: ReactNode;
  backgroundColor?: string;
  rightTitle?: string;
  rightAction?: () => void;
  enableKeyboardAvoiding?: boolean;
  keyboardAvoidingType?: 'view' | 'scroll-view';
  isLoading?: boolean;
  loadingTitle?: string;
  hasBottomTabBar?: boolean;
}
interface KeyboardAvoiderProps {
  type: 'scroll-view' | 'view';
  enableKeyboardAvoiding: boolean;
  children: ReactNode;
}

const KeyboardAvoider = ({
  type,
  children,
  enableKeyboardAvoiding,
}: KeyboardAvoiderProps) => {
  if (type === 'scroll-view') {
    return (
      <KeyboardAwareScrollView
        style={styles.container}
        contentContainerStyle={{}}
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={enableKeyboardAvoiding}
        enableAutomaticScroll={Platform.OS === 'ios'}
        showsVerticalScrollIndicator={false}
        extraHeight={150}>
        {children}
      </KeyboardAwareScrollView>
    );
  } else {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        enabled={enableKeyboardAvoiding}
        style={styles.container}>
        {children}
      </KeyboardAvoidingView>
    );
  }
};

export default function MainLayout({
  showHeader = true,
  backAction,
  children,
  backgroundColor = Colors.appBackground,
  rightTitle,
  rightAction,
  enableKeyboardAvoiding = true,
  keyboardAvoidingType = 'view',
  isLoading = false,
  loadingTitle = '',
  hasBottomTabBar = false,
}: MainLayoutProps) {
  return (
    <View
      onStartShouldSetResponder={() => {
        Keyboard.dismiss();
        return false;
      }}
      style={[styles.mainLayoutContainer, {backgroundColor}]}>
      <LogoLoader isLoading={isLoading} title={loadingTitle} />
      <KeyboardAvoider
        enableKeyboardAvoiding={enableKeyboardAvoiding}
        type={keyboardAvoidingType}>
        {showHeader ? (
          <Header
            backAction={backAction}
            rightTitle={rightTitle}
            rightAction={rightAction}
          />
        ) : null}
        {children}
        {hasBottomTabBar ? <Pad size={BOTTOM_TAB_CONTAINER_HEIGHT} /> : null}
      </KeyboardAvoider>
    </View>
  );
}
