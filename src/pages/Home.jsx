import { SITE } from "../data/site.js";
import usePageTitle from "../hooks/usePageTitle.js";

export default function Home() {
  usePageTitle("SaloniPortfolio - Home");
  return (
    <section id="hero" className="hero section">
      <img src="/img/hero.webp" alt="" data-aos="fade-in" />
      <div className="container text-center" data-aos="zoom-out" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2>{SITE.fullName}</h2>
            <p>{SITE.tagline}</p>
            <a href={SITE.resumeUrl} target="_blank" rel="noreferrer" className="btn-get-started">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
