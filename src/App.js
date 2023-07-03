import logo from './logo.svg';
import './App.css';


const skills = [
  {
    skill: "Artificial Intelligence",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "Machine Learning",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Deep Learning",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Python",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "Java",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Javascript",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App(){
 return(
<div className="card">
  <Avatar/>
  <div className="data">
    <Intro/>
    <SkillList/>
  </div>


</div>
 );
}
function Avatar(){
  return <img className="avatar" src="picture/new.jpg" width="150px" height="250px" alt="img is not work" />
}
function Intro(){
  return(
    <div>
       <h1>Azeem Aslam</h1>
 <b> <p>Hi, I am Azeem Aslam from KMCL UNIVERSITY. I Persuing my B Tech from KMCLU and I am currently doing my internship at Sidzifi.
I believe that my experience in the field of coding will be a great addition . I will be able to assist you with any project related to this field and also provide support in solving any technical issues that might arise during working on your project.
I look forward to hearing from you soon!
      </p></b>
      </div>
 
      )

}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>

  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}


export default App;
