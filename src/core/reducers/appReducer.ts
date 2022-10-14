import * as actions from "../actionTypes/appActions";


export interface Cost {
    Wood: number;
    Gold: number;
}

export interface Unit {
    id: number;
    name: string;
    description: string;
    expansion: string;
    age: string;
    cost: Cost;
    build_time: number;
    reload_time: number;
    attack_delay: number;
    movement_rate: number;
    line_of_sight: number;
    hit_points: number;
    range: number;
    attack: number;
    armor: string;
    accuracy: string;
}



export interface AppReducerState {
    isLoading: boolean;
    units: Unit[]
}


const appReducers = (state: AppReducerState = {
    isLoading: false,
    units: []
}, action: actions.SetLoadingAction | actions.SetLoadingFalseAction | actions.LoadUnitSuccess | actions.LoadUnitRequest | actions.LoadUnitFailure) => {
    switch (action.type) {
        case actions.SET_LOADING:
            return {...state, isLoading: action.payload}
        case actions.SET_LOADING_FALSE:
            return {...state, isLoading: false}
        case actions.LOAD_UNIT_SUCCESS: {
            return {...state, units: action.payload};
        }
        case actions.LOAD_UNIT_FAILURE: {
            return state;
        }
        case actions.LOAD_UNIT_REQUEST: {
            return state;
        }
    }

    return state;
};

export default appReducers;
