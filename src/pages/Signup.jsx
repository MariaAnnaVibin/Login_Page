import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [username, setusername] = useState("");
  const [email, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    seterror("");
    setsuccess("");

    try {
      const response = await axios.post(
        "https://sample-e-1.onrender.com/signup",
        {
          username,
          email,
          password,
        }
      );

      console.log(response.data);
      setsuccess("Account created successfully!");
    } catch (err) {
      console.log(err);
      seterror(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Account</h2>
        <p>Join AuthHub and get started</p>

        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Create a password"
              required
            />
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>

          <p className="login-text">
            Already have an account?{" "}
            <Link to="/" className="login-link">
              Login Here
            </Link>
          </p>
        </form>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
    </div>
  );
}

export default Signup;