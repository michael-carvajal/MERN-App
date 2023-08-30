import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

interface SignUpError {
    // Define the properties of the error object
    // Example: message: string;
    // Add other properties as needed
}

interface SignUpResponse {
    // Define the properties of the response object
    // Example: token: string;
    // Add other properties as needed
}

export default function useSignup() {
    const [error, setError] = useState<SignUpError | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { dispatch } = useAuthContext();

    const signup = async (email: string, password: string): Promise<void> => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/user/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const json: SignUpResponse = await response.json();

            if (!response.ok) {
                setIsLoading(false);
                console.log(json);
                setError(json);
            } else {
                setIsLoading(false);
                // Save user to local storage
                localStorage.setItem('user', JSON.stringify(json));

                // Update auth context
                dispatch({ type: 'LOGIN', payload: json });

                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            console.error(error);
            setError({ message: 'An error occurred during signup.' });
        }
    };

    return { signup, isLoading, error };
}
