import {
    StyleSheet
} from 'react-native';

import {GlobalColors, GlobalFontSize, GlobalStyles} from '../global.style';

export var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalColors.barBackground
    },

    card: {
        justifyContent: 'space-around',
        backgroundColor: GlobalColors.background_basic,
        margin: 10,
        padding: 15,
        borderColor: GlobalColors.line,
        borderBottomWidth: 2
    },

    header: {
        fontSize: GlobalFontSize.title,
        color: GlobalColors.font_basic
    },

    subHeader: {
        fontSize: GlobalFontSize.caption,
        color: GlobalColors.font_basic,
        marginVertical: 5
    },

    icon: {
        resizeMode: 'contain',
        alignSelf: 'center',
        marginVertical: 5
    },

    contentText: {
        fontSize: GlobalFontSize.body,
        color: GlobalColors.font_basic,
        marginVertical: 10
    },

    line: {
        ...GlobalStyles.line,
        marginVertical: 10
    },

    footerText: {
        fontSize: GlobalFontSize.caption,
        color: GlobalColors.font_placeholder
    },

    link: {
        color: GlobalColors.theme
    }
});