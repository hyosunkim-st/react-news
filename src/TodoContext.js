import React, { createContext } from 'react';
import { useState } from 'react';
// import { ThemeConsumer } from 'styled-components';
import AppTodo from './pages/todo';



const initialState = {
state: {
    Todo: []
}, 
action: { setTodo: () => {} }};



export const TodoContext = createContext(initialState);
export const TodoProvider = ({children}) => {
    const [todo, setTodo ] = useState(initialState);
    const value = {
        ...initialState,
        action: { setTodo }
    }

    return( <TodoContext.Provider value={AppTodo}>
            {children} 
            </TodoContext.Provider>
    )

}

// const  MenuConsumer = MenuContext.Consumer와 같은 의미
export const { Consumer: TodoConsumer } = TodoContext;

export default TodoContext;