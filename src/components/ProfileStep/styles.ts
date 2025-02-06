import { StyleSheet } from "react-native";
import { moderateScale, scale, scaleHeight } from "../../utils/Helpers";
import Colors from "../../theme/Colors";

export const styles = StyleSheet.create({
    // listContainer: {
    //   paddingVertical: 16,
    // },
    stepContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: scaleHeight(12),
    },
    iconAndLineContainer: {
      alignItems: 'center',
      marginRight: scale(16),
    },
    dottedLineContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    dottedLine: {
      width: scale(37),
      borderStyle: 'dotted',
      borderWidth: scale(1),
      borderRadius: moderateScale(1),
      borderColor: Colors.success[400],
      transform: [{ rotate: '-90deg' }],
      marginTop: scaleHeight(20),
    },
    stepNumber: {
      fontSize: 18,
      color: Colors.gray[100],
    },
    
    successContainer: {
      borderWidth: scale(1),
      borderRadius: moderateScale(100),
      width: scale(32),
      height: scaleHeight(32),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#CCEEE3', 
      borderColor: '#CCEEE3',
    },
    numberContainer: {
      borderWidth: 1,
      borderRadius: 100,
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E9EBEC',
      borderColor: '#E9EBEC',
    },
    textContainer: {
      flex: 1,
      paddingBottom: 14,
      justifyContent: 'center', // Ensures title and description are vertically centered
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
    },
    description: {
      fontSize: 14,
      color: '#888888',
    },
    arrowIcon: {
      fontSize: 24,
      color: 'gray',
      marginLeft: 8,
    },
    icon: {
      width: 24,
      height: 24,
      // borderWidth: 2
    },
    rightIcon : {
      width:16, 
      height:16
  }
  });