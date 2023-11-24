import { useState } from "react";
import Resume from "./components/Resume";
// personal: {
//   name: string;
//   email: string;
//   number: number;
//   address: string;
// };
// educational: {
//   schoolName: string;
//   study: string;
//   date: string;
//   details: string;
// };
// occupational: {
//   company: string;
//   title: string;
//   date: string;
//   details: string;
// };
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
        <form className="">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </form>
      </aside>
      <footer></footer>
    </div>
  );
};

export default App;
