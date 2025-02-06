import { StyleSheet } from "react-native";
import { width, MAIN_LAYOUT_HORIZONTAL_PADDING, height } from "../../../../../utils/Constants";
import { scale, scaleHeight } from "../../../../../utils/Helpers";
import Colors from "../../../../../theme/Colors";

const styles = StyleSheet.create({
    container: {
        width: width - (2 * MAIN_LAYOUT_HORIZONTAL_PADDING),
        maxHeight: height - (2 * MAIN_LAYOUT_HORIZONTAL_PADDING)
    },
    recentsContainer: {
        gap: scaleHeight(16), 
    },
    recentsEmpty: {
        alignSelf: 'center',
        width: scale(252),
        alignItems: 'center'
    },
    recents:{
        // flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        // alignContent: 'center',
        justifyContent: 'space-between',
        borderWidth: 1
    },
    recent: {
        gap: 4,
        // justifyContent: 'center'
        alignItems: 'center'
    },
    recentProfile:{
        width: scale(48),
        height: scale(48),
        backgroundColor: Colors.gray[100],
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyBox:{
        height: scale(64), width: scale(64)
    },
    categoriesContainer: {
        gap: 12, 
    },
    categories: {
        gap: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    category:{
        width: scale(163.5),
        height: scaleHeight(100),
        borderRadius: scale(8),
        shadowColor: '#32323214',
        // shadowRadius: 
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowOpacity: 8,
        shadowRadius: 4,
        justifyContent: 'center',

    },
    categoryArrow:{
        height: scale(24),
        width: scale(24),
        top: scaleHeight(8),
        alignSelf: 'flex-end',
        right: scale(8),
        position: 'absolute'
    },
    categoryIcon:{
        // width: scale(107.71),
        // height: scaleHeight(20),
        alignSelf: 'center',
    },
    
})

export default styles;