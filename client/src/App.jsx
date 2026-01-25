import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./Nav";
import Home from "./Home";
import LogIn from "./LogIn";
import SignUp from "./Signup";
import Profile from "./Profile";
import Tours from "./Tours";
import LogoutButton from "./LogOut";

const App = () => {
  useEffect(() => {
    if (window.Tawk_API) return; // prevent duplicate load

    var Tawk_API = window.Tawk_API || {};
    var Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/6973ae160423e41981a1411d/1jflu02qk";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/logout" element={<LogoutButton />} />
      </Routes>
    </>
  );
};

export default App;


