import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    CLEAR_TODO_LIST,
} from "../types/types";

const INITIAL_STATE = {
    counter: 0,
    list: [{ id: 0, text: "Add Todo...:", completed: false }],
};

const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                counter: state.counter + 1,
                list: [
                    ...state.list,
                    {
                        id: state.counter + 1,
                        text: action.payload,
                        completed: false,
                    },
                ],
            };
        case REMOVE_TODO:
            return {
                ...state,
                list: state.list.filter((item) => item.id !== action.id),
            };
        case TOGGLE_TODO:
            return {
                
            };

        default:
            break;
    }
};

export default todoReducer;
