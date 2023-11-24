interface Props {
  educational: {
    schoolName: string;
    study: string;
    date: string;
    details: string;
  };
}

const EducationalForm = ({
  educational: { schoolName, study, date, details },
}: Props) => {
  return (
    <form className="form input-text">
      <h3>Education</h3>
      <label htmlFor="schoolName">Name of School</label>
      <input
        type="text"
        id="schoolName"
        className="input"
        value={schoolName}
        required
      />
      <label htmlFor="study">Field of Study</label>
      <input type="text" id="study" className="input" value={study} required />
      <label htmlFor="date">Date</label>
      <input type="text" id="date" className="input" value={date} required />
      <label htmlFor="details">Details</label>
      <input
        type="text"
        id="details"
        className="input"
        value={details}
        required
      />
    </form>
  );
};

export default EducationalForm;
