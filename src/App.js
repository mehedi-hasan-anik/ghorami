import { Route, Routes } from "react-router-dom";
import About from "../src/pages/About/index";
import Home from "../src/pages/Home/index";
import "./App.css";
import InvestorAccount from "./pages/InvestorAccount";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/investor-account" element={<InvestorAccount />} />
      </Routes>
    </div>
  );
}

export default App;
