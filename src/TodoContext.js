import React, { createContext } from 'react';
import { useState } from 'react';
// import { ThemeConsumer } from 'styled-components';
import AppTodo from './pages/todo';



const initialState = {
    state: {
        todo: []
    }, 
    action: { 
        setTodo: () => {} 
    }
};



const TodoContext = createContext(initialState);
export const TodoProvider = ({children}) => {
    const [todos, setTodo ] = useState(initialState);
    const value = {
        ...todos,
        action: { setTodo }
    }

    return( <TodoContext.Provider value={value}>
            {children} 
            </TodoContext.Provider>
    )

}

// const  MenuConsumer = MenuContext.Consumer와 같은 의미
export const { Consumer: TodoConsumer } = TodoContext;

export default TodoContext;