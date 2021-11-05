import React from "react";
import "./FormulaireConnect.css";

function Login() {
  return (
    <div className="login">
      <h2 className="loginTitle">Je me connecte !</h2>
      <p className="paraText">
        Connectez-vous avec votre compte pour bénificier de vos favoris et
        d'autres paramètres sur tous vos appareils
      </p>
      <form>
        <label className="classEmail">Adresse e-mail :</label>
        <input className="paraEmail" type="email" />
        <label className="classMdp">Mot de passe :</label>
        <input className="inputMdp" type="password" />
        <button className="btnSubmit" type="submit">
          Connection
        </button>
      </form>
    </div>
  );
}

export default Login;
