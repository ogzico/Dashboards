import {
    COVID_LOADING,
    COVID_SUCCESS,
    COVID_FAIL,
    COVID_TOTAL_LOADING,
    COVID_TOTAL_SUCCESS,
    COVID_TOTAL_FAIL,
    COVID_HISTORICAL_LOADING,
    COVID_HISTORICAL_SUCCESS,
    COVID_HISTORICAL_FAIL
} from '../Action/Types'
const initialState = {
    isLoading_Covid: false,
    success_Covid: null,
    fail_Covid: null,
    isLoading_Covid_Total: false,
    success_Covid_Total: null,
    fail_Covid_Total: null,
    isLoading_Covid_Historical: false,
    success_Covid_Historical: null,
    fail_Covid_Historical: null
}
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case COVID_LOADING:
            return {
                ...state,
                isLoading_Covid: true,
                success_Covid: null,
                fail_Covid: null
            }
        case COVID_SUCCESS:
            return {
                ...state,
                isLoading_Covid: false,
                success_Covid: payload.data,
                fail_Covid: null
            }
        case COVID_FAIL:
            return {
                ...state,
                isLoading_Covid: false,
                fail_Covid: payload.response.status,
                success_Covid: null
            }
        case COVID_TOTAL_LOADING:
            return {
                ...state,
                isLoading_Covid_Total: true,
                success_Covid_Total: null,
                fail_Covid_Total: null
            }
        case COVID_TOTAL_SUCCESS:
            return {
                ...state,
                isLoading_Covid_Total: false,
                success_Covid_Total: payload.data,
                fail_Covid_Total: null
            }
        case COVID_TOTAL_FAIL:
            return {
                ...state,
                isLoading_Covid_Total: false,
                fail_Covid_Total: payload.response.status,
                success_Covid_Total: null
            }
        case COVID_HISTORICAL_LOADING:
            return {
                ...state,
                isLoading_Covid_Historical: true,
                success_Covid_Total: null,
                fail_Covid_Historical: null
            }
        case COVID_HISTORICAL_SUCCESS:
            return {
                ...state,
                isLoading_Covid_Historical: false,
                success_Covid_Historical: payload.data,
                fail_Covid_Historical: null
            }
        case COVID_HISTORICAL_FAIL:
            return {
                ...state,
                isLoading_Covid_Historical: false,
                fail_Covid_Historical: payload.response.status,
                success_Covid_Historical: null
            }
        default:
            return state
    }
}
