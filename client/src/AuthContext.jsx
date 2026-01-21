/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const API_URL = "http://localhost:3000/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // adding log in
  const login = async (formObj) => {
    try {
      //fetching auth/login
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },//setting content type
        body: JSON.stringify(formObj),//turning our info into json
        credentials: "include",
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message || "Signup failed")
      };
      setUser(result.data.user);
      return result.data.user;
    } catch (err) {
      alert(err.message);//alerting our client with error
    }
  };
  //sign up function
  const signup = async (formObj) => {
    try {
      //fetching auth/signup
      const res = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formObj),
        credentials: "include",
      });
      
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result)
      };
      if (res.status === 400){
        alert('password mst be 6 letters')
      }
      console.log("Signup response from backend:", result);//seeing backends response in console
      
      //this code will run if we get unexpected formato of data by user
      if (!result.data.user) {
        throw new Error("Unexpected response format: user not found");
      }
      //setting user as data
      setUser(result.data.user);
      // returning data
      return result.data.user;
    } catch (err) {
      alert(err.message);
      return null;
    }
  };

  // logout function
  const logout = () => {
    setUser(null);//setting user as null
  };
  
return (
    <AuthContext.Provider value={{ user, login, signup,logout }}>
      {children}
    </AuthContext.Provider>
);
};



