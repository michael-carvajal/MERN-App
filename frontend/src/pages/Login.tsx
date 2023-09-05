import React, { ChangeEvent, FormEvent, useState } from "react"
import useLogin from "../hooks/useLogin";
import { Link, useNavigate } from "react-router-dom";
import { log } from "console";

const Login: React.FC = () => {
const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();
    const navigate = useNavigate()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            console.log(isLoading);
            const loginResponse = await login(email, password);
            // At this point, the login function has completed


            if (typeof loginResponse === 'string') {
                return
            }

            // Redirect or perform other actions on successful login
            navigate('/');
        } catch (error) {
            // Handle any exceptions that might occur during the login process
            console.error(error);
        }
    };


    return (
        <div className="container mx-auto">
            <div className="flex justify-center px-6 my-12">
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div
                        className="w-full h-auto  bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                        style={{ backgroundImage: "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')" }}
                    ></div>
                    <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 className="pt-4 text-2xl text-center">Log in!</h3>
                        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
                            {(error && typeof error === 'string') && <div className=" text-red-400 font-semibold text-center text-lg">{error}</div>}
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    required
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={handleChange}
                                    value={email}
                                />
                            </div>
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0 md:w-full">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        required
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                        name="password"
                                        onChange={handleChange}
                                        value={password}
                                    />
                                </div>

                            </div>
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="submit"
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                >
                                    Register Account
                                </button>
                            <hr className="mb-6 border-t" />
                            <div className="text-center">
                                <Link to='/signup'
                                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"

                                >
                                    No account? Sign Up here.
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
