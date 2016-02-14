/**
 * Created by LzxHahaha on 2016/1/23.
 */

let _weather = [
    '晴',
    '多云',
    '阴',
    '阵雨',
    '雷阵雨',
    '雷阵雨伴有冰雹',
    '雨夹雪',
    '小雨',
    '中雨',
    '大雨',
    '暴雨',
    '大暴雨',
    '特大暴雨',
    '阵雪',
    '小雪',
    '中雪',
    '大雪',
    '暴雪',
    '雾',
    '冻雨',
    '沙尘暴',
    '小到中雨',
    '中到大雨',
    '大到暴雨',
    '暴雨到大暴雨',
    '大暴雨到特大暴雨',
    '小到中雪',
    '中到大雪',
    '大到暴雪',
    '浮尘',
    '扬沙',
    '强沙尘暴'
];
_weather[53] = '霾';
_weather[99] = '无';

let _weatherIcon = [
    require('../images/weather_01.png'),
    require('../images/weather_02.png'),
    require('../images/weather_03.png'),
    require('../images/weather_04.png'),
    require('../images/weather_05.png'),
    require('../images/weather_06.png'),
    require('../images/weather_07.png'),
    require('../images/weather_08.png'),
    require('../images/weather_09.png'),
    require('../images/weather_10.png'),
    require('../images/weather_11.png'),
    require('../images/weather_12.png'),
    require('../images/weather_13.png'),
    require('../images/weather_14.png'),
    require('../images/weather_15.png'),
    require('../images/weather_16.png'),
    require('../images/weather_17.png'),
    require('../images/weather_18.png'),
    require('../images/weather_19.png'),
    require('../images/weather_20.png'),
    require('../images/weather_21.png'),
    require('../images/weather_22.png'),
    require('../images/weather_23.png'),
    require('../images/weather_24.png'),
    require('../images/weather_25.png'),
    require('../images/weather_26.png'),
    require('../images/weather_27.png'),
    require('../images/weather_28.png'),
    require('../images/weather_29.png'),
    require('../images/weather_31.png'),
    require('../images/weather_32.png')
];
_weatherIcon[53] = require('../images/weather_54.png');
_weatherIcon[99] = require('../images/weather_100.png');

let _weatherIconSmall = [
    require('../images/weather_small_01.png'),
    require('../images/weather_small_02.png'),
    require('../images/weather_small_03.png'),
    require('../images/weather_small_04.png'),
    require('../images/weather_small_05.png'),
    require('../images/weather_small_06.png'),
    require('../images/weather_small_07.png'),
    require('../images/weather_small_08.png'),
    require('../images/weather_small_09.png'),
    require('../images/weather_small_10.png'),
    require('../images/weather_small_11.png'),
    require('../images/weather_small_12.png'),
    require('../images/weather_small_13.png'),
    require('../images/weather_small_14.png'),
    require('../images/weather_small_15.png'),
    require('../images/weather_small_16.png'),
    require('../images/weather_small_17.png'),
    require('../images/weather_small_18.png'),
    require('../images/weather_small_19.png'),
    require('../images/weather_small_20.png'),
    require('../images/weather_small_21.png'),
    require('../images/weather_small_22.png'),
    require('../images/weather_small_23.png'),
    require('../images/weather_small_24.png'),
    require('../images/weather_small_25.png'),
    require('../images/weather_small_26.png'),
    require('../images/weather_small_27.png'),
    require('../images/weather_small_28.png'),
    require('../images/weather_small_29.png'),
    require('../images/weather_small_31.png'),
    require('../images/weather_small_32.png')
];
_weatherIconSmall[53] = require('../images/weather_small_54.png');
_weatherIconSmall[99] = require('../images/weather_small_100.png');

export const weather = _weather;
export const weatherIcon = _weatherIcon;
export const weatherIconSmall = _weatherIconSmall;
