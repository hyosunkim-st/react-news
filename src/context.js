import React, { createContext } from 'react';
import { useState } from 'react';
// import { ThemeConsumer } from 'styled-components';


const initialState = {
    state: {
        Menu: {
            kr: { all: [], 
                business: [], 
                entertainment: [], 
                health: [], 
                science: [],
                sports: [], 
                technology: []
                },
            jp: { all: [], 
                business: [], 
                entertainment: [], 
                health: [], 
                science: [],
                sports: [], 
                technology: []
                },
            us: { all: [], 
                business: [], 
                entertainment: [], 
                health: [], 
                science: [],
                sports: [], 
                technology: []
                },
            cn: { all: [], 
                business: [], 
                entertainment: [], 
                health: [], 
                science: [],
                sports: [], 
                technology: []
                }                
            },
    }, 
    action: { 
        setMenu: () => {} 
    }
};

export const MenuContext = createContext(initialState);
export const MenuProvider  = ({children}) => {
    const [ menu, setMenu] = useState(initialState);
    // eslint-disable-next-line
    const value={
        ...menu,
        action: { setMenu }
    }


    return( <MenuContext.Provider value={value}>
            {children} 
            </MenuContext.Provider>
    )

}

// const  MenuConsumer = MenuContext.Consumer와 같은 의미
export const { Consumer: MenuConsumer } = MenuContext;

export default MenuContext;