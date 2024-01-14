import { createContext, useContext, useEffect, useState } from "react";

const CreateCustomContext = createContext();

const CustomContext = ({ children }) => {
  const [error, setError] = useState("");

  const handleError = (errorMessage) => {
    setError(errorMessage);

    setTimeout(() => {
      setError("");
    }, 3000);
  };

  useEffect(() => {
    return () => setError("");
  }, []);

  let contextValue = { error, setError, handleError };

  return (
    <CreateCustomContext.Provider value={contextValue}>
      {children}
    </CreateCustomContext.Provider>
  );
};

export const UseCustomContext = () => useContext(CreateCustomContext);

export default CustomContext;
