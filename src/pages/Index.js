import React, {
    Alert,
    Component,
    View,
    Text,
    TextInput,
    Image,
    ScrollView,
    RefreshControl,
    Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {connect} from 'react-redux';
import {getCity, getCache, saveCache} from '../redux/modules/session'

import {styles} from './Index.style';
import {GlobalColors} from '../global.style';

import WeatherPage from '../components/WeatherPage';
import NavBar from '../components/NavBar';
import Button from '../components/Button';

import Router from '../utils/Router';

class Index extends Component {
    constructor(props) {
        super(props);

        let city = this.props.city ? this.props.city : this.props.defaultCity;

        this.state = {
            isRefreshing: true,
            city: city
        };
    }

    async refreshWeather() {
        try {
            if (!this.state.isRefreshing) {
                this.setState({isRefreshing: true});
                await this.weather.refreshWeather();
            }
        }
        catch (err) {
            console.warn(err);
        }
        finally {
            if (this.state.isRefreshing) {
                this.setState({isRefreshing: false});
            }
        }
    }

    render() {
        const {city} = this.state;
        let color = Platform.OS === 'ios' ? GlobalColors.theme : [GlobalColors.theme, GlobalColors.font_basic];

        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}
                            contentContainerStyle={styles.content}
                            refreshControl={
                                <RefreshControl refreshing={this.state.isRefreshing}
                                    colors={color}
                                    tintColor={GlobalColors.theme}
                                    onRefresh={()=>this.refreshWeather()}/>
                            }
                >
                    <NavBar renderRight={()=>{return (
                        <Button onPress={() => {
                            Router.gotoPage(Router.pages.Setting, {
                                currentID: city.id,
                                updateHome: (city) => { this.setState({city}) },
                                refreshHome: () => {this.refreshWeather()}
                            })
                        }}>
                            <Icon name="ios-gear-outline" size={32} color="white" />
                        </Button>
                    )}}/>

                    <WeatherPage ref={ref=>this.weather=ref}
                                 city={city ? city : this.props.defaultCity}
                                 onRefreshDone={()=>{
                                    this.setState({isRefreshing: false})
                                 }}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default connect(state => ({
    defaultCity: state.session && state.session.list[0]
}))(Index);
