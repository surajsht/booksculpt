import { useState } from "react";
import LoginImage from "../assets/login-image.png";
import GoogleLogo from "../assets/google-logo.svg";
import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/FireConfig";
import { UseCustomContext } from "../context/CustomContext";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const { error, handleError } = UseCustomContext();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } catch (e) {
      handleError(e.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/profile");
    } catch (e) {
      handleError(e.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-item">
        <h2 className="auth-title-primary">
          Enter BookSculpt, where your literary sanctuary awaits.
        </h2>
        <img src={LoginImage} alt="login-image" />
      </div>

      <div className="auth-item">
        <h2 className="auth-title-secondary"> Login </h2>

        {error && <span className="auth-error"> {error} </span>}

        <form className="auth-form" onSubmit={(e) => loginUser(e)}>
          <div className="form-item">
            <label htmlFor="email"> Email </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="auth-btn login-btn">
            Login
          </button>
        </form>

        <button className="auth-btn google-auth" onClick={loginWithGoogle}>
          <img src={GoogleLogo} alt="google-logo-svg" />
          Login with Google
        </button>

        <p>
          Don't have an account? <Link to="/signup"> Sign up </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
