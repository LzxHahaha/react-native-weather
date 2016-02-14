import React, {
    Component,
    View,
    Text,
    ScrollView,
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from './Setting.style';

import NavBar from '../components/NavBar';
import Button from '../components/Button';

import Router from '../utils/Router';

export default class Setting extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        let Touchable = TouchableOpacity;
        let background = null;
        if (Platform.OS === 'android' && Platform.Version >= 21) {
            Touchable = TouchableNativeFeedback;
            background = TouchableNativeFeedback.Ripple('#007ACC', false);
        }

        return (
            <View style={styles.container}>
                <NavBar renderBack={true}/>

                <ScrollView style={styles.container}>
                    <View style={[styles.lineButtonView, styles.lineButtonStart]}>
                        <Touchable background={background} onPress={() => {
                            Router.gotoPage(Router.pages.LocationList, {
                                currentID: this.props.currentID,
                                updateHome: this.props.updateHome,
                                refreshHome: this.props.refreshHome
                            })
                        }}>
                            <View style={styles.lineButton}>
                                <Text style={styles.lineText}>已选地区</Text>
                                <Icon name="ios-arrow-forward" size={18}/>
                            </View>
                        </Touchable>
                    </View>
                    <View style={[styles.lineButtonView, styles.lineButtonEnd]}>
                        <Touchable background={background} onPress={()=>{Router.gotoPage(Router.pages.AddLocation)}}>
                            <View style={styles.lineButton}>
                                <Text style={styles.lineText}>添加地区</Text>
                                <Icon name="ios-arrow-forward" size={18}/>
                            </View>
                        </Touchable>
                    </View>
                    <View style={[styles.lineButtonView, styles.lineButtonStart, styles.lineButtonEnd]}>
                        <Touchable background={background} onPress={()=>{Router.gotoPage(Router.pages.About)}}>
                            <View style={styles.lineButton}>
                                <Text style={styles.lineText}>关于</Text>
                                <Icon name="ios-arrow-forward" size={18}/>
                            </View>
                        </Touchable>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
