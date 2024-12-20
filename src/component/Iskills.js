import { Link } from 'react-router-dom';
import './style/Iskills.css';
const Iskills = () => {
  const list = [
    "Learn new recipies",
    "Experiment with food",
    "Know nutrition facts",
    "Get cooking Tips",
    "Get ranked"
  ]

  return (
    <div className="isSkill">
      <div className="section improve">
        <div className="col img">
          <img src="/images/gallery/4.jpg" alt="" />
        </div>
        <div className="col space">
          <h1 className="title">Improve Your Culinary Skills</h1>
          {
            list.map((item, index) => (
              <p className="skill-item" key={index}>{item}</p>
            ))
          }
          <button className="btn"><Link to="/signup">Signup Now</Link></button>

        </div>
      </div>
    </div>
  )
}
export default Iskills
