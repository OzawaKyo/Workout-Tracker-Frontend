import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login"; 
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="iphone-container">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  );
};

export default App;
