import {
    StyleSheet
} from 'react-native';

import {GlobalColors, GlobalFontSize} from '../global.style';

export var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 32,
        backgroundColor: GlobalColors.theme,
        borderColor: GlobalColors.line,
        borderBottomWidth: 2
    },

    backButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    backText: {
        color: 'white',
        fontSize: GlobalFontSize.subtitle,
        marginLeft: 5
    },

    leftControl: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    rightControl: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    titleText: {
        flex: 8,
        textAlign: 'center',
        fontSize: GlobalFontSize.title,
        color: 'white'
    }
});