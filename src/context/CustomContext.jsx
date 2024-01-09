import { createContext, useContext } from "react";

const CreateCustomContext = createContext();

const CustomContext = ({ children }) => {
  let contextValue = {};

  return (
    <CreateCustomContext.Provider value={contextValue}>
      {children}
    </CreateCustomContext.Provider>
  );
};

export const UseCustomContext = () => useContext(CreateCustomContext());

export default CustomContext;
