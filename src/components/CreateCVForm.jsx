import { useContext, useState } from "react";
import { CvInfoContext } from "../context/CvInfoProvider";
import { initialInfoState, initialSkillsSetState, initialWorkExpState } from "../utils/initialStates";

const CreateCVForm = ({ onCreate }) => {
    const { cvInfo, setCvInfo } = useContext(CvInfoContext);
    const [workExperience, setWorkExperience] = useState(initialWorkExpState);
    const [skillsSet, setSkillsSet] = useState(initialSkillsSetState);
    const [certificationName, setCertificationName] = useState("");
    const [isSavingForLater, setIsSavingForLater] = useState(false);

    const handleSavingForLaterCheck = () => {
        setIsSavingForLater(!isSavingForLater);
    };

    const handleOnChange = (e) => {
        setCvInfo({
            ...cvInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnExperienceChange = (e) => {
        setWorkExperience({
            ...workExperience,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddExperience = () => {
        setCvInfo({
            ...cvInfo,
            workExperiences: [...cvInfo.workExperiences, workExperience],
        });
        setWorkExperience(initialWorkExpState);
    };

    const handleAddSkills = () => {
        setCvInfo({
            ...cvInfo,
            skills: [...cvInfo.skills, skillsSet],
        });
        setSkillsSet(initialSkillsSetState);
    };

    const handleAddCertification = () => {
        setCvInfo({
            ...cvInfo,
            certifications: [...cvInfo.certifications, certificationName],
        });
        setCertificationName("");
    };

    const handleOnSkillsChange = (e) => {
        setSkillsSet({
            ...skillsSet,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnCertificationNameChange = (e) => {
        setCertificationName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("cvInfo", JSON.stringify(cvInfo));
        onCreate();
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (progresEvent) => {
            setCvInfo({
                ...cvInfo,
                photo: progresEvent.target.result,
            });
        };
        reader.readAsDataURL(file);
    };

    const handleDegreeChange = (e) => {
      setCvInfo({
        ...cvInfo,
        education: {
          ...cvInfo.education,
          [e.target.name]: e.target.value
        }
      })
    }

    const handleReset = () => {
        setCvInfo(initialInfoState)
        setWorkExperience(initialWorkExpState)
        setSkillsSet(initialSkillsSetState)
        localStorage.removeItem("cvInfo")
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add your info</h2>
            <h3>Personal Info</h3>
            <section>
                <article>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={cvInfo.email}
                        onChange={handleOnChange}
                        name="email"
                    />
                </article>
                <article>
                    <label htmlFor="firstName">First name</label>
                    <input
                        id="firstName"
                        type="text"
                        value={cvInfo.firstName}
                        onChange={handleOnChange}
                        name="firstName"
                    />
                </article>
                <article>
                    <label htmlFor="surname">Surname</label>
                    <input
                        id="surname"
                        type="text"
                        value={cvInfo.surname}
                        onChange={handleOnChange}
                        name="surname"
                    />
                </article>
                <article>
                    <label htmlFor="lastName">Last name</label>
                    <input
                        id="lastName"
                        type="text"
                        value={cvInfo.lastName}
                        onChange={handleOnChange}
                        name="lastName"
                    />
                </article>
                <article>
                    <label htmlFor="profession">Profession</label>
                    <input
                        id="profession"
                        type="text"
                        value={cvInfo.profession}
                        onChange={handleOnChange}
                        name="profession"
                    />
                </article>
                <article>
                    <label htmlFor="phone">Phone</label>
                    <input
                        id="phone"
                        type="text"
                        value={cvInfo.phone}
                        onChange={handleOnChange}
                        name="phone"
                    />
                </article>
                <article>
                    <label htmlFor="address">Address</label>
                    <input
                        id="address"
                        type="text"
                        value={cvInfo.address}
                        onChange={handleOnChange}
                        name="address"
                    />
                </article>
            </section>
            <h3>Photo</h3>
            <section>
                <article>
                    <label htmlFor="photo">Upload photo</label>
                    <input
                        id="photo"
                        type="file"
                        onChange={handlePhotoUpload}
                    />
                </article>
            </section>
            <h3>Work experience</h3>
            <section>
                <article>
                    {cvInfo.workExperiences.map((we) => (
                        <article key={we.from}>
                            <p>{we.position}</p>
                            <p>{we.companyName}</p>
                            <p>{we.from}</p>
                            <p>{we.to}</p>
                            <p>{we.description}</p>
                        </article>
                    ))}
                </article>
                <article>
                    <label htmlFor="position">Position</label>
                    <input
                        id="position"
                        type="text"
                        value={workExperience.position}
                        onChange={handleOnExperienceChange}
                        name="position"
                    />
                </article>
                <article>
                    <label htmlFor="companyName">Company name</label>
                    <input
                        id="companyName"
                        type="text"
                        value={workExperience.companyName}
                        onChange={handleOnExperienceChange}
                        name="companyName"
                    />
                </article>
                <article>
                    <label htmlFor="from">From</label>
                    <input
                        id="from"
                        type="date"
                        value={workExperience.from}
                        onChange={handleOnExperienceChange}
                        name="from"
                    />
                </article>
                <article>
                    <label htmlFor="to">To</label>
                    <input
                        id="to"
                        type="date"
                        value={workExperience.to}
                        onChange={handleOnExperienceChange}
                        name="to"
                    />
                </article>
                <article>
                    <label htmlFor="description">Description</label>
                    <input
                        id="description"
                        type="text"
                        value={workExperience.description}
                        onChange={handleOnExperienceChange}
                        name="description"
                    />
                </article>
                <article>
                    <button type="button" onClick={handleAddExperience}>
                        Add work experience
                    </button>
                </article>
            </section>
            <h3>Education</h3>
            <section>
                <article>
                    <label htmlFor="degreeDescription">
                        Degree description
                    </label>
                    <input
                        type="text"
                        id="degreeDescription"
                        name="degreeDescription"
                        value={cvInfo?.education?.degreeDescription}
                        onChange={handleDegreeChange}
                    />
                </article>
                <article>
                    <label htmlFor="degreeDescription">
                        University
                    </label>
                    <input
                        type="text"
                        id="university"
                        name="university"
                        value={cvInfo?.education?.university}
                        onChange={handleDegreeChange}
                    />
                </article>
                <article>
                    <label htmlFor="degreeFrom">
                        From
                    </label>
                    <input
                        type="date"
                        id="degreeFrom"
                        name="degreeFrom"
                        value={cvInfo?.education?.degreeFrom}
                        onChange={handleDegreeChange}
                    />
                </article>
                <article>
                    <label htmlFor="degreeTo">
                        To
                    </label>
                    <input
                        type="date"
                        id="degreeTo"
                        name="degreeTo"
                        value={cvInfo?.education?.degreeTo}
                        onChange={handleDegreeChange}
                    />
                </article>
            </section>
            <h3>Skills</h3>
            <section>
                <article>
                    {cvInfo.skills.map((s) => (
                        <article key={s.skillSetName}>
                            <p>{s.skillSetName}</p>
                            <p>{s.skillsSet}</p>
                        </article>
                    ))}
                </article>
                <article>
                    <label htmlFor="skillSetName">Skill set name</label>
                    <input
                        id="skillSetName"
                        type="text"
                        value={skillsSet.skillSetName}
                        onChange={handleOnSkillsChange}
                        name="skillSetName"
                    />
                </article>
                <article>
                    <label htmlFor="skillsSet">Skills</label>
                    <input
                        id="skillsSet"
                        type="text"
                        value={skillsSet.skillsSet}
                        onChange={handleOnSkillsChange}
                        name="skillsSet"
                    />
                </article>
                <article>
                    <button type="button" onClick={handleAddSkills}>
                        Add skills
                    </button>
                </article>
            </section>
            <h3>Certifications</h3>
            <section>
                {cvInfo.certifications.map((s) => (
                    <article key={s}>
                        <p>{s}</p>
                    </article>
                ))}
                <article>
                    <label htmlFor="certificate">Certification name</label>
                    <input
                        id="certificate"
                        type="text"
                        value={certificationName}
                        onChange={handleOnCertificationNameChange}
                    />
                </article>
                <article>
                    <button type="button" onClick={handleAddCertification}>
                        Add certification
                    </button>
                </article>
            </section>
            <h3>About me</h3>
            <section>
                <article>
                    <label htmlFor="aboutMe">About me short description</label>
                    <input id="aboutMe" type="text" value={cvInfo.aboutMe} name="aboutMe" onChange={handleOnChange} />
                </article>
            </section>
            <section>
                <article>
                    <input
                        type="checkbox"
                        checked={isSavingForLater}
                        onChange={handleSavingForLaterCheck}
                    />
                    Save for next time
                </article>
                <button type="submit">Create CV</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </section>
        </form>
    );
};

export default CreateCVForm;
