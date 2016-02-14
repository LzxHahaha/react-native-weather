import React, {
    Alert,
    Component,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ModalBox from 'react-native-modalbox';

import {connect} from 'react-redux';
import {deleteCity, getCityList, setHome} from '../redux/modules/session';

import {styles} from './LocationList.style';
import {GlobalColors} from '../global.style';

import NavBar from '../components/NavBar';
import Button from '../components/Button';

import Router from '../utils/Router';

class LocationList extends Component {
    constructor(props) {
        super(props);

        this.props.getCityList()
            .then(res=> {
                console.log(res);
                this.setState({list: res});
            })
            .catch(err => {
                console.warn("constructor error: " + err);
            });

        this.state = {
            list: this.props.list
        };
    }

    componentWillUnmount() {
        if (this.needRefresh) {
            this.props.refreshHome();
        }
    }

    deleteCity(id) {
        this.props.deleteCity(id)
            .then(res => {
                this.setState({list: res});
                if (id === this.props.currentID) {
                    this.props.updateHome(res[0]);
                    this.needRefresh = true;
                }
            })
            .catch(err => {
                console.log(this.props.state);
                console.warn('Location List: ' + err);
            });
    }

    async setHome(index) {
        if (index === 0) {
            return;
        }

        try {
            let list = await this.props.setHome(index);
            this.setState({list});
            this.props.updateHome(list[0]);
            this.needRefresh = true;
        }
        catch (error) {
            console.warn(error);
        }

    }

    showModalBox(name, id, index) {
        this.setState({name, id, index});
        this.modal.open();
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
                    <View style={styles.hintView}>
                        <View style={styles.line}/>
                        <Text style={styles.hintText}>
                            长按查看更多选项
                        </Text>
                        <View style={styles.line}/>
                    </View>


                    {
                        this.state.list && this.state.list.map((el, index) => {
                            return (
                                <Touchable key={el.id} activeOpacity={0.5}
                                           background={background}
                                           onLongPress={() => {
                                                this.showModalBox(el.name, el.id, index);
                                           }}
                                           onPress={() => {
                                                index !== 0
                                                    ? Router.gotoPage(Router.pages.Index, {city: {id: el.id}})
                                                    : Router.popToRoot();
                                           }}
                                >
                                    <View style={styles.card}>
                                        <View style={styles.cardInfo}>
                                            <Text style={styles.cardHeader}>
                                                {el.name + "  "}
                                                {
                                                    index === 0
                                                    ? (
                                                        <Icon name={"ios-home"} size={20} color={GlobalColors.theme}/>
                                                    )
                                                    : null
                                                }
                                            </Text>
                                            <Text style={styles.cardSubHeader}>
                                                {
                                                    (el.name === el.city ? '' : el.city + '市, ' ) + el.prov
                                                }
                                            </Text>
                                        </View>
                                        <View style={styles.cardButton}>
                                            <Icon name="ios-arrow-right" size={32}/>
                                        </View>
                                    </View>
                                </Touchable>
                            );
                        })
                    }
                </ScrollView>

                <ModalBox style={this.state.index ? styles.modal : styles.modelSmall}
                          ref={ref=>this.modal=ref} position="center" animationDuration={250}>
                    <Button style={styles.buttonContent}
                            onPress={()=>{
                                Alert.alert('确认删除', '将' + this.state.name + '从列表中删除？', [
                                    {text: '取消', onPress: ()=>{this.modal.close()}},
                                    {text: '删除', onPress: ()=>{
                                        this.deleteCity(this.state.id);
                                        this.modal.close();
                                    }}
                                ]);
                            }}
                    >
                        <Icon name="ios-trash-outline" size={20} color={GlobalColors.font_basic}/>
                        <Text style={styles.buttonText}>删除{this.state.name}</Text>
                    </Button>

                    {
                        this.state.index
                            ? (
                                <Button style={styles.buttonContent} onPress={() => {
                                    this.setHome(this.state.index);
                                    this.modal.close();
                                }}>
                                    <Icon name={"ios-home-outline"} size={20} color={GlobalColors.font_basic}/>
                                    <Text style={styles.buttonText}>设为主页</Text>
                                </Button>
                            )
                            : null
                    }

                    <Button onPress={()=>{this.modal.close()}} style={styles.buttonContent}>
                        <Text style={styles.buttonText}>取消</Text>
                    </Button>
                </ModalBox>
            </View>
        );
    }
}

export default connect(state => ({
    list: state.session.list
}), dispatch => ({
    deleteCity: (id) => dispatch(deleteCity(id)),
    getCityList: (id) => dispatch(getCityList()),
    setHome: (index) => dispatch(setHome(index))
}))(LocationList);
