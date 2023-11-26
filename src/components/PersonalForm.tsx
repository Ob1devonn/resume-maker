import { ChangeEvent } from "react";
import { Personal } from "../App";

interface Props {
  personal: {
    name: string;
    email: string;
    number: number;
    address: string;
  };
  onUpdate: (newVal: Personal) => void;
}

const PersonalForm = ({ personal, onUpdate }: Props) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    onUpdate({ ...personal, [id]: value });
  };
  return (
    <form className="form input-text">
      <h3>Personal</h3>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        className="input"
        value={personal.name}
        required
        onChange={handleInputChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        className="input"
        value={personal.email}
        required
        onChange={handleInputChange}
      />
      <label htmlFor="Number">Number</label>
      <input
        type="text"
        id="Number"
        className="input"
        value={personal.number}
        required
        onChange={handleInputChange}
      />
      <label htmlFor="Address">Address</label>
      <input
        type="text"
        id="Address"
        className="input"
        value={personal.address}
        required
        onChange={handleInputChange}
      />
    </form>
  );
};

export default PersonalForm;
