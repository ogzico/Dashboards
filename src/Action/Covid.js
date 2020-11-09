import axios from "axios";

import {
    COVID_SUCCESS,
    COVID_FAIL,
    COVID_LOADING,
    COVID_TOTAL_LOADING,
    COVID_TOTAL_SUCCESS,
    COVID_TOTAL_FAIL,
    COVID_HISTORICAL_LOADING,
    COVID_HISTORICAL_SUCCESS,
    COVID_HISTORICAL_FAIL
}
    from "./Types";

export const getCovidData = () => dispatch => {

    dispatch({ type: COVID_LOADING });
    //Headers
    const config = {
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_CONFIG_APIKEY,
            'x-rapidapi-host': 'covid19-data.p.rapidapi.com'
        }
    };

    axios
        .get("https://covid19-data.p.rapidapi.com/all", config)
        .then(res => {
            dispatch({
                type: COVID_SUCCESS,
                payload: res
            });
        })
        .catch(err => {
            dispatch({
                type: COVID_FAIL,
                payload: err
            });
        });
}

export const getCovidTotal = () => dispatch => {

    dispatch({ type: COVID_TOTAL_LOADING });
    //Headers
    const config = {
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_CONFIG_APIKEY,
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
    };

    axios
        .get("https://covid-19-data.p.rapidapi.com/totals", config)
        .then(res => {
            dispatch({
                type: COVID_TOTAL_SUCCESS,
                payload: res
            });
        })
        .catch(err => {
            dispatch({
                type: COVID_TOTAL_FAIL,
                payload: err
            });
        });
}

export const getCovidHistorical = () => dispatch => {

    dispatch({ type: COVID_HISTORICAL_LOADING });
    //Headers
    const config = {
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_CONFIG_APIKEY,
            'x-rapidapi-host': 'covid-19-v1.p.rapidapi.com'
        }
    };

    axios
        .get("https://covid-19-v1.p.rapidapi.com/v1/allhistorical", config)
        .then(res => {
            dispatch({
                type: COVID_HISTORICAL_SUCCESS,
                payload: res
            });
        })
        .catch(err => {
            dispatch({
                type: COVID_HISTORICAL_FAIL,
                payload: err
            });
        });
}