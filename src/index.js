import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./Styles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById("app")
);
