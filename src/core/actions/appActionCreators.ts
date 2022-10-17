import * as actions from '../actionTypes/appActions';

export function setLoadingFalse(): actions.SetLoadingFalseAction {
  return {
    type: actions.SET_LOADING_FALSE
  };
}

export function setLoading(payload: boolean): actions.SetLoadingAction {
  return {
    type: actions.SET_LOADING,
    payload
  };
}

export function loadUnits(): actions.LoadUnitRequest {
  return {
    type: actions.LOAD_UNIT_REQUEST
  };
}

export function loadUnitSuccess(payload: []): actions.LoadUnitSuccess {
  return {
    type: actions.LOAD_UNIT_SUCCESS,
    payload
  };
}

export function loadUnitFailure(payload: []): actions.LoadUnitFailure {
  return {
    type: actions.LOAD_UNIT_FAILURE,
    payload
  };
}

export function loadRandomUnitRequest(
  payload: []
): actions.LoadRandomUnitRequest {
  return {
    type: actions.LOAD_RANDOM_UNIT_REQUEST,
    payload
  };
}
