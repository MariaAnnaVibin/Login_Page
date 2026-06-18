import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
// import './App.css'


function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

  export default App;