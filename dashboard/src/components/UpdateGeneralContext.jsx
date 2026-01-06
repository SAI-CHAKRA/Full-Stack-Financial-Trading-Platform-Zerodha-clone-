import React, { useState } from "react";

import UpdateActionWindow from "./UpdateActionWindow";

const UpdateGeneralContext = React.createContext({
  openUpdateWindow: (uid) => {},
  closeUpdateWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isUpdateWindowOpen, setIsUpdateWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenUpdateWindow = (uid) => {
    setIsUpdateWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseUpdateWindow = () => {
    setIsUpdateWindowOpen(false);
    setSelectedStockUID("");
  };
 
  return (
    <UpdateGeneralContext.Provider
      value={{
        openUpdateWindow: handleOpenUpdateWindow,
        closeUpdateWindow: handleCloseUpdateWindow,
      }}
    >
      {props.children}
      {isUpdateWindowOpen && (<UpdateActionWindow uid={selectedStockUID} />)}
    </UpdateGeneralContext.Provider>
  );
};

export default UpdateGeneralContext;