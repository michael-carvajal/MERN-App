import React, { ChangeEvent, FormEvent, useState } from "react"
import useLogin from "../hooks/useLogin";
import { redirect } from "react-router-dom";

const Login: React.FC = () => {
const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await login(email, password)
        redirect('/')
    }

    return (
        <form className="Login" onSubmit={handleSubmit}>
            <h3>Log In</h3>
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
            <button disabled={isLoading}>Log In</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login;
