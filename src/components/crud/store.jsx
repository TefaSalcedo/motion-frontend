import React from "react";
import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [showActions, setShowActions] = useState(true);
  const [refreshTable, setRefreshTable] = useState(() => () => {});
  const [activate,setActivate]=useState(false)
  

  return (
    <StoreContext.Provider value={{ selectedId, setSelectedId,showActions, setShowActions, refreshTable, setRefreshTable, activate,setActivate }}>
      {children}
    </StoreContext.Provider>
  );
};