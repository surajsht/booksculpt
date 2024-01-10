import LoginImage from "../assets/login-image.png";
import GoogleLogo from "../assets/google-logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
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

        <form className="auth-form login-form">
          <div className="form-item">
            <label htmlFor="email"> Email </label>
            <input type="text" />
          </div>

          <div className="form-item">
            <label htmlFor="password"> Password </label>
            <input type="password" />
          </div>

          <button type="submit" className="auth-btn login-btn">
            Login
          </button>
        </form>

        <button className="auth-btn google-auth">
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
