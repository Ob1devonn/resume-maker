import { useState } from "react";
import Resume from "./components/Resume";
import PersonalForm from "./components/PersonalForm";
import EducationalForm from "./components/EducationalForm";
import OccupationalForm from "./components/OccupationalForm";

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
        <PersonalForm personal={personal} />
        <EducationalForm educational={educational} />
        <OccupationalForm occupational={occupational} />
      </aside>
      <footer></footer>
    </div>
  );
};

export default App;
