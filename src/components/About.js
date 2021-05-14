import React from 'react'
import { Link } from 'react-router-dom'
import picture from '../assets/picture.png'

const About = () => {
  return (
    <section className="section pb-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6" data-aos="fade-up">
            <h2>About Me</h2>
            <div className="columns">
              <div className="column is-one-third mb-5 mb-md-0" data-aos="fade-up">
                <img src={picture} alt="Imageofme" />
                <div>
                  <Link to="https://github.com/jacquelinedeleeuw">GitHub</Link>
                </div>
                <div>
                  <Link to="https://www.linkedin.com/in/jacqueline-deleeuw/">LinkedIn</Link>
                </div>
              </div>
              <p className="mb-0">I am a Software Engineer with a strong background in the hospitality and food & beverage industry.
                <br /><br />My interest in coding began after starting a business with friends and taking on the challenge to create our own website instead of outsourcing. With the use of Wordpress I created my first website. As I am a very curious person, always looking to develop and grow, I realised there must be a way to enhance this. After some time learning online, I decided to fast track my learning by enrolling in a Software Engineering Immersive course.
                <br /><br />My previous experience has given me a lot of patience, I don’t believe in too difficult or impossible and see any challenge as an opportunity to improve. I enjoy working in an environment where I can share my experience and skills as well as learn from others, while always delivering the best possible result.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
