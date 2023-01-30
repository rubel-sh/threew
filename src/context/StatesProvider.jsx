import React, { createContext, useState } from "react";

export const StatesContext = createContext();

const StatesProvider = ({ children }) => {
  const [selectCrypto, setSelectCrypto] = useState({});
  return (
    <StatesContext.Provider value={{ selectCrypto, setSelectCrypto }}>
      {children}
    </StatesContext.Provider>
  );
};

export default StatesProvider;
