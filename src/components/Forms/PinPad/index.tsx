import React, { useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  Text,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

import styles from './styles';
import Colors from '../../../theme/Colors';
import Pad from '../../Pad';

interface PinPadProps {
  codeLength?: number;
  pin: string;
  secure?: boolean;
  onInput: (value: string) => void;
  onResendOtp?: () => void;
  error: string
}

export default function PinPad({
  codeLength = 4,
  pin = '',
  secure = true,
  onInput,
  onResendOtp,
  error
}: PinPadProps) {
  const refs: any[] = Array.from({ length: codeLength }, () => useRef());

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (event.nativeEvent.key === 'Backspace') {
      onInput(pin.substring(0, pin.length - 1));
      refs[pin.length - 1]?.current?.focus();
    }
  };

  const _onInput = (value: string) => {
    const newPin = pin + value;
    const acceptablePin =
      newPin.length > codeLength ? newPin.substring(0, codeLength) : newPin;
    onInput(acceptablePin);
    refs[acceptablePin.length]?.current?.focus();
  };

  const handleCopiedText = (args: any) => { };

  useEffect(() => {
    const clipboardListener = Clipboard.addListener(() => { });
    clipboardListener.emitter?.addListener(
      'CLIPBOARD_TEXT_CHANGED',
      handleCopiedText,
    );
    return () => {
      clipboardListener.emitter?.removeAllListeners('CLIPBOARD_TEXT_CHANGED');
    };
  }, []);

  useEffect(() => {
    const acceptedString =
      pin.length > codeLength ? pin.substring(0, codeLength) : pin;
    refs[acceptedString.length]?.current?.focus();
    onInput(acceptedString);
  }, [pin]);

  return (
    <View>
      <View style={styles.pinPadContainer}>
        {refs.map((ref, index) => (
          <TextInput
            key={index}
            ref={ref}
            onKeyPress={handleKeyPress}
            value={pin[index] || ''}
            onChangeText={_onInput}
            keyboardType="numeric"
            secureTextEntry={secure}
            style={styles.pinPad(
              pin.length === index,
              refs.length === index + 1,
              codeLength,
            )}
            cursorColor={Colors.black}
          />
        ))}
      </View>
      <Pad />
      {error && <Text style={styles.error}>{error}</Text>}
      <Pad size={16} />
      {onResendOtp ? (
        <View />
      ) : // Do something here later
        null}
    </View>
  );
}
