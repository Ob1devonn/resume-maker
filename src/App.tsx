import { useState } from "react";
import Resume from "./components/Resume";

const App = () => {
  const [personal, setPersonal] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    number: 1234567891,
    address: "123 Main st. Denver, Co. 80222",
  });
  const [educational, setEducational] = useState({
    schoolName: "Stuff",
    study: "Stuff",
    date: "Stuff",
    details: "Stuff",
  });

  const [occupational, setOccupational] = useState({
    company: "CorpCo",
    title: "Lead",
    date: "3/10/20",
    details:
      "Did some stuff, along with other stuff, that was required for the job",
  });

  return (
    <div className="container">
      <main>
        <Resume
          personal={personal}
          educational={educational}
          occupational={occupational}
        />
      </main>
      <aside>
        <form className="form input-text">
          <h3>Personal</h3>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="input" required />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" className="input" required />
          <label htmlFor="Number">Number</label>
          <input type="text" id="Number" className="input" required />
          <label htmlFor="Address">Address</label>
          <input type="text" id="Address" className="input" required />
        </form>
        <form className="form input-text">
          <h3>Education</h3>
          <label htmlFor="School">School Name</label>
          <input type="text" id="School" className="input" required />
          <label htmlFor="study">Field Studied</label>
          <input type="text" id="study" className="input" required />
          <label htmlFor="date">Date</label>
          <input type="text" id="date" className="input" required />
          <label htmlFor="details">Details</label>
          <input type="text" id="details" className="input" />
        </form>
        <form className="form input-text">
          <h3>Experience</h3>
          <label htmlFor="company">Company</label>
          <input type="text" id="company" className="input" />
          <label htmlFor="title">Title</label>
          <input type="text" id="title" className="input" />
          <label htmlFor="date">Date</label>
          <input type="text" id="date" className="input" />
          <label htmlFor="details">Details</label>
          <input type="text" id="details" className="input" />
        </form>
      </aside>
      <footer></footer>
    </div>
  );
};

export default App;
