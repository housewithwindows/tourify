import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const savedEmail = localStorage.getItem("email");
        const savedPassword = localStorage.getItem("password");
        if (savedEmail) setEmail(savedEmail);
        if (savedPassword) setPassword(savedPassword);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        const formObj = {
            email: e.target.email.value,
            password: e.target.password.value
        };

        try {
            const loggedInUser = await login(formObj);
            if (loggedInUser) {
                alert(`Logged in as: ${loggedInUser.fullname}`);
                navigate("/");
            }
        } catch (error) {
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-green-50">
            <form
                className="bg-green-200 p-8 rounded shadow-md w-full max-w-sm text-gray-900"
                onSubmit={handleSubmit}
            >
                <h1 className="text-3xl font-bold mb-6 text-center text-green-900">Log In</h1>

                <input
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 mb-4 rounded bg-green-100 text-green-900 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-2 mb-6 rounded bg-green-100 text-green-900 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                >
                    Log In
                </button>
            </form>
        </div>
    );
};

export default LogIn;






