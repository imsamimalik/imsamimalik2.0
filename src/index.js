import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./Styles/GlobalStyles";
// import { BrowserRouter as Router } from "react-router-dom";
import { Router } from "wouter";

ReactDOM.render(
  <>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById("app")
);
