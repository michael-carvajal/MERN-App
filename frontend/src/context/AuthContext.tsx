import React, { Dispatch, ReactNode, createContext, useEffect, useReducer } from 'react';

export interface User {
    _id: string,
    email: string,
    token: string
}

interface AppState {
    user: User | null
}

export interface Login {
    type: 'LOGIN',
    payload: User
}

export interface Logout {
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
