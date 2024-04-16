import { createContext, useEffect, useState } from "react";
import { initialInfoState } from "../utils/initialStates";

export const CvInfoContext = createContext(initialInfoState);

export const CvInfoProvider = ({ children }) => {
  const [cvInfo, setCvInfo] = useState(initialInfoState);

  useEffect(() => {
    const storedInfo = localStorage.getItem("cvInfo")
    if (storedInfo) setCvInfo(JSON.parse(storedInfo))
  }, [])

  return (
    <CvInfoContext.Provider value={{ cvInfo, setCvInfo }}>
      {children}
    </CvInfoContext.Provider>
  );
};
