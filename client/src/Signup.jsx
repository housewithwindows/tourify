import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom"; 

const SignUp = () => {
    const { signup } = useAuth();
    const navigate = useNavigate();  

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formObj = {
            fullname: form.fullname.value,
            email: form.email.value,
            password: form.password.value
        };

        const newUser = await signup(formObj);
        if (newUser) {
            alert(`Signed up as: ${newUser.fullname}`);
            navigate("/login");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-green-50">
            <form 
                className="bg-green-200 p-8 rounded-xl shadow-lg w-full max-w-sm text-green-900" 
                onSubmit={handleSubmit}
            >
                <h1 className="text-3xl font-bold mb-6 text-center text-green-900">Sign Up</h1>

                <input 
                    type="text" 
                    name="fullname" 
                    placeholder="Enter full name" 
                    required 
                    className="w-full p-3 mb-4 rounded-lg bg-green-50 text-green-900 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter email" 
                    required 
                    className="w-full p-3 mb-4 rounded-lg bg-green-50 text-green-900 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                <input 
                    type="password" 
                    name="password" 
                    placeholder="Enter password" 
                    required 
                    className="w-full p-3 mb-6 rounded-lg bg-green-50 text-green-900 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                <button 
                    type="submit" 
                    className="w-full bg-green-500 hover:bg-green-600 p-3 rounded-lg text-white font-semibold transition-colors"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;





