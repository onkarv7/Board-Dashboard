import logo from "./logo.svg";
import "./App.css";
import SignIn from "./pages/Signin";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
