export default function SkillBar({ name, value, animate }) {
  return (
    <div className="progress">
      <span className="skill">
        <span>{name}</span> <i className="val">{value}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: animate ? `${value}%` : 0 }}
        />
      </div>
    </div>
  );
}
