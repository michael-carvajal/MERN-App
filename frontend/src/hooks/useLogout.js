import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {


    const logout = () => {
        //remove user from storage
        localStorage.removeItem('user');
        const { dispatch } = useAuthContext();

        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}
