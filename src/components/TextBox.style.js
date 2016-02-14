import {
    StyleSheet
} from 'react-native';

import {GlobalColors, GlobalStyle} from '../global.style'

export var styles = StyleSheet.create({
    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: GlobalColors.disable,
        backgroundColor: GlobalColors.background_basic,
        paddingHorizontal: 2,
        height: 30
    },

    icon: {
        width: 18,
        height: 18,
        resizeMode: 'contain'
    },

    textInput: {
        flex: 1,
        paddingVertical: 1,
        paddingHorizontal: 2,
        marginHorizontal: 2,
        height: 28
    },

    button: {
        marginHorizontal: 10
    }
});
