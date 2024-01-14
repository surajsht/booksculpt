import { useEffect, useState } from "react";
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

const Login = () => {
  let [email, getEmail] = useState("");
  let [password, getPassword] = useState("");
  let [error, getError] = useState("");

  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

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

  const handleError = (e) => {
    getError(e);

    setTimeout(() => {
      getError("");
    }, 3000);
  };

  useEffect(() => {
    return () => getError("");
  }, []);

  return (
    <div className="auth-container login-container">
      <div className="auth-item login-item">
        <h2 className="auth-title-primary login-title-primary">
          Enter BookSculpt, where your literary sanctuary awaits.
        </h2>
        <img src={LoginImage} alt="login-image" />
      </div>

      <div className="auth-item login-item">
        <h2 className="auth-title-secondary login-title-secondary"> Login </h2>

        {error && <span className="auth-error"> {error} </span>}

        <form className="auth-form login-form" onSubmit={(e) => loginUser(e)}>
          <div className="form-item">
            <label htmlFor="email"> Email </label>
            <input
              type="text"
              value={email}
              onChange={(e) => getEmail(e.target.value)}
            />
          </div>

          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => getPassword(e.target.value)}
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
