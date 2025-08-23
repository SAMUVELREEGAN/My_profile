import { useEffect } from 'react';
import './App.css';
import FreelanceAndDeveloper from './FreelanceAndDeveloper/routes/FreelanceAndDeveloper';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900, // animation duration in ms
      once: true,     // only animate once
      offset: 120,    // offset (in px) from the original trigger point
    });
  }, []);

  return (
    <div className="App">
      {/* Hidden SEO H1 */}
        <h1 className="sr-only">Samuvel Reegan – Full Stack Developer</h1>
      
      <FreelanceAndDeveloper />
    </div>
  );
}

export default App;
