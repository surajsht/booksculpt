import SignupImage from "../assets/signup-image.png";
import GoogleLogo from "../assets/google-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../firebase/FireConfig";
import { useState } from "react";
import { UseCustomContext } from "../context/CustomContext";
import { setDoc, doc } from "firebase/firestore";

const Signup = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const { error, handleError } = UseCustomContext();

  const signupUser = async (e) => {
    e.preventDefault();

    if (name === "" && email && password) {
      handleError("Error: Name missing");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: `${name}`,
      });
      await setDoc(doc(db, "users", email), {
        savedBooks: [],
      });
      navigate("/profile");
    } catch (e) {
      handleError(e.message);
    }
  };

  const signupWithGoogle = async () => {
    try {
      const googleAuth = await signInWithPopup(auth, provider);
      await setDoc(doc(db, "users", googleAuth.user.email), {
        savedBooks: [],
      });
      navigate("/profile");
    } catch (e) {
      handleError(e.message);
    }
  };

  return (
    <div className="auth-container signup-container">
      <div className="auth-item">
        <h2 className="auth-title-primary signup-title-primary">
          Register for Effortless Library Management.
        </h2>
        <img src={SignupImage} alt="signup-image" />
      </div>

      <div className="auth-item">
        <h2 className="auth-title-secondary">Signup </h2>

        {error && <span className="auth-error"> {error} </span>}

        <form className="auth-form" onSubmit={(e) => signupUser(e)}>
          <div className="form-item">
            <label htmlFor="email"> Name </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-item">
            <label htmlFor="email"> Email </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-item">
            <label htmlFor="password"> Password </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="auth-btn">
            Signup
          </button>
        </form>

        <button className="auth-btn google-auth" onClick={signupWithGoogle}>
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
