import { createContext, useState } from "react";

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

  return (
    <CvInfoContext.Provider value={{ cvInfo, setCvInfo }}>
      {children}
    </CvInfoContext.Provider>
  );
};
