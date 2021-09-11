import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    CLEAR_TODO_LIST,
} from "../types/types";

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};
export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        id,
    };
};
export const toggleTodo = (payload) => {
    return {
        type: TOGGLE_TODO,
        payload,
    };
};
export const clearTodoList = () => {
    return {
        type: CLEAR_TODO_LIST,
    };
};
