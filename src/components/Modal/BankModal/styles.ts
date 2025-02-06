import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';
import {scale, scaleHeight} from '../../../utils/Helpers';
import {baseDP} from '../../../utils/Constants';
import {PNB} from '../../../theme/Fonts';

export const DropDownStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(22),
  },
  modalView: {
    width: scale(375),
    height: scale(500),
    backgroundColor: Colors.white,
    borderRadius: scale(12),
    paddingVertical: scale(28),
    paddingHorizontal: scale(16),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: scale(0),
      height: scale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: scale(4),
    elevation: scale(5),
  },
  modalText: {
    marginBottom: scale(15),
    textAlign: 'center',
    color: Colors.gray[700],
    fontSize: scale(14),
    fontWeight: '600',
  },
  item: {
    padding: scaleHeight(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    color: Colors.gray[700],
    fontSize: scale(16),
  },
  button: {
    borderRadius: scale(baseDP * 1.4),
    paddingHorizontal: scale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Colors.gray[700],
    borderWidth: scale(1),
    height: scaleHeight(50),
    width: '100%',
  },
  buttonClose: {
    // marginTop: scale(20),
    backgroundColor: 'white',
    borderRadius: scale(8),
    padding: scaleHeight(4),
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
    fontFamily: PNB,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: scaleHeight(16)
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(71, 68, 60, 0.48)',
  },
  checkbox: {
    width: scale(24),
    height: scaleHeight(24),
    
  },
  emptyContainer: {
    justifyContent:'center',
    alignItems: 'center',
    height: scaleHeight(300)
  },
  emptyIcon: {
    width: scale(64),
    height: scaleHeight(64)
  },
  bankImage: {
    width: scale(16),
    height: scaleHeight(16)
  },
  bankTitle :{ 
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(16)
  }
});
