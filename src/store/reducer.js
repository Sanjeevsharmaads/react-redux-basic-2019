const initialState = {
    age:20,
    color:"red"
};

const reducer = (state=initialState, action) => {

    switch(action.type){
        case 'AGE_UP': 
            return {
                ...state,
                age: action.value,
                color:"blue"
            }
            break;

        case 'AGE_DOWN': 
        return {
            ...state,
            age: action.value,
            color:"red"
        }
        break;
    }
    return state;
};

export default reducer;