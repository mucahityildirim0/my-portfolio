import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi , <br />
          I'm
        </h1>
        <img src={LogoTitle} alt="developer" />
        lobodan
        <br />
        <h2>Frontend Developer / Javascript Expert / Youtuber</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
