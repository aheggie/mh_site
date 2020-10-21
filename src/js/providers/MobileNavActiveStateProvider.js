import React, { createContext, useState } from "react";

export const MobileNavContext = createContext();

function MobileNavActiveStateProvider({ children }) {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => setIsActive(!isActive);
  return (
    <MobileNavContext.Provider
      value={{ isActive: isActive, toggleActive: toggleActive }}
    >
      {children}
    </MobileNavContext.Provider>
  );
}

export default MobileNavActiveStateProvider;
