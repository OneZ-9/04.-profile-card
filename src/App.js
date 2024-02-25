import "./App.css";

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
      <Skill skill="HTML +CSS" imoji="💪" color="dodgerblue" />
      <Skill skill="JavaScript" imoji="👍" color="orangered" />
      <Skill skill="React" imoji="👶" color="yellow" />
      <Skill skill="Angular" imoji="👶" color="green" />
      <Skill skill="Git" imoji="💪" color="royalblue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.imoji}</span>
    </div>
  );
}

export default App;
