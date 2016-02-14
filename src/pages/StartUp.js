import React, {
    Animated,
    Component,
    View,
    Image
} from 'react-native';

import storage from 'react-native-storage';

import {connect} from 'react-redux';
import {init} from '../redux/modules/session'

import {styles} from './StartUp.style';

import Router from '../utils/Router';

class StartUp extends Component {
    constructor(props) {
        super(props);

        this.nextPage = Router.pages.AddLocation;
        this.props.init().then(res => {
            if (res.length > 0) {
                this.nextPage = Router.pages.Index;
            }
            else {
                this.nextPage = Router.pages.AddLocation;
            }
        })
        .catch(err => {
            console.error(err);
        });

        this.state = {
            opacity: new Animated.Value(0)
        };
    }

    componentWillMount() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 2300
        }).start();

        setTimeout(() => {
            this.props.navigator.replace(this.nextPage);
        }, 2500);
        //}, 0);
    }


    render() {
        let img = null;
        const nowHour = new Date().getHours();
        if (8 <= nowHour && nowHour <= 16) {
            img = require('../images/Sun.png');
        }
        else if (nowHour < 6 || nowHour > 18) {
            img = require('../images/Moon.png');
        }
        else {
            img = require('../images/Blood.png');
        }

        return (
            <View style={styles.container}>
                <Animated.Image source={img} style={[styles.img, {opacity: this.state.opacity}]} />
            </View>
        );
    }
}

export default connect(state => ({
}), dispatch => ({
    init: () => dispatch(init())
}))(StartUp);
