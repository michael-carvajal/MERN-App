import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export default function useLogin() {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { dispatch } = useAuthContext();

    const login = async (email: string, password: string): Promise<void> => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            console.log(json);
            setError(json)
            return json
        }

        if (response.ok) {
            setIsLoading(false)
            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update auth context
            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false)
        }

    }
    return { login, isLoading, error }
}
