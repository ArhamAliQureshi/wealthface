const initailState = {
    name: "Arham Ali Qureshi",
    password: "Test12345"
};

function rootReducer(state = initailState, action) {
    switch (action.type) {
        case 'UPDATE_SETTINGS':
            return { ...state, password: action.value };
        default:
            return state;
    }
}

export default rootReducer;