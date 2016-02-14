import React, {Component, PropTypes, View, Text, TouchableOpacity, Image} from 'react-native';

import {styles} from './Button.style.js';
import {GlobalStyles} from '../global.style';

const propTypes = {
    text : PropTypes.string,
    textStyle: Text.propTypes.style,
    iconStyle: Image.propTypes.style,
    enable: PropTypes.bool
};

const defaultProps = {
    enable: true
};

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const {
            text,
            textStyle,
            icon,
            iconStyle,
            style,
            enable,
            ...others,
            } = this.props;

        let opacity = enable ? 0.5 : 1;

        return (
            <TouchableOpacity style={[styles.button, style]} activeOpacity={opacity}
                              onPress={() => {
                                enable && this.props.onPress && this.props.onPress();
                              }}
                {...others}
            >
                {
                    icon &&
                    <Image style={iconStyle} source={icon} />
                }
                {
                    this.props.text &&
                    <Text style={[GlobalStyles.buttonText, textStyle]}>{text}</Text>
                }
                {this.props.children}
            </TouchableOpacity>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
