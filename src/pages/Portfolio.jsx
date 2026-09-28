import { useEffect, useMemo, useState } from "react";
import GLightbox from "glightbox";
import SectionTitle from "../components/SectionTitle.jsx";
import Masonry from "../components/Masonry.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import { CATEGORIES, PROJECTS } from "../data/projects.js";

function ProjectCard({ project: p }) {
  return (
    <div className="portfolio-item">
      <img
        src={p.image}
        className="img-fluid"
        alt={p.title}
        width={800}
        height={Math.round(800 * p.ratio)}
        loading="lazy"
      />
      <div className="portfolio-info">
        <h4>{p.title}</h4>
        <p>{p.description}</p>
        <a
          href={p.video || p.full}
          title={p.lightboxTitle}
          data-title={p.lightboxTitle}
          data-gallery={`portfolio-gallery-${p.category}`}
          className="glightbox preview-link"
        >
          <i className="bi bi-zoom-in" />
        </a>
        {p.link && (
          <a href={p.link} title="More Details" target="_blank" rel="noreferrer" className="details-link">
            <i className="bi bi-link-45deg" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
  usePageTitle("SaloniPortfolio - Portfolio");
  const [filter, setFilter] = useState("all");

  const visible = useMemo(
    () => (filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  // (Re)bind the lightbox whenever the visible set of cards changes.
  useEffect(() => {
    const lightbox = GLightbox({ selector: ".glightbox" });
    return () => lightbox.destroy();
  }, [visible]);

  return (
    <section id="portfolio" className="portfolio section">
      <SectionTitle title="Portfolio">A showcase of creativity and technical expertise in action.</SectionTitle>
      <div className="container">
        <div className="isotope-layout">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            {CATEGORIES.map((c) => (
              <li
                key={c.key}
                role="button"
                tabIndex={0}
                className={filter === c.key ? "filter-active" : undefined}
                onClick={() => setFilter(c.key)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setFilter(c.key)}
              >
                {c.label}
              </li>
            ))}
          </ul>
          <div data-aos="fade-up" data-aos-delay="200">
            <Masonry items={visible} renderItem={(p) => <ProjectCard key={p.id} project={p} />} />
          </div>
        </div>
      </div>
    </section>
  );
}
