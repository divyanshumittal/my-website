import React from 'react';
import us from '../../assets/us.jpeg';

import './style.css';

const Home = () => (
  <div className="home">
    <div className="container">
      <div className="intro">
        <div className="bio">
          Hi, my name is <b>Divyanshu Mittal</b>. With me is my friend, lover, inspiration and
          an awesome human being.
          <div className="hobbies">
            <i>I am a software developer by profession, who has a knack of building things</i>
          </div>
        </div>
      </div>
      <img src={us} />
    </div>
  </div>
);

export default Home;