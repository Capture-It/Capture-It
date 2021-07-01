import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <Auth0Provider
  
    domain='abdullahelian.us.auth0.com'
    clientId='Jfe58UXLWuk9IVvmuMSoO82OoOrk8z5v'
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);