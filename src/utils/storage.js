/**
 * Created by LzxHahaha on 2016/1/21.
 */
import Storage from 'react-native-storage'

const storage = new Storage({
    size: 1000,

    defaultExpires: 1000 * 3600 * 24,

    enableCache: true,

    sync : {
    }
});

export default storage;
