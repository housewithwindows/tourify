import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Nav = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-green-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo in bold green */}
        <h2 className="text-2xl font-extrabold text-green-700 cursor-pointer">Tourify</h2>

        {/* Navigation links with green text and hover underline */}
        <div className="space-x-8 text-green-700 text-sm font-semibold">
          <Link className="hover:underline cursor-pointer" to="/">Home</Link>

          {!user && (
            <>
              <Link className="hover:underline cursor-pointer" to="/login">Log In</Link>
              <Link className="hover:underline cursor-pointer" to="/signup">Sign Up</Link>
            </>
          )}

          {user && (
            <>
              <Link className="hover:underline cursor-pointer" to="/profile">Profile</Link>
              <Link className="hover:underline cursor-pointer" to="/tours">Tours</Link>
              <Link className="hover:underline cursor-pointer" to="/logout">LogOut</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;




