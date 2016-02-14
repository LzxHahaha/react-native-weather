import React, {
    Alert,
    Component,
    View,
    Text,
    Image,
    IntentAndroid,
    LinkingIOS,
    Platform
} from 'react-native';

import {styles} from './About.style';

import NavBar from '../components/NavBar';

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        let Link = Platform.OS === 'ios' ? LinkingIOS : IntentAndroid;

        return (
            <View style={styles.container}>
                <NavBar title="关于" renderBack={true}/>

                <View style={styles.card}>
                    <Text style={styles.header}>
                        不知道叫什么的天气APP
                    </Text>
                    <Text style={styles.subHeader}>
                        {
                            '作者：LzxHahaha' + '\n' +
                                '版本：v 1.0.0'
                        }
                    </Text>

                    <Image source={require('../images/icon.png')} style={styles.icon} />

                    <Text style={styles.contentText}>
                        由于这是一个炒鸡干净的天气APP，所以没有加入广告和其他乱七八糟的功能，嗯。
                    </Text>

                    <View style={styles.line}/>

                    <Text style={styles.footerText}>
                        天气数据来源：
                        <Text style={styles.link} onPress={()=>{
                            Alert.alert('转跳', '转跳到中国天气网？', [
                                {text: '不要'},
                                {text: '看一眼', onPress: ()=>{Link.openURL('http://m.weather.com.cn');}}
                            ]);
                        }}>
                            中国天气网
                        </Text>
                    </Text>

                    <Text style={styles.footerText}>
                        启动图片来源：
                        <Text style={styles.link} onPress={()=>{
                            Alert.alert('转跳', '转跳到 Dribbble ？', [
                                {text: '不要'},
                                {
                                    text: '看一眼',
                                    onPress: () => {
                                        Link.openURL('https://dribbble.com/Marina_Matijaca');
                                    }
                                }
                            ]);
                        }}>
                            Dribbble @Marina Matijaca
                        </Text>
                    </Text>
                </View>
            </View>
        );
    }
}