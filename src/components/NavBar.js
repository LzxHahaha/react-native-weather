import React, {
    Component,
    PropTypes,
    Text,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from './NavBar.style';

import Button from './Button';

import Router from '../utils/Router';

propTypes = {};

defaultProps = {};

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.leftControl}>
                    {
                        (this.props.renderLeft && this.props.renderLeft())
                        || this.props.renderBack && (
                            <Button onPress={()=>{Router.pop()}}>
                                <View style={styles.backButton}>
                                    <Icon name="ios-arrow-back" color="white" size={24} />
                                    <Text style={styles.backText}>返回</Text>
                                </View>
                            </Button>
                        )
                    }
                </View>
                <Text style={styles.titleText}>
                    {this.props.title}
                </Text>
                <View style={styles.rightControl}>
                    {this.props.renderRight && this.props.renderRight()}
                </View>
            </View>
        );
    }
}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
