import React, { useEffect, useState } from "react";
import Resultats from "./Resultats";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useApp } from "./context/AuthContext";
export default function HistoResultat() {
  const { baseUrl } = useApp();
  const { id } = useParams();
  const [scopes, setScopes] = useState([]);
  useEffect(() => {
    const token = JSON.parse(Cookies.get("user")).token;
    console.log(id);
    fetch(`${baseUrl}/bilan/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          setScopes(data.scopes);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <>
      {scopes.length !== 0 && (
        <Resultats
          scope1={scopes[0].total}
          scope2={scopes[1].total}
          scope3={scopes[2].total}
          totale={scopes[0].total + scopes[1].total + scopes[2].total}
          scope11={scopes[3].total}
          scope12={scopes[4].total}
          scope13={scopes[5].total}
          scope14={scopes[6].total}
          scope21={scopes[7].total}
          scope22={scopes[8].total}
          scope31={scopes[9].total}
          scope32={scopes[10].total}
          scope33={scopes[11].total}
          scope34={scopes[12].total}
        />
      )}
    </>
  );
}
