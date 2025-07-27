import { MyContext } from "../context/MyContext";
import "../../FreelanceAndDeveloper/css/component/TechStack.css";
import { useContext } from "react";

const TechStack = () => {
  const { techstackdata } = useContext(MyContext);

  return (
    <section className="techstack-container">
      <h2 className="techstack-title">My Tech Stack</h2>
      <div className="techstack-grid">
        {techstackdata.map((item , i) => (
          <div key={item.id} className="stack-card" data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="stack-icon">{item.icon}</div>
            <h3>{item.category}</h3>
            <p>{item.tools}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
