import React from 'react'
import minesweeper from '../assets/minesweeper.png'
import rijksmuseum from '../assets/rijksmuseum.png'
import jetflix from '../assets/jetflix.png'
import yieldly from '../assets/yieldly.png'

const Home = () => {
  return (
    <div className="section">
      <div className="columns item">
        <div className="item-wrap column is-half">
          <div className="detail-info">
            <h3>Minesweeper</h3>
            <div><a href="https://jacquelinedeleeuw.github.io/sei-project-one/" rel="noreferrer" target="_blank" >Deployed project</a></div>
            <div><a href="https://github.com/jacquelinedeleeuw/sei-project-one" rel="noreferrer" target="_blank" >GitHub</a></div>
          </div>
          <img src={minesweeper} alt="minesweeper project"/>
        </div>
        <div className="item-wrap column is-half">
          <div className="detail-info">
            <h3>Rijksmuseum</h3>
            <div><a href="https://virtual-rijksmuseum.netlify.app/" rel="noreferrer" target="_blank" >Deployed project</a></div>
            <div><a href="https://github.com/jacquelinedeleeuw/sei-project-two" rel="noreferrer" target="_blank" >GitHub</a></div>
          </div>
          <img src={rijksmuseum} alt="rijksmuseum project"/>
        </div>
      </div>
      <div className="columns item">
        <div className="item-wrap column is-half">
          <div className="detail-info">
            <h3>Jetflix</h3>
            <div><a href="https://jetflixapp.herokuapp.com/" rel="noreferrer" target="_blank" >Deployed project</a></div>
            <div><a href="https://github.com/jacquelinedeleeuw/sei-project-three" rel="noreferrer" target="_blank" >GitHub</a></div>
          </div>
          <img src={jetflix} alt="jetflix project" />
        </div>
        <div className="item-wrap column is-half">
          <div className="detail-info">
            <h3>Yieldly</h3>
            <div><a href="https://yieldly.herokuapp.com/" rel="noreferrer" target="_blank" >Deployed project</a></div>
            <div><a href="https://github.com/jacquelinedeleeuw/sei-project-four" rel="noreferrer" target="_blank" >GitHub</a></div>
          </div>
          <img src={yieldly} alt="yieldly project" />
        </div>
      </div>
    </div>
  )
}

export default Home
