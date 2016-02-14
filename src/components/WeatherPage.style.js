import {
    StyleSheet
} from 'react-native';

import {GlobalColors, GlobalFontSize, SCREEN_HEIGHT} from '../global.style';

export var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: GlobalColors.background_basic,
        paddingTop: 16
    },

    loadingView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    info: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 32
    },

    left: {
        flex: 1
    },

    nameText: {
        fontSize: GlobalFontSize.header,
        color: GlobalColors.font_basic
    },

    temperatureText: {
        fontSize: GlobalFontSize.subtitle,
        color: GlobalColors.font_basic
    },

    right: {
        flex: 1,
        justifyContent: 'space-between'
    },

    index: {
        flex: 1,
        marginVertical: 5
    },

    indexHeader: {
        fontSize: GlobalFontSize.subtitle,
        color: GlobalColors.font_basic,
        marginBottom: 5
    },

    indexInfo: {
        fontSize: GlobalFontSize.caption,
        color: GlobalColors.theme
    },

    baseText: {
        fontSize: GlobalFontSize.caption,
        color: GlobalColors.font_basic
    },

    todayInfo: {
        alignItems: 'center'
    },

    todayIcon: {
        resizeMode: 'cover',
        width: 124,
        height: 124
    },

    footer: {
    },

    forecast: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 64,
        marginTop: -1,
        borderColor: GlobalColors.line,
        borderTopWidth: 1,
        borderBottomWidth: 1
    },

    todayTag: {
        width: 64,
        height: 64,
        borderColor: GlobalColors.line,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        backgroundColor: GlobalColors.theme,
        alignItems: 'center',
        justifyContent: 'center'
    },

    dayTag: {
        width: 64,
        height: 64,
        borderColor: GlobalColors.line,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        backgroundColor: GlobalColors.background_basic,
        alignItems: 'center',
        justifyContent: 'center'
    },

    forecastIcon: {
        flex: 1,
        width: 48,
        height: 48,
        resizeMode: 'contain'
    },

    todayText: {
        fontSize: GlobalFontSize.title,
        color: GlobalColors.background_basic
    },

    dayText: {
        fontSize: GlobalFontSize.title,
        color: GlobalColors.font_basic
    },

    forecastInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 64,
        borderColor: GlobalColors.line,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: GlobalColors.background_basic
    },

    forecastInfoText: {
        flex: 1,
        fontSize: GlobalFontSize.body,
        color: GlobalColors.font_basic
    }
});