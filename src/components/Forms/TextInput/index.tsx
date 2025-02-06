import { ReactNode, useEffect, useState } from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputProps,
  Image,
  Pressable,
} from 'react-native';

import { Typography } from '@components/Forms';
import styles from './styles';
import ComponentImages from '@assets/images/components';
import { Row } from '@components/Layout';
import Colors from '@theme/Colors';
import Pad from '@components/Pad';

interface RNTextInputProps extends TextInputProps {
  label: string;
  type?: 'text' | 'phone' | 'password';
  leftNode?: ReactNode;
  rightNode?: ReactNode;
  leftNodeAction?: () => void;
  rightNodeAction?: () => void;
  error?: string;
}

export default function TextInput({
  label,
  type,
  leftNode,
  rightNode,
  leftNodeAction,
  rightNodeAction,
  error,
  placeholder,
  ...props
}: RNTextInputProps) {
  const [leftElement, setLeftElement] = useState<ReactNode | null>(leftNode);
  const [rightElement, setRightElement] = useState<ReactNode | null>(rightNode);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(
    !(type === 'password'),
  );

  const handleInputType = () => {
    switch (type) {
      case 'phone':
        setLeftElement(
          <Pressable onPress={leftNodeAction}>
            <Row justifyContent="flex-start" gap={8}>
              <Image
                source={ComponentImages.textInput.flag}
                style={styles.flagIcon}
              />
              <Typography title="+234" type="body-sr" color="#9DA1A8" />
            </Row>
          </Pressable>,
        );
        break;
      case 'password':
        setRightElement(
          <Pressable
            onPress={() =>
              rightNodeAction
                ? rightNodeAction()
                : setPasswordVisible(!passwordVisible)
            }>
            <Image
              source={
                passwordVisible
                  ? ComponentImages.textInput.eyeLiner
                  : ComponentImages.textInput.offEyeLiner
              }
            />
          </Pressable>,
        );
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    handleInputType();
  }, [type, passwordVisible]);

  return (
    <View style={styles.inputContainer}>
      {isFocused ? (
        <Typography title={label} type="label-sb" style={styles.inputLabel} />
      ) : null}
      <View style={styles.textInputContainer}>
        <Row justifyContent="flex-start" gap={10} containerStyle={{ flex: 1 }}>
          {leftElement ? (
            <View style={styles.leftNodeContainer}>{leftElement}</View>
          ) : null}
          <RNTextInput
            style={styles.textInput}
            cursorColor={Colors.black}
            placeholder={placeholder || label}
            placeholderTextColor={Colors.custom.textInputPlaceholderColor}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            secureTextEntry={!passwordVisible}
            {...props}
          />
        </Row>
        {rightElement ? (
          <View style={styles.rightNodeContainer}>{rightElement}</View>
        ) : null}
      </View>
      {error ? (
        <View>
          <Pad size={4} />
          <Typography title={error} color={Colors.danger.base} type="label-r" />
        </View>
      ) : null}
    </View>
  );
}
