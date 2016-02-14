import {
    StyleSheet
} from 'react-native';

import {GlobalColors, GlobalFontSize, GlobalStyles, SCREEN_WIDTH} from '../global.style';

export var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalColors.barBackground
    },

    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: GlobalColors.background_basic,
        margin: 10,
        padding: 15,
        borderColor: GlobalColors.line,
        borderBottomWidth: 2
    },

    hintView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    hintText: {
        color: GlobalColors.disable,
        textAlign: 'center',
        margin: 5,
        marginHorizontal: 15
    },

    line: {
        ...GlobalStyles.line,
        width: 60
    },

    cardInfo: {

    },

    cardHeader: {
        color: GlobalColors.font_basic,
        fontSize: GlobalFontSize.title
    },

    cardSubHeader: {
        color: GlobalColors.font_basic,
        fontSize: GlobalFontSize.body
    },

    cardButton: {

    },

    modal: {
        height: 150
    },

    modelSmall: {
        height: 100
    },

    buttonContent: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: GlobalColors.line,
        borderBottomWidth: 1
    },

    buttonText: {
        marginHorizontal: 10,
        fontSize: GlobalFontSize.subtitle
    }
});