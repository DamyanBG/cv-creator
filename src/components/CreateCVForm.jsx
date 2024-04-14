const CreateCVForm = () => {
  return (
    <form action="">
      <h2>Add your info</h2>
      <h3>Personal Info</h3>
      <section>
        <article>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
            />
        </article>
        <article>
            <label htmlFor="firstName">First name</label>
            <input
                id="firstName"
                type="text"
            />
        </article>
        <article>
            <label htmlFor="surname">Surname</label>
            <input
                id="surname"
                type="text"
            />
        </article>
        <article>
            <label htmlFor="lastName">Last name</label>
            <input
                id="lastName"
                type="text"
            />
        </article>
        <article>
            <label htmlFor="profession">Profession</label>
            <input
                id="profession"
                type="text"
            />
        </article>
        <article>
            <label htmlFor="phone">Phone</label>
            <input
                id="phone"
                type="text"
            />
        </article>
        <article>
            <label htmlFor="address">Address</label>
            <input
                id="address"
                type="text"
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
            />
        </article>
      </section>
      <h3>Work experience</h3>
      <section>
        <article>
            <label htmlFor="position">Position</label>
            <input
                id="position"
                type="text"
            />
        </article>
        <article>
            <label htmlFor="companyName">Company name</label>
            <input
                id="companyName"
                type="text"
            />
        </article>
        <article>
            <label htmlFor="from">From</label>
            <input
                id="from"
                type="date"
            />
        </article>
        <article>
            <label htmlFor="to">To</label>
            <input
                id="to"
                type="date"
            />
        </article>
        <article>
            <label htmlFor="description">Description</label>
            <input
                id="description"
                type="text"
            />
        </article>
      </section>
      <h3>Skills</h3>
      <section>
        <article>
            <label htmlFor="skillSetName">Skill set name</label>
            <input
                id="skillSetName"
                type="text"
            />
        </article>
        <article>
            <label htmlFor="skillsSet">Skills</label>
            <input
                id="skillsSet"
                type="text"
            />
        </article>
      </section>
      <h3>Certifications</h3>
      <section>
        <article>
            <label htmlFor="certificate">Certification name</label>
            <input
                id="certificate"
                type="text"
            />
        </article>
      </section>
      <h3>About me</h3>
      <section>
        <article>
            <label htmlFor="aboutMe">About me short description</label>
            <input
                id="aboutMe"
                type="text"
            />
        </article>
      </section>
    </form>
  );
};

export default CreateCVForm;
