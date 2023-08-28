import { useState } from "react"
import useSignup from "../hooks/useSignup";


export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, isLoading, error } = useSignup();
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password);
        signup(email, password)
    }
    console.log(error, isLoading);
    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                />
                <label>Password:</label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <button disabled={isLoading}>Sign Up</button>
            {error &&  <div className="error">{error}</div>}
        </form>
    )
}
