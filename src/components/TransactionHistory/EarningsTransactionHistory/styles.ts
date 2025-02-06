import { StyleSheet } from 'react-native';
import { PNR, PNSB } from '../../../theme/Fonts';
import { moderateScale, scale, scaleHeight } from '../../../utils/Helpers';
import Colors from '../../../theme/Colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        maxHeight: scaleHeight(400),
        gap: scale(12),
    },
    headerText: {
        color: Colors.gray[600],
    },
    LR: {
        //label regular
        fontFamily: PNR,
        fontSize: scale(12),

        lineHeight: scale(18),
        letterSpacing: scale(0.12),
    },
    emptyTransactionsContainer: {
        marginTop: scale(32),
        alignItems: 'center',
    },
    emptyBox: {
        width: scale(64),
        height: scale(64),
    },
    transactionContainer: {
        height: scale(80),
        width: scale(343),
        padding: scale(12),
        borderWidth: scale(0.2),
        borderColor: Colors.gray[300],
        borderRadius: moderateScale(8),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    transactionDetailsL: {
        alignItems: 'center',
        gap: scale(16),
        flexDirection: 'row',
        marginVertical: scale(4),
    },
    transactionDetails: {
        alignItems: 'flex-start',
        gap: scale(4),
        width: scale(167),
    },
    transactionDetailsR: {
        alignItems: 'flex-end',
        gap: scale(4),
    },
    viewMore: {
        color: Colors.gray[700],
    },
    statusBackground: {
        width: scale(48),
        height: scale(48),
        padding: scale(12),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(32),
        backgroundColor: 'rgba(233, 235, 236, 1)',

    },
    icon: {
        width: scale(24),
        height: scale(24),
        flexShrink: 0,
    },
    txText: {
        color: Colors.gray[400],
    },
    transactionDate: {
        color: Colors.gray['base'],
        fontFamily: PNR,
        fontSize: scale(10),

        lineHeight: scale(15),
        letterSpacing: scale(0.1),
    },
    amount: {
        color: Colors.gray[700],
    },
    failedStatus: {
        color: Colors.danger['base'],
        textTransform: 'capitalize',
    },
    successStatus: {
        color: Colors.success['base'],
        textTransform: 'capitalize',
    },
    pendingStatus: {
        color: Colors.primary['base'],
        textTransform: 'capitalize',
    },
});

export default styles;
