import React, { useContext, useReducer } from "react";
const ContextMenuContext = React.createContext();

const initialContextMenu = {
  id: 1
};

const reducerContextMenu = (state, action) => {
  debugger;
  switch (action) {
    case "dashboard":
      return { id: 1 };
    case "users":
      return { id: 2 };
    case "config":
      return { id: 3 };
    case "logout":
      return { id: 4 };
    case "reset":
      return { id: 1 };
    default:
      return state;
  }
};

export const ContextMenuProvider = ({ children }) => {
  const [contextMenuId, dispatch] = useReducer(
    reducerContextMenu,
    initialContextMenu
  );
  return (
    <ContextMenuContext.Provider
      value={{ contextMenuId: contextMenuId, contextMenuDispatch: dispatch }}
    >
      {children}
    </ContextMenuContext.Provider>
  );
};

export const useContextMenu = () => {
  const contextValue = useContext(ContextMenuContext);
  return contextValue;
};
