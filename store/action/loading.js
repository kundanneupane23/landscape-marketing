import * as types from '../actionTypes';

export const setLoading = data => {
    return {
        type: types.SET_LOADING,
        payload: data,
    };
};