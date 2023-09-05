import { AuthContext } from '../context/AuthContext';
import { Dispatch, useContext } from 'react';
import { User, Login, Logout } from '../context/AuthContext'; // Import types from AuthContext

type Action = Login | Logout;

type AuthContextType = {
    user: User | null;
    dispatch: Dispatch<Action>;
};

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuthContext must be used inside an AuthContextProvider');
    }

    return context;
};
