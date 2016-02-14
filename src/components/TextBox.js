import React, {
    Component,
    PropTypes,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import {styles} from './TextBox.style';

import Button from './Button';

const propTypes = {
    editable: PropTypes.bool,
    onChangeText: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};

const defaultProps = {
    editable: true
};

export default class TextBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
            focus: this.props.autoFocus ? true : false
        };
    }

    render() {
        const {editable, style, icon, buttonIcon, buttonPress, ...others} = this.props;
        const {focus} = this.state;
        let value = editable ? this.state.value : this.props.value;

        return (
            <View style={[styles.inputBox, style]}
            >
                {
                    icon &&
                    <Image source={icon} style={styles.icon} />
                }
                <TextInput {...others}
                    underlineColorAndroid="transparent"
                    value={value}
                    style={styles.textInput}
                    focus={focus}
                    editable
                />
                {
                    buttonIcon &&
                    <Button icon={buttonIcon} style={styles.button} onPress={() => {buttonPress && buttonPress()}} />
                }
            </View>
        );
    }
}

TextBox.propTypes = propTypes;
TextBox.defaultProps = defaultProps;
