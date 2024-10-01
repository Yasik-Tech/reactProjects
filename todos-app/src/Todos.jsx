import { useReducer } from 'react'

const initialState = [
    { id: 1, name: "Reading" },
    { id: 2, name: "Walking" },
];

const TODOS_ACTIONS = {
    ADD_TASK: "ADD_TASK",
    DELETE_TASK: "DELETE_TASK",
    UPDATE_TASK: "UPDATE_TASK"
}

function reducer(state, action) {

    switch (action.type) {
        case TODOS_ACTIONS.ADD_TASK:
            return [...state, { id: state.length + 1, name: action.payLoad }];
        case TODOS_ACTIONS.DELETE_TASK:
            return state.filter((task) => task.id !== action.payLoad);
        case TODOS_ACTIONS.UPDATE_TASK:
            return state.map((todos) => (todos.id === action.payLoad.id ? { ...todos, name: action.payLoad.newName } : todos));
        default:
            return state;
    }

}

function init(initialState) {
    // const data = [...initialState, {id:1, name:"reading"}];
    // return data;
    return initialState;

}
export const Todos = () => {
    const [todos, dispatch] = useReducer(reducer, initialState, init);      //3rd parameter is optional

    return (
        <>
            <h4>Product list :{todos.length}</h4>
            <button onClick={() => dispatch({ type: TODOS_ACTIONS.ADD_TASK, payLoad: prompt("Enter New Item") }
            )}>Add Items</button>
            <ul>
                {
                    todos.map((todos) => (<li key={todos.id}>{todos.name}
                        <button onClick={() => dispatch({ type: TODOS_ACTIONS.DELETE_TASK, payLoad: todos.id })}>Delete</button>
                        <button onClick={() => dispatch({ type: TODOS_ACTIONS.UPDATE_TASK, payLoad:  {id: todos.id, newName
                            : prompt("Enter New Name")}})}>Update</button></li>))
                }
            </ul>
        </>
    )
}
