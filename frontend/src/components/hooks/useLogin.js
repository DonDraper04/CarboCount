import { useState } from "react";
import { useApp } from "../context/AuthContext";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const useLogin = () => {
  const [Error, setError] = useState(null);
  const [Lauding, setLauding] = useState(false);
  const { dispatch, baseUrl } = useApp();
  const navigate = useNavigate();

  const Login = async (email, password) => {
    setLauding(true);
    const response = await fetch(`${baseUrl}/api/Entreprise/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json);
      setLauding(false);
      setTimeout(() => {
        setError(null);
      }, 2500);
    }
    if (response.ok) {
      Cookies.set("user",JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      navigate("/calculer")
      setLauding(false);
    }
    return json;
  };
  return { Error, Login, Lauding, setError };
};

export default useLogin;
