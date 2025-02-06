import {TextStyle, ViewStyle} from 'react-native';
import Colors from '../../../theme/Colors';
import {scale, scaleHeight} from '../../../utils/Helpers';
import {baseDP} from '../../../utils/Constants';
import {PNB, PNR} from '../../../theme/Fonts';

interface DropdownStyle {
  modalView: ViewStyle;
  // modalContainer: ViewStyle;
  buttonClose: ViewStyle;
  centeredView: ViewStyle;
  button: TextStyle;
  textStyle: TextStyle;
  modalText: TextStyle;
  item: ViewStyle;
  searchContainer: ViewStyle;
  modalHeader: ViewStyle;
  itemText: TextStyle;
  dropdownText: TextStyle;
  searchInput: TextStyle;
  searchIcon: ViewStyle;
  overlay: ViewStyle;
}

export const DropDownStyles: DropdownStyle = {
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1, borderColor: 'red'
    // marginVertical: scaleHeight(16),
  },
  modalView: {
    width: scaleHeight(375),
    height: scale(500),
    backgroundColor: Colors.white,
    borderRadius: scale(12),
    paddingVertical: scaleHeight(28),
    paddingHorizontal: scale(16),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: scale(0),
      height: scaleHeight(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: scale(4),
    elevation: scale(5),
  },
  modalText: {
    marginBottom: scaleHeight(15),
    textAlign: 'center',
    color: Colors.gray[700],
    fontSize: scale(14),
    
  },
  item: {
    padding: scaleHeight(10),
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[300],
  },
  itemText: {
    color: Colors.gray[700],
    fontSize: scale(16),
  },
  button: {
    borderRadius: scale(8),
    // paddingVertical: scaleHeight(12),
    paddingHorizontal: scale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Colors.gray[400],
    borderWidth: scale(1),
    height: scaleHeight(50),
    width: '100%',
  },
  buttonClose: {
    // marginTop: scale(20),
    backgroundColor: 'white',
    borderRadius: scale(8),
    padding: scale(4),
    borderColor: Colors.gray[100],
    borderWidth: scale(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: Colors.gray[700],
    fontFamily: PNB,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dropdownText: {
    color: Colors.gray[700],
    fontFamily: PNR,
    fontSize: 14,
    lineHeight: scaleHeight(21),
    margin: 0, height: '100%'
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: scaleHeight(15),
    borderWidth: 1,
    borderColor: Colors.gray[50],
    borderRadius: scale(5),
    paddingHorizontal: scale(8),
    alignItems: 'center',
    backgroundColor: Colors.gray[50],
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: scale(14),
    padding: scale(8),
    color: Colors.gray['base'],
    fontFamily: PNB,
  },
  searchIcon: {
    width: scaleHeight(16),
    height: scale(16),
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(71, 68, 60, 0.48)',
  },
};
