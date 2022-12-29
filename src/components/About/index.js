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
            A purely peer-to-peer version of electronic cash would allow online
            payments to be sent directly from one party to another without going
            through a financial institution. Digital signatures provide part of
            the solution, but the main benefits are lost if a trusted third
            party is still required to prevent double-spending.
          </p>

          <p>
            We propose a solution to the double-spending problem using a
            peer-to-peer network. The network timestamps transactions by hashing
            them into an ongoing chain of hash-based proof-of-work, forming a
            record that cannot be changed without redoing the proof-of-work. The
            longest chain not only serves as proof of the sequence of events
            witnessed, but proof that it came from the largest pool of CPU
            power. As long as a majority of CPU power is controlled by nodes
            that are not cooperating to attack the network, they'll generate the
            longest chain and outpace attackers.
          </p>

          <p>
            The network itself requires minimal structure. Messages are
            broadcast on a best effort basis, and nodes can leave and rejoin the
            network at will, accepting the longest proof-of-work chain as proof
            of what happened while they were gone.
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
