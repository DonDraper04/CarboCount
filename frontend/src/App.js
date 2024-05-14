import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; // Import your components
import Calculer from "./components/Calculer";
import Resultats from "./components/Resultats";
import Login from "./components/pages/Login";
import VosResultats from "./components/pages/VosResultats";
import DetailsPerScope from "./components/pages/DetailsPerScope";
// import Login from './components/pages/Login'
import Signup from "./components/pages/Signup";
// import Parameters from './components/pages/Parameters'
import ForgotPassword from "./components/pages/ForgotPassword";
// import CompteEntreprise from './components/pages/CompteEntreprise'
import Cookies from "js-cookie";

import { useState, useEffect } from "react";
import { useApp } from "./components/context/AuthContext";
function App() {
  const [scope1, setScope1] = useState(0);
  const [scope2, setScope2] = useState(0);
  const [scope3, setScope3] = useState(0);
  const [totale, setTotale] = useState(0);
  const { user, dispatch } = useApp();
  useEffect(() => {
    const u = Cookies.get("user");
    const uu = JSON.parse(u);
    console.log(uu);
    if (!u) {
      return dispatch({ type: "LOUGOUT" });
    }
    try {
      fetch("http://localhost:8080/api/Entreprise/CheckToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${uu.token}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            return dispatch({ type: "LOUGOUT" });
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <Router>
      <div className="bg-[#F8F8F8]">
        {/* <Login/> */}
        {/* <Signup/> */}
        {/* <Parameters/> */}
        {/* <ForgotPassword/> */}
        {/* <CompteEntreprise/> */}
        {/* <VosResultats/> */}
        {/* <DetailsPerScope/> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/calculer"
            element={
              user ? (
                <Calculer
                  scope1={scope1}
                  setScope1={setScope1}
                  scope2={scope2}
                  setScope2={setScope2}
                  scope3={scope3}
                  setScope3={setScope3}
                  totale={totale}
                  setTotale={setTotale}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/resultats"
            element={
              user ? (
                <Resultats
                  scope1={scope1}
                  scope2={scope2}
                  scope3={scope3}
                  totale={totale}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
