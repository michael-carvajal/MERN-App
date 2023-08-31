import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { User } from "../context/AuthContext";


export default function useSignup() {
    const [error, setError] = useState<string | User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { dispatch } = useAuthContext();
    type SignupError = string | User
    const signup = async (email: string, password: string): Promise<void> => {
        setIsLoading(true);
        setError(null);
        console.log(email, password);

        try {
            const response = await fetch('/api/user/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const json: User | string = await response.json();
            
            if (!response.ok) {
                setIsLoading(false);
                console.log(json);
                setError(json);
            } else {
                setIsLoading(false);
                // Save user to local storage
                localStorage.setItem('user', JSON.stringify(json));


                    dispatch({ type: 'LOGIN', payload: json as User }); // For User


                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            console.error(error);
            setError(error as SignupError);
        }
    };

    return { signup, isLoading, error };
}
