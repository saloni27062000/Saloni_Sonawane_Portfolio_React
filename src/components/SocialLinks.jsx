import { SOCIALS } from "../data/site.js";

export default function SocialLinks({ className }) {
  return (
    <div className={className}>
      {SOCIALS.map((s) => (
        <a key={s.icon} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
          <i className={`bi ${s.icon}`} />
        </a>
      ))}
    </div>
  );
}
