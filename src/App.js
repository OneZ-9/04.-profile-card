import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Bio />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="profile-img/chamod.jpg"
      alt="display picture"
      className="avatar"
    />
  );
}

function Bio() {
  return (
    <div>
      <h1>Chamod Tharuka</h1>
      <p>
        Dedicated and results-driven professional with 2.5+ years of experience
        in IT project coordination within the software industry. Seeking to
        leverage proven project management skills in a challenging role as a
        Project Coordinator. I aim to contribute my knowledge and experience to
        IT project teams, fostering success and simultaneously seeking
        opportunities to enhance my career growth through valuable experiences
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "advanced" && "💪"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "beginner" && "👶"}
      </span>
    </div>
  );
}

export default App;
