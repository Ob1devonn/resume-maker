import { ChangeEvent } from "react";
import { Occupational } from "../App";

interface Props {
  occupational: {
    company: string;
    title: string;
    date: string;
    details: string;
  };
  onUpdate: (newVal: Occupational) => void;
}

const OccupationalForm = ({ occupational, onUpdate }: Props) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    onUpdate({ ...occupational, [id]: value });
  };
  return (
    <form className="form input-text">
      <h3>Experience</h3>
      <label htmlFor="company">Company</label>
      <input
        type="text"
        id="company"
        className="input"
        value={occupational.company}
        onChange={handleInputChange}
      />
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        className="input"
        value={occupational.title}
        onChange={handleInputChange}
      />
      <label htmlFor="date">Date</label>
      <input
        type="text"
        id="date"
        className="input"
        value={occupational.date}
        onChange={handleInputChange}
      />
      <label htmlFor="details">Details</label>
      <input
        type="text"
        id="details"
        className="input"
        value={occupational.details}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default OccupationalForm;
