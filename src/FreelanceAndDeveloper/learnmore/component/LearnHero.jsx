import pic from '../../assets/2nd.jpg'
import NavSection1 from './NavSection1'
import "../css/LearnHero.css"

const LearnHero = () => {
  return (
    <div className="learn-hero">
      <NavSection1 />
      
      {/* Background Image */}
      <div className="hero-bg">
        <img src={pic} alt="Samuvel Reegan" />
        <div className="overlay"></div>
      </div>

      {/* Right Corner Text */}
      <div className="hero-content">
        <h1 className="hero-text">I’m <span>Developer</span></h1>
      </div>
    </div>
  )
}

export default LearnHero
