/**
 * Created by Yun on 2015-12-21.
 */
import { createAction, handleActions } from 'redux-actions';

import storage from '../../utils/storage';

// Action types;
export const INITIAL_OVER = 'app/session/initial_over';
export const ADD_CITY = 'app/session/add_city';
export const REMOVE_CITY = 'app/session/add_city';
export const GET_LIST = 'app/session/get_list';
export const GET_CITY = 'app/session/get_city';
export const SET_HOME = 'app/session/set_home';

// Initial state
const initialState = null;

// reducer
const reducer = handleActions({
    [INITIAL_OVER]: (state, action) => {
        if (!action.error) {
            return {
                ...state,
                ...action.payload
            }
        }
        return state;
    },
    [ADD_CITY]: (state, action) => {
        if (!action.error) {
            return {
                ...state,
                ...action.payload
            }
        }
        return state;
    },
    [REMOVE_CITY]: (state, action) => {
        if (!action.error) {
            return {
                ...state,
                ...action.payload
            }
        }
        return state;
    },
    [GET_LIST]: (state, action) => {
        return state;
    },
    [GET_CITY]: (state, action) => {
        return state;
    },
    [SET_HOME]: (state, action) => {
        if (!action.error) {
            return {
                ...state,
                ...action.payload
            }
        }
        return state;
    }
}, initialState);
export default reducer;

// action creators:
export const initialOverAction = createAction(INITIAL_OVER);
export const addCityAction = createAction(ADD_CITY);
export const removeCityAction = createAction(REMOVE_CITY);
export const getListAction = createAction(GET_LIST);
export const getCityAction = createAction(GET_CITY);
export const setHomeAction = createAction(SET_HOME);

// async action creators: create async function as redux-thunk.
export function init() {
    return async function(dispatch) {
        let locationList = [];
        try {
            locationList = await storage.load({
                key: 'locationList'
            });
            dispatch(initialOverAction({list: locationList.list}));
        }
        catch (err) {
            storage.save({
                key: 'locationList',
                rawData: {
                    list: []
                },
                expires: null
            });
            dispatch(initialOverAction({list: locationList.list}));
        }
        return locationList.list;
    };
}

export function addCity(info) {
    return async function(dispatch) {
        let locationList = [];
        try {
            locationList = await storage.load({
                key: 'locationList'
            });
        }
        catch (err) {
        }

        let list = locationList.list;
        for (let i = 0; i < list.length; ++i) {
            if (list[i].id === info.id) {
                let error = new Error('不能重复添加');
                dispatch(addCityAction(error));
                throw error;
            }
        }
        list.push(info);
        updateLocationList(list);

        dispatch(addCityAction({list}));

        return list;
    };
}

export function deleteCity(id) {
    return async function(dispatch, getState) {
        let list = getState().session.list;
        let newList = [];
        for (let i = 0; i < list.length; ++i) {
            if (list[i].id !== id) {
                newList.push(list[i]);
            }
        }

        if (newList.length === list.length) {
            throw new Error('City not found (id: ' + id + ').');
        }
        console.log(newList);

        updateLocationList(newList);

        dispatch(removeCityAction({list: newList}));
        return newList;
    };
}

export function getCityList() {
    return async function(dispatch, getState) {
        let session = getState().session;

        if (session && session.list) {
            dispatch(getListAction({list: session.list}));
            return session.list;
        }

        try {
            let list = getLocationList();
            dispatch(getListAction({list}));
            return list;
        }
        catch (error) {
            console.log("load list error");
            dispatch(getListAction(error));
        }
    }
}

export function getCity(id = -1) {
    return async function(dispatch, getState) {
        let session = getState().session;
        let list = session && session.list;
        if (!list && list.length < 1) {
            dispatch(getCityAction(new Error("List is empty.")));
        }

        let city = null;
        for (let i = 0 ; i < list.length; ++i) {
            if (list[i].id === id) {
                city = list[i];
                break;
            }
        }
        if (!city) {
            throw new Error('City not found (id: ' + id + ').');
        }

        return city;
    };
}

export function setHome(index) {
    return async function(dispatch, getState) {
        let session = getState().session;
        let list = session && session.list;
        if (!list) {
            dispatch(setHomeAction(new Error("List is empty.")));
        }
        if (index >= list.length) {
            dispatch(setHomeAction(new Error("id" + id + " out of range.")));
        }

        let tmp = list[0];
        list[0] = list[index];
        list[index] = tmp;

        updateLocationList(list);
        dispatch(setHomeAction({list}));
        return list;
    };
}

// ====== 辅助函数 ======

async function getLocationList() {
    let list = await storage.load({
        key: 'locationList'
    });
    return list.list;
}

function updateLocationList(list) {
    storage.save({
        key: 'locationList',
        rawData: {
            list
        },
        expires: null
    })
}
