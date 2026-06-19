import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import './App.css'
import End from "./pages/End";


function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/end" element={<End />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;