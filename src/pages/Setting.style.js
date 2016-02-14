import {
    StyleSheet
} from 'react-native';

import {GlobalColors, GlobalFontSize} from '../global.style';

export var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalColors.barBackground
    },

    lineButtonStart: {
        marginTop: 10
    },

    lineButtonView: {
        borderColor: GlobalColors.line,
        borderBottomWidth: 1
    },

    lineButtonEnd: {
        borderBottomWidth: 2
    },

    lineButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 48,
        paddingHorizontal: 16,
        backgroundColor: 'white'
    },

    lineText: {
        fontSize: GlobalFontSize.base,
        color: GlobalColors.font_basic
    }
});
