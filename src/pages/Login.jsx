import LoginImage from "../assets/login-image.png";
import GoogleLogo from "../assets/google-logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-item">
        <h2 className="login-title-primary">
          Enter BookSculpt, where your literary sanctuary awaits.
        </h2>
        <img src={LoginImage} alt="login-image" />
      </div>

      <div className="login-item">
        <h2 className="login-title-secondary"> Login </h2>

        <form className="login-form">
          <div className="form-item">
            <label htmlFor="email"> Email </label>
            <input type="text" />
          </div>

          <div className="form-item">
            <label htmlFor="password"> Password </label>
            <input type="password" />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <button className="google-auth">
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
