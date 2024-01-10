import SignupImage from "../assets/signup-image.png";
import GoogleLogo from "../assets/google-logo.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="auth-container signup-container">
      <div className="auth-item signup-item">
        <h2 className="auth-title-primary signup-title-primary">
          Register Now for Seamless Management of Your Personal Library Haven.
        </h2>
        <img src={SignupImage} alt="signup-image" />
      </div>

      <div className="auth-item signup-item">
        <h2 className="auth-title-secondary signup-title-secondary">Signup</h2>

        <form className="auth-form signup-form">
          <div className="form-item">
            <label htmlFor="email"> Email </label>
            <input type="text" />
          </div>

          <div className="form-item">
            <label htmlFor="password"> Password </label>
            <input type="password" />
          </div>

          <button type="submit" className="auth-btn signup-btn">
            Signup
          </button>
        </form>

        <button className="auth-btn google-auth">
          <img src={GoogleLogo} alt="google-logo-svg" />
          Signup with Google
        </button>

        <p>
          Already have an account? <Link to="/"> Login </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
