import { usePosition } from "use-position";
import React, { createContext } from "react";

export const GeoContext = createContext();

export const GeoContextProvider = (props) => {
  const { latitude, longitude } = usePosition();
  return (
    <GeoContext.Provider value={{ latitude, longitude }}>
      {props.children}
    </GeoContext.Provider>
  );
};
