import React from "react";
import "./FormulaireConnect.css";

function Login() {
  return (
    <div className="login">
      <h2 className="logintitle">Je me connecte !</h2>
      <p className="paraText">
        Connectez-vous avec votre compte pour bénificier de vos favoris et
        d'autres paramètres sur tous vos appareils
      </p>
      <form>
        <label className="classEmail">
          <p className="paraEmail">Adresse e-mail</p>
          <input type="email" />
        </label>
        <label className="classMdp">
          <p className="paraMdp">Mot de passe</p>
          <input type="password" />
        </label>
        <div className="btnClass">
          <button className="btnSubmit" type="submit">
            Connection
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
