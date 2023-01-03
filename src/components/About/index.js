import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hi! I am Ziyang Huang. I am a passionate, proactive and diligent
            software engineer. I am currently an University of Melbourne
            Master's student specialising in Computer Science. 2023 will be the
            last year of my master's degree.
          </p>

          <p>
            In 2023, I will be doing a research project in the university. My
            research interest encompasses machine learning and computer vision.
            In parallel to my academic project, I am proactively looking for an
            internship in the industry. I am open to explore various roles
            including but not limited to software engineer, machine learning
            engineer, devops, and I am looking forward to any challenges ahead
            and am extremely willing to uptake any new skillsets along the way.
          </p>

          <p>
            My skillsets include Css, Html, JavaScript, React, Java, Python,
            Pytorch, TensorFlow, OpenCV and so on. If you have any interest in
            contacting me for any research topic or internship opportunities,
            please reach out to me through the contact page :)
            <p>Looking forward to chat with you.</p>
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
