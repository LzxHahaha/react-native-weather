import {
    Dimensions,
    StyleSheet
} from 'react-native';

export var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2b2b2b'
    },

    img: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'cover'
    }
});