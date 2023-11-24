interface Props {
  personal: {
    name: string;
    email: string;
    number: number;
    address: string;
  };
}

const PersonalForm = ({
  personal: { name, email, number, address },
}: Props) => {
  return (
    <form className="form input-text">
      <h3>Personal</h3>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" className="input" value={name} required />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" className="input" value={email} required />
      <label htmlFor="Number">Number</label>
      <input
        type="text"
        id="Number"
        className="input"
        value={number}
        required
      />
      <label htmlFor="Address">Address</label>
      <input
        type="text"
        id="Address"
        className="input"
        value={address}
        required
      />
    </form>
  );
};

export default PersonalForm;
