import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Parameters from "./pages/Parameters";
import Users from "./pages/Users";
import FacetMaster from "./pages/FacetMaster";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/parameters" element={<Parameters />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/facet-master" element={<FacetMaster />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
