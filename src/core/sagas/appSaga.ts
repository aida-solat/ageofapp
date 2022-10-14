import { put, call, takeEvery,takeLatest, all, fork,delay } from "redux-saga/effects";


import * as actionCreators from "../actions/appActionCreators";
import * as actionTypes from "../actionTypes/appActions";



import api from '../service/api'

const client = api('http://localhost:5050')


function* onLoading({}: actionTypes.SetLoadingAction) {
    try {

    } catch (error) {
    }
}



function* onLoadUnits({}: actionTypes.SetLoadingAction):any {
    try {

        const data = require('../../age-of-empires-units.json');



        yield put(actionCreators.loadUnitSuccess(data.units))

        //let response:any = yield call(client.getUnits);


    } catch (error) {

        //alert('error')
        console.log('error',error)
    }
}



function* watchApp() {
    yield takeLatest(actionTypes.SET_LOADING, onLoading);
    yield takeLatest(actionTypes.LOAD_UNIT_REQUEST, onLoadUnits);
}

export default function* appSaga() {
    yield all([fork(watchApp)]);
}
