import {Unit} from "../reducers/appReducer";

export const SET_LOADING = "app/SET_LOADING";
export interface SetLoadingAction {
    type: typeof SET_LOADING;
    payload: boolean;
}

export const SET_LOADING_FALSE = "app/SET_LOADING_FALSE";
export interface SetLoadingFalseAction {
    type: typeof SET_LOADING_FALSE;
}



export const LOAD_UNIT_REQUEST = "app/LOAD_UNIT_REQUEST";
export interface LoadUnitRequest {
    type: typeof LOAD_UNIT_REQUEST;
}



export const LOAD_UNIT_SUCCESS = "app/LOAD_UNIT_SUCCESS";
export interface LoadUnitSuccess {
    type: typeof LOAD_UNIT_SUCCESS;
    payload: Unit[]
}


export const LOAD_UNIT_FAILURE = "app/LOAD_UNIT_FAILURE";
export interface LoadUnitFailure {
    type: typeof LOAD_UNIT_FAILURE;
    payload: Unit[]
}
