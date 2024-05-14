
import { useApp } from "../context/AuthContext";
import { useState } from "react";
export default function useSignup() {
  const [Error, setError] = useState(null);
  const [Lauding, setLauding] = useState(false);
  const { dispatch, baseUrl } = useApp();
  const Signup = async (name, email, phone, registre_commerce, address) => {
    let json;
    try {
      setLauding(true);
      const response = await fetch(
        `${baseUrl}/api/Entreprise/CreateAccountRequest`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            name,
            phone,
            registre_commerce,
            address,
          }),
        }
      );
       json = await response.json();
      if (!response.ok) {
        setError(json);
        setLauding(false);
        setTimeout(() => {
          setError(null);
        }, 2000);
      }
      setLauding(false);
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
    return json;
  };
  return { Signup };
}

