import React, { Dispatch, ReactNode, createContext, useEffect, useReducer } from 'react';

interface User {
    _id: string,
    //
}

interface AppState {
    user: User | null
}

interface Login {
    type: 'LOGIN',
    payload: User
}

interface Logout {
    type: 'LOGOUT'
}


type Action = Login | Logout

export const AuthContext = createContext<{
    user: User | null,
    dispatch: Dispatch<Action>
}>({ user: null, dispatch: () => {} });

const authReducer = (state: AppState, action: Action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }

        default:
            return state
    }
}

interface AuthContextProviderProps {
    children : ReactNode
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    });
    useEffect(() => {
        const user =JSON.parse(localStorage.getItem('user')!)
        if (user) {
            dispatch({type : 'LOGIN', payload: user})
        }
    }, [])
    console.log('Authcontext State:  ', state);
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
