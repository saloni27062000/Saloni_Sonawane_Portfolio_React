import SectionTitle from "../components/SectionTitle.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import { RESUME } from "../data/profile.js";

function EducationItem({ item }) {
  return (
    <div className="resume-item">
      <h4>{item.title}</h4>
      <h5>{item.period}</h5>
      <p>
        <em>{item.place}</em>
      </p>
      <p>{item.text}</p>
    </div>
  );
}

function ExperienceItem({ item }) {
  return (
    <div className="resume-item">
      <h4>{item.title}</h4>
      <h5>{item.period}</h5>
      <p>
        <em>{item.place}</em>
      </p>
      <ul>
        {item.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Resume() {
  usePageTitle("SaloniPortfolio - Resume");
  const { summary, education, experience } = RESUME;

  return (
    <section id="resume" className="resume section">
      <SectionTitle title="Resume">Transforming ideas into impactful designs and seamless code.</SectionTitle>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>{summary.name}</h4>
              <p>
                <em>{summary.objective}</em>
              </p>
              <ul>
                {summary.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            {education.map((item) => (
              <EducationItem key={item.title} item={item} />
            ))}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            {experience.map((item) => (
              <ExperienceItem key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
