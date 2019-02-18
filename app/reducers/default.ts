import actionTypes from '../actions/types';


const initialState = {
    name: 'Вася',
    progress:false
};

function defaultReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ChangeName:
            return {
                ...state,
                ...action.payload
            };
        case actionTypes.LoadDataStart:

            return {
                ...state,
                ...action.payload
            };
        case actionTypes.LoadDataSuccess:

            return {
                ...state,
                ...action.payload
            };
        case actionTypes.LoadDataError:

            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
}

export default defaultReducer