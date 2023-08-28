import { useState } from "react"

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    return (
        <form className="signup">
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
            <button>Sign Up</button>
        </form>
    )
}
