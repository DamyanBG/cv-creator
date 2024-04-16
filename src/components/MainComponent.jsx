import { useContext, useState } from "react";
import CreateCVForm from "./CreateCVForm";
import { CvInfoContext } from "../context/CvInfoProvider";

const MainComponent = () => {
    const { cvInfo } = useContext(CvInfoContext);
    const [showCv, setShowCv] = useState(false);

    const handleCreateCv = () => {
        setShowCv(true);
    };

    return (
        <>
            <CreateCVForm onCreate={handleCreateCv} />
            <pagebreak></pagebreak>
            {showCv && (
                <section className="cvMain">
                    <section className="left">
                        <section className="names">
                            <h1>
                                {cvInfo.firstName} {cvInfo.lastName}
                            </h1>
                            <article>{cvInfo.profession}</article>
                        </section>
                        <section className="workExperience">
                            <h3>Work Experience</h3>
                            <article>
                                {cvInfo.workExperiences.map((we) => (
                                    <article key={we.from} className="experienceBlock">
                                        <article>
                                            <article>{we.position}</article>
                                            <article className="lineContainer">
                                                <article className="line"/>
                                            </article>
                                            <article>{we.from}</article>
                                            <article>-</article>
                                            <article>{we.to}</article>
                                        </article>
                                        <p className="companyName">{we.companyName}</p>
                                        <p>{we.description}</p>
                                    </article>
                                ))}
                            </article>
                        </section>
                        <section className="education">
                            <h3>Education</h3>
                            <p>{cvInfo.education.degreeDescription}</p>
                            <p>{cvInfo.education.university}</p>
                            <p>{cvInfo.education.degreeFrom} - {cvInfo.education.degreeTo}</p>
                        </section>
                        <section className="skills">
                            <h3>Skills</h3>
                            <article>
                                {cvInfo.skills.map((s) => (
                                    <article key={s.skillSet}>
                                        <article>{s.skillSetName}</article>
                                        <article className="lineContainer">
                                            <article className="line" />
                                        </article>
                                        <article>{s.skillsSet}</article>
                                    </article>
                                ))}
                            </article>
                        </section>
                    </section>
                    <section className="right">
                        <article className="photoContainer">
                            <img src={cvInfo.photo} alt="CV Photo" />
                        </article>
                        <article className="aboutMe">
                            <h3>About me</h3>
                            <p>{cvInfo.aboutMe}</p>
                        </article>
                        <section className="contactInfo">
                            <h3>Contact Info</h3>
                            {cvInfo.address && (
                                <article>
                                    <p>Address:</p>
                                    <p>{cvInfo.address}</p>
                                </article>
                            )}
                            {cvInfo.email && (
                                <article>
                                    <p>Email:</p>
                                    <p>{cvInfo.email}</p>
                                </article>
                            )}
                            {cvInfo.phone && (
                                <article>
                                    <p>Phone number:</p>
                                    <p>{cvInfo.phone}</p>
                                </article>
                            )}
                        </section>
                        <section className="certifications">
                            <h3>Certifications</h3>
                            {cvInfo.certifications.map((cert) => (
                                <p key={cert}>{cert}</p>
                            ))}
                        </section>
                        <section className="achievements">
                            <h3>Achievements</h3>
                            <p>Stack Overflow reputation: 350 </p>
                            <p>Microsoft Azure documentation contributor</p>
                        </section>
                    </section>
                </section>
            )}
        </>
    );
};

export default MainComponent;
