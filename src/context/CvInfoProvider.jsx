import { createContext, useEffect, useState } from "react";

export const CvInfoContext = createContext(null);

const initialInfoState = {
  email: "",
  firstName: "",
  surname: "",
  lastName: "",
  profession: "",
  phone: "",
  address: "",
  photo: "",
  workExperiences: [],
  skills: [],
  certifications: [],
  aboutMe: "",
};

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
