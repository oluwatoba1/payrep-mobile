import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import { ReactNode } from 'react';
import styles from './styles';
import LogoLoader from '../MainLayout/LogoLoader';

interface AuthLayoutProps {
  children: ReactNode;
  isLoading?: boolean;
  loadingTitle?: string;
}

export default function ({ children, isLoading, loadingTitle }: AuthLayoutProps) {
  // add containerstyle layout
  return (
    <View
      onStartShouldSetResponder={() => {
        Keyboard.dismiss();
        return true;
      }}
      style={styles.authLayoutContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <LogoLoader isLoading={!!isLoading} title={loadingTitle || ''} />
        {children}
      </KeyboardAvoidingView>
    </View>
  );
}
