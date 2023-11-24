interface Props {
  personal: {
    name: string;
    email: string;
    number: number;
    address: string;
  };
  educational: {
    schoolName: string;
    study: string;
    date: string;
    details: string;
  };
  occupational: {
    company: string;
    title: string;
    date: string;
    details: string;
  };
}

export default function Resume({ personal, educational, occupational }: Props) {
  const name = personal.name ? <h2>{personal.name}</h2> : <h2>name</h2>;
  const email = personal.email ? (
    <p className="contact-combo">{personal.email}</p>
  ) : (
    <p className="contact-combo">Email</p>
  );

  const number = personal.number ? (
    <p className="contact-combo">{personal.number}</p>
  ) : (
    <p className="contact-combo">number</p>
  );

  const address = personal.address ? (
    <p className="contact-combo">{personal.address}</p>
  ) : (
    <p className="contact-combo">Address</p>
  );

  const schoolDate = educational.date ? (
    <time>{educational.date}</time>
  ) : (
    <time dateTime="2000-01-01">January 1, 2000</time>
  );
  const schoolName = educational.schoolName ? (
    <h4>{educational.schoolName}</h4>
  ) : (
    <h4>SchoolName</h4>
  );
  const degree = educational.study ? <p>{educational.study}</p> : <p>Degree</p>;
  const schoolDetails = educational.details ? (
    <p>{educational.details}</p>
  ) : (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
      dolorum omnis quidem voluptatem esse error, optio ea vitae tempore
      dolorem.
    </p>
  );
  const jobDate = occupational.date ? (
    <time>{occupational.date}</time>
  ) : (
    <time dateTime="2000-01-01">January 1, 2000</time>
  );

  const company = occupational.company ? (
    <h4>{occupational.company}</h4>
  ) : (
    <h4>Company</h4>
  );

  const title = occupational.title ? <p>{occupational.title}</p> : <p>Title</p>;

  const jobDetails = occupational.details ? (
    <p>{occupational.details}</p>
  ) : (
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur qui
      atque quae corrupti at ullam culpa soluta repudiandae, autem blanditiis!
    </p>
  );
  return (
    <div className="resume">
      <div className="header">
        {name}
        <div className="contact">
          {email}
          {number}
          {address}
        </div>
      </div>

      <div className="body-sec">
        <div className="sections">
          <h3>Education</h3>
          <div className="details">
            {schoolDate}
            <div>
              {schoolName}
              {degree}
            </div>
            {schoolDetails}
          </div>
        </div>
        <div className="sections">
          <h3>Experience</h3>

          <div className="details">
            {jobDate}
            <div className="title-subtitle">
              {company}
              {title}
            </div>
            {jobDetails}
          </div>
        </div>
      </div>
    </div>
  );
}
