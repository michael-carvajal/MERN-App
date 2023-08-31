import React, { useState, ChangeEvent, FormEvent } from "react";
import useSignup from "../hooks/useSignup";

const Signup: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { signup, isLoading, error } = useSignup();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(email, password);
        signup(email, password);
    };

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
            {error && typeof error === 'string' ? (
                <div className="error">{error}</div>
            ) : null}
        </form>
    );
};

export default Signup;
