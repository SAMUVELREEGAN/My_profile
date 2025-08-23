import React from 'react'
import LearnHero from '../learnmore/component/LearnHero'
import Education from '../learnmore/component/Education'
import Resume from '../component/Resume'
import Certifications from "../../FreelanceAndDeveloper/component/Certifications"
import Contact from '../component/Contact'
import MyProject from '../learnmore/component/MyProject'

const LearnHome = () => {
  return (
    <div>
      <LearnHero />
      <div id='educations'>
      <Education />
      </div>

      <Resume />
          <Certifications />
      <MyProject />

    <Contact />
    </div>
  )
}

export default LearnHome