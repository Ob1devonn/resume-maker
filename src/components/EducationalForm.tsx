import { ChangeEvent } from "react";
import { Educational } from "../App";

interface Props {
  educational: {
    schoolName: string;
    study: string;
    date: string;
    details: string;
  };
  onUpdate: (newVal: Educational) => void;
}

const EducationalForm = ({ educational, onUpdate }: Props) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    onUpdate({ ...educational, [id]: value });
  };
  return (
    <form className="form input-text">
      <h3>Education</h3>
      <label htmlFor="schoolName">Name of School</label>
      <input
        type="text"
        id="schoolName"
        className="input"
        value={educational.schoolName}
        required
        onChange={handleInputChange}
      />
      <label htmlFor="study">Field of Study</label>
      <input
        type="text"
        id="study"
        className="input"
        value={educational.study}
        required
        onChange={handleInputChange}
      />
      <label htmlFor="date">Date</label>
      <input
        type="text"
        id="date"
        className="input"
        value={educational.date}
        required
        onChange={handleInputChange}
      />
      <label htmlFor="details">Details</label>
      <input
        type="text"
        id="details"
        className="input"
        value={educational.details}
        required
        onChange={handleInputChange}
      />
    </form>
  );
};

export default EducationalForm;
