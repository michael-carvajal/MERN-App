import { useAuthContext } from "./useAuthContext";

type LogoutFunction = () => void;

const useLogout = (): { logout: LogoutFunction } => {
    const { dispatch } = useAuthContext();

    const logout: LogoutFunction = () => {
        // Remove user from storage
        localStorage.removeItem('user');

        dispatch({ type: 'LOGOUT' });
    };

    return { logout };
};

export default useLogout;
