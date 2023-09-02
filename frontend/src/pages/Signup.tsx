import React, { useState, ChangeEvent, FormEvent } from "react";
import useSignup from "../hooks/useSignup";

const Signup: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [formErrors, setFormErrors] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const { signup, isLoading, error } = useSignup();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
     else if (name === 'confirmPassword') {
        setConfirmPassword(value);
    }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('handlong submittt');

        setFormErrors('');
        if (password !== confirmPassword) {
            setFormErrors('Passwords do no match.')
            return
        }

        // console.log(email, password);
        signup(email, password);
    };

    return (
        <div className="container mx-auto">
            <div className="flex justify-center px-6 my-12">
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div
                        className="w-full h-auto  bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                        style={{backgroundImage: "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"}}
                    ></div>
                    <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
                            {formErrors && <div className=" text-red-400 font-semibold text-center text-lg">{formErrors}</div>}
                            {(error && typeof error === 'string') && <div className=" text-red-400 font-semibold text-center text-lg">{error}</div>}
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                    Email
                                </label>
                                <input
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
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                        name="password"
                                        onChange={handleChange}
                                        value={password}
                                    />
                                    <p className="text-xs italic text-red-500">Please choose a password.</p>
                                </div>
                                <div className="md:ml-2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                                        Confirm Password
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="c_password"
                                        type="password"
                                        placeholder="******************"
                                        name="confirmPassword"
                                        onChange={handleChange}
                                        value={confirmPassword}
                                    />
                                </div>
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                >
                                    Register Account
                                </button>
                            </div>
                            <hr className="mb-6 border-t" />
                            <div className="text-center">
                                <a
                                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    href="#"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="text-center">
                                <a
                                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    href="#"
                                >
                                    Already have an account? Login!
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
