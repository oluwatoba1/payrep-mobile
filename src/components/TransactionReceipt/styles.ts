import { StyleSheet } from "react-native";
import { moderateScale, scale, scaleHeight } from "../../utils/Helpers";
import { BOTTOM_TAB_CONTAINER_HEIGHT, height, MAIN_LAYOUT_HORIZONTAL_PADDING, width } from "../../utils/Constants";
import Colors from "../../theme/Colors";


const styles = StyleSheet.create({ 
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: scale(300),
        padding: scale(20),
        borderRadius: moderateScale(10),
        backgroundColor: Colors.white,
        alignItems: 'center',
    },
    modalButton: {
        marginTop: scaleHeight(20),
        width: scale(100),
    },
    container: {
        width: width - (2 * MAIN_LAYOUT_HORIZONTAL_PADDING),
        height: height - (2 * MAIN_LAYOUT_HORIZONTAL_PADDING),
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundLogo: {
        width: scale(208),
        height: scaleHeight(208),
        opacity: 0.05,
    },
    backgroundLogoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',  
        top: '50%',            
        left: '50%',           
        transform: [{ translateX: -scale(104) }, { translateY: -scaleHeight(104) }], 
        
    },

    receiptContainer: {
        paddingTop: scaleHeight(24),
        paddingBottom: scaleHeight(40),
        alignItems: 'center',
        gap: scaleHeight(24),
        borderTopLeftRadius: moderateScale(16),
        borderTopRightRadius: moderateScale(16),
        backgroundColor: Colors.white,
        shadowColor: 'rgba(86, 86, 86, 0.12)',
        // shadowOffset: '0px 3px 7px 0px',
        height: '100%'
    },
    receiptHeader: {
        alignItems: 'center',
        gap: scaleHeight(4)
    },
    topDetailsContainer: {
        alignItems: 'center',
        gap: scaleHeight(24),
    },
    checkmarkIcon: {
        height: scaleHeight(24),
        width: scale(28.16)
    },
    bottomDetailsContainer: {
        alignItems: 'center',
        gap: scaleHeight(8),
        width: scale(311),
        justifyContent: 'center'
    },
    details: {
        paddingVertical: scale(16),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 0.3,
        borderBottomColor: Colors.gray[200]
    },
    detailsContainer: {
        paddingHorizontal: scale(16),
        gap: scaleHeight(24),

    },
    buttons: {
        gap: scaleHeight(16),
        left: 0,
        right: 0,
        position: 'absolute',
        bottom: scaleHeight(BOTTOM_TAB_CONTAINER_HEIGHT*1.3),
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: width/2.5,
    },
    amountContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
    
});

export default styles;
