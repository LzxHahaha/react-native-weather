import {StyleSheet, Platform, Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const GlobalColors = {
    theme : '#29c4f4',
    background_basic: 'f7f7f7',
    font_basic : '#555',
    font_placeholder: '#999',
    font_subtitle: '#666',
    font_content: '#333',
    line: '#dfdfdf',

    disable: '#ccc',

    buttonText: 'white',
    buttonDisable: '#7ed6f5',

    barBackground: '#f0f0f0'
};

export const GlobalFontSize = {
    header: 28,
    title: 20,
    subtitle: 18,
    base: 16,
    body: 14,
    caption: 12
};

export const GlobalStyles = {
    line : {
        height : 1,
        backgroundColor: GlobalColors.line
    },

    navBarDefault: {
        backgroundColor : GlobalColors.theme,
        flexDirection : 'row',
        alignItems :'center',
        height: Platform.OS === 'android'?55:75,
        paddingTop: Platform.OS === 'android'?0:20
    },

    button: {
        height: 30,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: GlobalColors.theme
    },

    buttonDisable: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: GlobalColors.buttonDisable
    },

    buttonText: {
        fontSize: GlobalFontSize.body,
        color: GlobalColors.buttonText
    },

    textBox: {
        flex: 1,
        marginVertical: 5,
        height: 30,
        backgroundColor: GlobalColors.background_basic
    }
};

