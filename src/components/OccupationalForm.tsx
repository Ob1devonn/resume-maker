interface Props {
  occupational: {
    company: string;
    title: string;
    date: string;
    details: string;
  };
}

const OccupationalForm = ({
  occupational: { company, title, date, details },
}: Props) => {
  return (
    <form className="form input-text">
      <h3>Experience</h3>
      <label htmlFor="company">Company</label>
      <input type="text" id="company" className="input" value={company} />
      <label htmlFor="title">Title</label>
      <input type="text" id="title" className="input" value={title} />
      <label htmlFor="date">Date</label>
      <input type="text" id="date" className="input" value={date} />
      <label htmlFor="details">Details</label>
      <input type="text" id="details" className="input" value={details} />
    </form>
  );
};

export default OccupationalForm;
