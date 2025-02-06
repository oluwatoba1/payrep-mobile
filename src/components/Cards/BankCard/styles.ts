import { StyleSheet } from "react-native";
import { moderateScale, scale, scaleHeight } from "../../../utils/Helpers";
import Colors from "../../../theme/Colors";

export const styles =  StyleSheet.create({
    cardContainer: {
        // width: 343,
        height: scaleHeight(204),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: scaleHeight(20),
      },
      cardImage: {
        width: '100%',
        height: '100%',
        borderRadius: moderateScale(10),
      },
      cardDetails: {
        position: 'absolute',
        top: scaleHeight(20),
        left: scale(20),
        right: scale(20),
        bottom: scaleHeight(20),
        justifyContent: 'space-between',
      },
      cardTitle: {
        color: Colors.white,
        fontWeight: 'bold',
      },
      cardNumber: {
        color: Colors.white,
      },
      cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      cardName: {
        color: Colors.white,
      },
      cardLogo: {
        width: scale(81),
        height: scaleHeight(32),
      },
      overLay: {
        position: 'absolute',
        top: scaleHeight(0),
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: 10,
        zIndex: 1,
        opacity: 0.9,
      },
      detailRow: {
        flexDirection: 'row',
        gap: scaleHeight(4),
        marginVertical: scaleHeight(4),
      },
      cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: scaleHeight(10),
      },
      cardBody: {
        marginBottom: scaleHeight(10),
      },
      modalOverlay: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
      },
      modal: {
        position: 'absolute',
        top: '23%',
        left: '65%',
        gap: scaleHeight(8),
        backgroundColor: Colors.success[900],
        borderRadius: moderateScale(8),
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        maxHeight: scaleHeight(130),
        width: scale(130)
      },
})