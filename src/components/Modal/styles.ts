import { StyleSheet } from "react-native";
import { scale, scaleHeight } from "../../utils/Helpers";
import Colors from "../../theme/Colors";
import { PNB } from "../../theme/Fonts";

export const modalMainStyles = StyleSheet.create({
    
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(71, 68, 60, 0.48)',
    },
    modalContent: {
      backgroundColor: Colors.white,
      padding: scaleHeight(16),
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      borderTopLeftRadius: scaleHeight(20),
      borderTopRightRadius: scaleHeight(20),
      minHeight: '30%',
      maxHeight: '100%',
    },
    container: {
      paddingVertical: scaleHeight(16),
      flex: 1,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: scaleHeight(16),
  },
  item: {
      paddingVertical: scaleHeight(16),
      paddingHorizontal: scale(8),
      borderBottomWidth: scaleHeight(0.3),
      borderColor: Colors.gray[300],
      backgroundColor: Colors.gray[50],
      // borderRadius: scaleHeight(8),
      marginBottom: scaleHeight(8),
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    listContainer: {
      flex: 1,
      maxHeight: scaleHeight(300), 
      
  },
  onClose: {
      borderWidth: scaleHeight(1),
      borderColor: Colors.gray[300],
      borderRadius: scaleHeight(16),
      paddingVertical: scaleHeight(4),
      paddingHorizontal: scale(8)
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Colors.gray[50],
    borderRadius: scale(5),
    paddingHorizontal: scale(8),
    alignItems: 'center',
    backgroundColor: Colors.gray[50],
  },
  searchInput: {
    flex: 1,
    marginLeft: scale(10),
    fontSize: scale(14),
    padding: scaleHeight(8),
    color: Colors.gray.base,
    fontFamily: PNB,
    backgroundColor: Colors.transparent,
    
  },
  searchIcon: {
    width: scale(16),
    height: scaleHeight(16),
  },
  icon: {
    width: scale(64),
    height: scaleHeight(64)
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: scale(1),
    borderBottomColor: Colors.gray[50],
    paddingVertical: scaleHeight(16),
    paddingHorizontal: scale(8),
    marginVertical: scale(4),
    backgroundColor: Colors.white,
    borderRadius: scaleHeight(8),
    elevation: 1, 
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 8, 
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scaleHeight(16),
    paddingHorizontal: scale(8),
    backgroundColor: Colors.white,
    borderRadius: scaleHeight(8),
    justifyContent: 'space-between'
  },
  iconContainer: {
    borderWidth: 1,
    backgroundColor: Colors.primary[50],
    width: scale(44),
    height: scaleHeight(44),
    borderRadius: scaleHeight(22),
    justifyContent: 'center',
    alignItems: 'center',
    margin: scaleHeight(8),
  },
  iconText: {
    textTransform: 'uppercase',
  },
  textContainer: {
    marginLeft: scale(16),
    marginVertical: scaleHeight(4),
  },
  });
  