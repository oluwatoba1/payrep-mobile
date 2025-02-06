import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import { AppNavigator } from './src/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Toast } from './src/components';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
        animated
      />
      <Toast />
      <AppNavigator />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
