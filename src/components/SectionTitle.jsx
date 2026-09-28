export default function SectionTitle({ title, children }) {
  return (
    <div className="container section-title" data-aos="fade-up">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
