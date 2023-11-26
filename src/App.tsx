import { SetStateAction, useState } from "react";
import Resume from "./components/Resume";
import PersonalForm from "./components/PersonalForm";
import EducationalForm from "./components/EducationalForm";
import OccupationalForm from "./components/OccupationalForm";

export interface Personal {
  name: string;
  email: string;
  number: number;
  address: string;
}
export interface Educational {
  schoolName: string;
  study: string;
  date: string;
  details: string;
}
export interface Occupational {
  company: string;
  title: string;
  date: string;
  details: string;
}

const App = () => {
  const [personal, setPersonal] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    number: 1234567891,
    address: "123 Main st. Denver, Co. 80222",
  });

  const handlePersonal = (newVal: SetStateAction<Personal>) => {
    setPersonal(newVal);
  };

  const [educational, setEducational] = useState({
    schoolName: "Stuff",
    study: "Stuff",
    date: "Stuff",
    details: "Stuff",
  });
  const handleEducational = (newVal: SetStateAction<Educational>) => {
    setEducational(newVal);
  };

  const [occupational, setOccupational] = useState({
    company: "CorpCo",
    title: "Lead",
    date: "3/10/20",
    details:
      "Did some stuff, along with other stuff, that was required for the job",
  });

  const handleOccupational = (newVal: SetStateAction<Occupational>) => {
    setOccupational(newVal);
  };

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
        <PersonalForm personal={personal} onUpdate={handlePersonal} />

        <EducationalForm
          educational={educational}
          onUpdate={handleEducational}
        />
        <OccupationalForm
          occupational={occupational}
          onUpdate={handleOccupational}
        />
      </aside>
      <footer>
        <p>Created by DeVonn Cluse</p>
      </footer>
    </div>
  );
};

export default App;
