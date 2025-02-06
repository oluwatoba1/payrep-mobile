import {Image, ImageProps, Pressable, View} from 'react-native';
import {Button, Typography} from '../../Forms';
import {styles} from './styles';
import ComponentImages from '../../../../assets/images/components';

interface SuccessMessageProps {
  onButtonPress: () => void;
  title: string;
  subTitle: string;
  showReceiptButton?: boolean;
  onReceiptPress?: () => void;
  successLogo?: ImageProps;
  buttonTitle?: string;
}

export default function SuccessMessage({
  successLogo,
  onButtonPress,
  title,
  subTitle,
  showReceiptButton,
  onReceiptPress,
  buttonTitle = 'Done',
}: SuccessMessageProps) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image
          style={styles.image}
          source={
            !successLogo ? ComponentImages.onboarding.successful : successLogo
          }
        />
        <View style={styles.content}>
          <Typography type="heading" title={title} />
          <Typography type="body-r" title={subTitle} style={styles.text} />
        </View>
        {showReceiptButton && (
          <Pressable style={styles.receipt} onPress={onReceiptPress}>
            <Typography title="View Receipt" type="body-sb" />
          </Pressable>
        )}
      </View>
      <View style={styles.btnContainer}>
        <Button title={buttonTitle} onPress={onButtonPress} />
      </View>
    </View>
  );
}
