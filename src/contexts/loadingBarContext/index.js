import React, { useContext, useReducer } from "react";
const LoadingBarContext = React.createContext();

const initialLoadingBar = {
  isActive: false
};

const reducerLoadingBar = (state, action) => {
  debugger;
  switch (action) {
    case "active":
      return { isActive: true };
    case "disable":
      return { isActive: false };
    case "reset":
      return { isActive: false };
    default:
      return state;
  }
};

export const LoadingBarProvider = ({ children }) => {
  const [loading, dispatch] = useReducer(reducerLoadingBar, initialLoadingBar);
  return (
    <LoadingBarContext.Provider
      value={{ loadingStatus: loading, loadingDispatch: dispatch }}
    >
      {children}
    </LoadingBarContext.Provider>
  );
};

export const useLoadingBar = () => {
  const contextValue = useContext(LoadingBarContext);
  return contextValue;
};
