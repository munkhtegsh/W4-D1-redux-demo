//nothing to import in reducer
const initState = {
    num: 0
};


const INCREASE = 'INCREASE';
const CHANGE = 'CHANGE';
// Reducer
export default function reducer(state = initState, action) {
    switch(action.type) {
        case INCREASE: 
            return Object.assign({}, state, {num: state.num + 1});
        case CHANGE:
            return Object.assign({}, state, {num: action.payload});
        default:
            return state; //important to return state here
    }
}

// Action creators
// are fn that return actions
// actions are objects with up to tow key value pairs -- type (required), payload (optional)
export const increaseNum = () => {
    return {
        type: INCREASE
    };
};

export const changeNum = (num) => {
    return {
        type: CHANGE,
        payload: num
    };
};