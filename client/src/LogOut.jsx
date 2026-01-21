import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // clears user
    navigate("/signup"); // redirect to signup page
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-50 px-4">
      <div className="bg-green-200 p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h2 className="mb-4 text-3xl font-bold text-green-900">You're logged in!</h2>
        <p className="mb-6 text-green-800">When you're ready, click the button below to log out.</p>
        <button
          onClick={handleLogout}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default LogoutButton;



