import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  return (
    <div>
      <div>
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm very ambitious front-end developer looking for a role in
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p align="LEFT">
          I'm quietly confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p>
          If I need to define myself in one sentence that would be a family
          person, father of a beautiful daughter, a sports fanatic, photography
          enthusiast, and tech-obsessed!!!
        </p>
      </div>
    </div>
  )
}

export default About
