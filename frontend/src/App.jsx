import "./styles/App.css";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
