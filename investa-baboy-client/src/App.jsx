import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Register_Login/Auth";
// import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />

      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}

export default App;
