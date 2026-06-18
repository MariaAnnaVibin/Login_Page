import "./Login.css";
import { Link} from "react-router-dom"
import {useState} from 'react'
import axios from 'axios'
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";

function Login() {
    const[email,setmail]=useState('')
    const[password,setpassword]=useState('')
    const[error,seterror]=useState('')
    const[success,setsuccess]=useState('')
    const navigate=useNavigate()

    const handleLogin=async(e)=>{
        e.preventDefault();
        console.log("Login button clicked");
        seterror('')
        setsuccess('');

        try{
    
            
            const reponse=await axios.post("https://sample-e-1.onrender.com/login",{
                email,password})
            console.log(reponse)
            
            const{token}=reponse.data
            setsuccess('Login successful')
            localStorage.setItem('token',token)
            navigate("/home")
            
        }
        catch(err){
            seterror(err.reponse?.data?.message||'An error occured');
        }




    }



    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Welcome Back</h2>
                <p>Sign in to your account</p>

                <form onSubmit={handleLogin}> 
                    <div className="input-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e)=>setmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e)=>setpassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button type="submit" className="login-button">
                        Login
                    </button>

                    <p className="signup-text">
                        Don't have an account?{" "}
                        <Link to="/signup" className="signup-link">
                            Sign Up Here
                        </Link>
                    </p>
                </form>
                {error&& <p style={{color:"red"}}>{error}</p> }
                {success && <p style={{color:"green"}}>{success}</p> }
            </div>
        </div>
    );
}

export default Login;