// React package
import { Routes, Route } from "react-router-dom";
// Our Modules
import Home from "./pages/Home";
import Event from "./pages/Event";
import Login from "./components/Login/Login";
import SignUp from "./components/signup/SignUp";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
