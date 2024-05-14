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
import HistoResultat from "./components/HistoResultat";
// import Parameters from './components/pages/Parameters'
import ForgotPassword from "./components/pages/ForgotPassword";
import CompteEntreprise from "./components/pages/CompteEntreprise";
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
    if (!u) {
      return dispatch({ type: "LOUGOUT" });
    }
    const uu = JSON.parse(u);
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
            console.log(res);
            Cookies.remove("user");
            return dispatch({ type: "LOUGOUT" });
          }
          dispatch({ type: "LOGIN", payload: uu.entreprise });
        })
        .catch((error) => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  const [scope11, setScope11] = useState(0);
  const [scope12, setScope12] = useState(0);
  const [scope13, setScope13] = useState(0);
  const [scope14, setScope14] = useState(0);
  const [scope21, setScope21] = useState(0);
  const [scope22, setScope22] = useState(0);
  const [scope31, setScope31] = useState(0);
  const [scope32, setScope32] = useState(0);
  const [scope33, setScope33] = useState(0);
  const [scope34, setScope34] = useState(0);
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
            path="/account"
            element={user ? <CompteEntreprise /> : <Navigate to="/login" />}
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
                  scope11={scope11}
                  setScope11={setScope11}
                  scope12={scope12}
                  setScope12={setScope12}
                  scope13={scope13}
                  setScope13={setScope13}
                  scope14={scope14}
                  setScope14={setScope14}
                  scope21={scope21}
                  setScope21={setScope21}
                  scope22={scope22}
                  setScope22={setScope22}
                  scope31={scope31}
                  setScope31={setScope31}
                  scope32={scope32}
                  setScope32={setScope32}
                  scope33={scope33}
                  setScope33={setScope33}
                  scope34={scope34}
                  setScope34={setScope34}
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
                  scope11={scope11}
                  scope12={scope12}
                  scope13={scope13}
                  scope14={scope14}
                  scope21={scope21}
                  scope22={scope22}
                  scope31={scope31}
                  scope32={scope32}
                  scope33={scope33}
                  scope34={scope34}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/resultats/:id"
            element={
              user ? (
                <HistoResultat/>
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
