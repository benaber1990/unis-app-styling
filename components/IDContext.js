import React, { createContext, useContext, useState } from "react";

// Create the UserContext
const IDContext = createContext();

// Create a provider component to manage the user state
export const UsernameProvider = ({ children }) => {
  const [usernameID, setUsernameID] = useState("");

  // Function to set the user UID
  const setUID = (uid) => {
    setUsernameID(uid);
  };

  return (
    <IDContext.Provider value={{ usernameID, setUID }}>
      {children}
    </IDContext.Provider>
  );
};

// Create a custom hook for using the user context
export const useUser = () => {
  return useContext(IDContext);
};
