import {
    StyleSheet
} from 'react-native';

import {GlobalStyles, GlobalColors, GlobalFontSize} from '../global.style';

export var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalColors.background_basic
    },

    scrollContent: {
        paddingBottom: 30
    },

    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: GlobalColors.barBackground
    },

    textBox: {
        ...GlobalStyles.textBox
    },

    button: {
        ...GlobalStyles.button,
        marginLeft: 5
    },

    buttonText: {
      color: GlobalColors.background_basic
    },

    row: {
        justifyContent: 'center',
        padding: 5
    },

    rowText: {
        color: GlobalColors.font_content,
        fontSize: GlobalFontSize.base,
        marginHorizontal: 15,
        marginVertical: 10
    },

    line: {
        ...GlobalStyles.line
    }
});
