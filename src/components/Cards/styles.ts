import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../utils/Helpers';
import Colors from '../../theme/Colors';

export const cardStyles = StyleSheet.create({
  copyIcon: {
    width: scale(16),
    height: scaleHeight(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    padding: scaleHeight(16),
    shadowColor: Colors.black,
    shadowOffset: { width: scale(0), height: scaleHeight(2) },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: scaleHeight(10),
    borderRadius: scaleHeight(8),
    backgroundColor: Colors.white,  
    flex: 1, 
  },
  cardContent: {
    flex: 1,
    maxHeight: scaleHeight(737),
  },
});
