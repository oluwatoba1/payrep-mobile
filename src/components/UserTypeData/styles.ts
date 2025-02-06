import {TextStyle, ViewStyle} from 'react-native';
import Colors from '../../theme/Colors';

interface UserCardStyle {
  userCardContainer: (selected: boolean) => ViewStyle;
  //   cardContainer: ViewStyle;
  //   iconContainer: ViewStyle;
  iconContainer: ViewStyle;
  textContainer: ViewStyle;
  title: TextStyle;
  paragraph: TextStyle;
  icon: TextStyle;
}

export const styles: UserCardStyle = {
  userCardContainer: selected => ({
    backgroundColor: selected ? Colors.primary[50] : Colors.appBackground,
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: selected ? 1 : 0,
    borderColor: selected ? Colors.primary[600] : Colors.primary[50],
    paddingVertical: 24,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }),

  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 16,
  },
  title: {
    fontSize: 16,
    
    color: Colors.gray[700],
  },
  paragraph: {
    marginTop: 8,
    fontSize: 12,
    
    color: Colors.gray[700],
  },
  icon: {
    width: 48,
    height: 48,
  },
};
