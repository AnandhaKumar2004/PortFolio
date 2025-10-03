import "./index.css";

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="skill-bar">
      <div className="skill-header">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="bar">
        <div
          className="fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
