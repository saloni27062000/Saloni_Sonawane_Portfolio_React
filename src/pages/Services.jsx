import SectionTitle from "../components/SectionTitle.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import { SERVICES } from "../data/services.js";

export default function Services() {
  usePageTitle("SaloniPortfolio - Services");

  return (
    <section id="services" className="services section">
      <SectionTitle title="Services">Crafting seamless digital experiences with code and creativity.</SectionTitle>
      <div className="container">
        <div className="row gy-4">
          {SERVICES.map((s, i) => (
            <div key={s.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
              <div className={`service-item ${s.theme} position-relative`}>
                <div className="icon">
                  <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="none" strokeWidth="0" fill="#f5f5f5" d={s.blob} />
                  </svg>
                  <i className={`bi ${s.icon}`} />
                </div>
                <a href="#" className="stretched-link" onClick={(e) => e.preventDefault()}>
                  <h3>{s.title}</h3>
                </a>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
