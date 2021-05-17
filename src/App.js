import { useState } from "react";
import Pages from "./Pages";
import Sidebar from "./Components/Sidebar";
import MenuBar from "./Components/MenuBar";
import Darkmode from "./Components/Darkmode";

function App() {
  const [loaded, setLoaded] = useState(false);
  window.onload = () => {
    if (document.readyState === "complete") {
      document.body.classList.add("loaded");
      setLoaded(true);
    }
  };

  return (
    <>
      <div className="mobile-Topbar"></div>
      <div className="app-wrapper">
        <div className="app-container">
          <Sidebar loaded={loaded} />
          <MenuBar />
          <Pages />
        </div>
      </div>
      <Darkmode />
    </>
  );
}

export default App;
