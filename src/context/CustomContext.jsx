import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/FireConfig";

const CreateCustomContext = createContext();

const CustomContext = ({ children }) => {
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState([]);

  const handleError = (errorMessage) => {
    setError(errorMessage);

    setTimeout(() => {
      setError("");
    }, 3000);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      setError("");
      unsubscribe();
    };
  }, []);

  let contextValue = { error, setError, handleError, currentUser };

  return (
    <CreateCustomContext.Provider value={contextValue}>
      {children}
    </CreateCustomContext.Provider>
  );
};

export const UseCustomContext = () => useContext(CreateCustomContext);

export default CustomContext;
