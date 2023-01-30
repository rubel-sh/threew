import React, { createContext, useState } from "react";

export const StatesContext = createContext();

const StatesProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [selectCrypto, setSelectCrypto] = useState({});
  return (
    <StatesContext.Provider
      value={{ selectCrypto, setSelectCrypto, modal, setModal }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export default StatesProvider;
