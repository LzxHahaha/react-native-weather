import React, {
    Alert,
    Component,
    PropTypes,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    ProgressBarAndroid
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import {styles} from './WeatherPage.style';
import {GlobalColors} from '../global.style';

import * as api from '../utils/api';

propTypes = {};

defaultProps = {};

export default class WeatherPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null
        };
    }

    componentDidMount() {
        this.refreshWeather();
    }

    async refreshWeather() {
        const {city} = this.props;

        try {
            let info = await api.getCityWeather(city.id);
            this.setState({info});
            return info;
        }
        catch (error) {
            try {
                let info = await api.getCityWeather(city.id);
                this.setState({info});
                return info;
            }
            catch (err2) {
                Alert.alert('嗯...', '发生了一些奇怪的错误', [
                    {text: '取消'},
                    {
                        text: '重试一下', onPress: ()=> {
                        this.refreshWeather()
                    }
                    }
                ]);
            }
        }
        finally {
            this.props.onRefreshDone();
        }
    }

    render() {
        let {info} = this.state;

        let ProgressBar = Platform.OS === 'ios'
            ? null
            : (<ProgressBarAndroid styleAttr={'Inverse'} indeterminate={true} color={GlobalColors.theme} />);

        if (!info) {
            return (
                <View style={styles.loadingView}>
                    {ProgressBar}
                    <Text>正在加载...</Text>
                </View>
            );
        }

        const {index, forecast} = info;
        let today = forecast.forecast[0];
        let date = new Date().getDate();

        return (
            <View style={styles.container}>
                <View style={styles.info}>
                    <View style={styles.left}>
                        <Text style={styles.nameText}>{forecast.city.nameCN}</Text>
                        <Text style={styles.temperatureText}>
                            {
                                today.minTemperature
                                + (today.maxTemperature
                                    ? (' ~ ' + today.maxTemperature)
                                    : '')
                                + ' ℃'
                            }
                        </Text>

                        <Text style={styles.baseText}>
                            {
                                (today.weatherBegin && today.weatherBegin !== today.weatherEnd
                                    ? today.weatherBegin + '转'
                                    : '')
                                + today.weatherEnd
                            }
                        </Text>

                        <Image source={today.icon} style={styles.todayIcon}/>
                    </View>

                    <View style={styles.right}>
                        {
                            index.map((el, i) => {
                                return (
                                    <View style={styles.index} key={i}>
                                        <Text style={styles.indexHeader}>{el.name}</Text>
                                        <TouchableOpacity onPress={()=>{
                                            Alert.alert(el.name, el.level + ": " + el.description, [{text: '哦'}]);
                                        }}>
                                            <Text style={styles.indexInfo} numberOfLines={4}>
                                                {el.level + ": "}
                                                <Text style={styles.baseText}>{el.description}</Text>
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                );
                            })
                        }
                    </View>
                </View>

                <View style={styles.footer}>
                    {
                        forecast.forecast.map((el, i) => {
                            return (
                                <View style={styles.forecast} key={date}>
                                    <View style={i !== 0? styles.dayTag : styles.todayTag}>
                                        <Text style={i !== 0 ? styles.dayText : styles.todayText}>
                                            {date++}
                                        </Text>
                                    </View>
                                    <View style={styles.forecastInfo}>
                                        <Image source={el.iconSmall} style={styles.forecastIcon}/>
                                        <Text style={styles.forecastInfoText}>
                                            {
                                                (el.weatherBegin && el.weatherBegin !== el.weatherEnd
                                                    ? el.weatherBegin + '转'
                                                    : '')
                                                + el.weatherEnd
                                            }
                                        </Text>
                                        <Text style={styles.forecastInfoText}>
                                            {
                                                el.minTemperature +
                                                (el.maxTemperature ? ' ~ ' + el.maxTemperature : '')
                                                + ' ℃'
                                            }
                                        </Text>
                                        <Text style={styles.forecastInfoText}>
                                            {
                                                el.windDirectionEnd + ' ' + el.windForceEnd
                                            }
                                        </Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                </View>
            </View>
        );
    }
}

WeatherPage.propTypes = propTypes;
WeatherPage.defaultProps = defaultProps;
