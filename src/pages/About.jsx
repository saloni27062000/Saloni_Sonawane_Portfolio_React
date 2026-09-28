import SectionTitle from "../components/SectionTitle.jsx";
import SkillBar from "../components/SkillBar.jsx";
import useInView from "../hooks/useInView.js";
import usePageTitle from "../hooks/usePageTitle.js";
import { ABOUT_DETAILS, ABOUT_TEXT, SKILLS } from "../data/profile.js";

function DetailList({ rows }) {
  return (
    <ul>
      {rows.map(([label, value]) => (
        <li key={label}>
          <i className="bi bi-chevron-right" /> <strong>{label}:</strong> <span>{value}</span>
        </li>
      ))}
    </ul>
  );
}

export default function About() {
  usePageTitle("SaloniPortfolio - About");
  const [skillsRef, skillsInView] = useInView();

  return (
    <>
      <section id="about" className="about section">
        <SectionTitle title="About">Crafting seamless digital experiences with code and creativity.</SectionTitle>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="/img/about.webp" className="img-fluid" alt="Saloni Sonawane" />
            </div>
            <div className="col-lg-8 content">
              <h2>Web Designer &amp; Developer</h2>
              <br />
              <div className="row">
                <div className="col-lg-6">
                  <DetailList rows={ABOUT_DETAILS.left} />
                </div>
                <div className="col-lg-6">
                  <DetailList rows={ABOUT_DETAILS.right} />
                </div>
              </div>
              {ABOUT_TEXT.map((para, i) => (
                <p key={i} className="py-3" style={{ textAlign: "justify" }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills section">
        <SectionTitle title="Skills">Building responsive and engaging user experiences.</SectionTitle>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation" ref={skillsRef}>
            <div className="col-lg-6">
              {SKILLS.left.map((s) => (
                <SkillBar key={s.name} {...s} animate={skillsInView} />
              ))}
            </div>
            <div className="col-lg-6">
              {SKILLS.right.map((s) => (
                <SkillBar key={s.name} {...s} animate={skillsInView} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
