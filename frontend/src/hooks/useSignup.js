import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export default function useSignup () {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext();

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            console.log(json);
            setError(json)
        }

        if (response.ok) {
            setIsLoading(false)
            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update auth context
            dispatch({type: 'LOGIN', payload : json})

            setIsLoading(false)
        }

    }
    return {signup, isLoading, error}
}
