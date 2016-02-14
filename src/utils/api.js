import crypto from 'crypto/sha1';

import * as wind from '../config/windIDs';
import {weather, weatherIcon, weatherIconSmall} from '../config/weatherIDs';

const appid = '66cf1391c22a0314';
const keyAppid = appid.substring(0, 6);
const privateKey = '114918_SmartWeatherAPI_5386a2a';

export const queryType = {
    index: 'index_v',
    forecast: 'forecast_v'
};

export async function getIndex(areaID, datetime: Date = new Date()) {
    let url = getURL(areaID, queryType.index, datetime);

    try {
        let response = await fetch(url);
        let json = await response.text();
        let shitObj = JSON.parse(json);
        let index = [];
        for (let i = 0; i < shitObj.i.length; ++i) {
            let shit = shitObj.i[i];
            index.push({
                name: shit.i2,
                level: shit.i4,
                description: shit.i5
            });
        }
        return index;
    }
    catch (error) {
        throw error;
    }
}

export async function getForecast(areaID, datetime: Date = new Date()) {
    let url = getURL(areaID, queryType.forecast, datetime);

    try {
        let response = await fetch(url);
        let json = await response.text();
        let shitObj = JSON.parse(json);
        let info = {
            city: {
                nameEN: shitObj.c.c2,
                nameCN: shitObj.c.c3,
                phoneAreaCode: shitObj.c.c11,
                zipCode: shitObj.c.c12,
                longitude: shitObj.c.c13,
                latitude: shitObj.c.c14,
                timeZone: shitObj.c.c17
            },
            forecast: []
        };

        for (let i = 0; i < shitObj.f.f1.length; ++i) {
            let shit = shitObj.f.f1[i];
            let sun = shit.fi.split('|');
            info.forecast.push({
                weatherBegin: shit.fa ? weather[0 | shit.fa] : null,
                weatherEnd: weather[0 | shit.fb],
                icon: weatherIcon[0 | shit.fb] ? weatherIcon[0|shit.fb] : weatherIcon[99],
                iconSmall: weatherIconSmall[0 | shit.fb] ? weatherIconSmall[0|shit.fb] : weatherIconSmall[99],
                maxTemperature: shit.fc ? (0 | shit.fc) : null,
                minTemperature: 0 | shit.fd,
                windDirectionBegin: shit.fe ? wind.windDirection[0 | shit.fe] : null,
                windDirectionEnd: wind.windDirection[0 | shit.ff],
                windForceBegin: shit.fg ? wind.windForce[0 | shit.fg] : null,
                windForceEnd: wind.windForce[0 | shit.fh],
                sunriseTime: sun[0],
                sunsetTime: sun[1]
            });
        }

        return info;
    }
    catch (error) {
        throw error;
    }
}

export async function getCityWeather(areaID, datetime: Date = new Date()) {
    try {
        let index = await getIndex(areaID, datetime);
        let forecast = await getForecast(areaID, datetime);
        return {
            id: areaID,
            updateTime: new Date().getTime(),
            index,
            forecast
        };
    }
    catch (error) {
        throw error;
    }
}

function formatNumber(number) {
    return number < 10 ? ('0' + number) : '' + number;
}

function formatDatetime(datetime) {
    let year = datetime.getFullYear();
    let month = formatNumber(datetime.getMonth() + 1);
    let day = formatNumber(datetime.getDate());
    let hour = formatNumber(datetime.getHours());
    let minute = formatNumber(datetime.getMinutes());

    return '' + year + month + day + hour + minute;
}

function getURL(areaID, type, datetime: Date = new Date()) {
    let dateFormat = formatDatetime(datetime);
    let publicKey = 'http://open.weather.com.cn/data/?areaid=' + areaID + '&type=' + type +
        '&date=' + dateFormat + '&appid=' + appid;
    let hash = crypto.b64_hmac_sha1(privateKey, publicKey);

    let key = encodeURIComponent(hash + '=');

    return 'http://open.weather.com.cn/data/?areaid=' + areaID + '&type=' + type +
        '&date=' + dateFormat + '&appid=' + keyAppid + '&key=' + key;
}