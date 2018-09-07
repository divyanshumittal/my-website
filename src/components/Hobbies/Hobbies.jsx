import React from 'react';

import './style.css';

const Hobbies = () => (
  <div className="hobbies">
    <div className="links-title">Things I love doing</div>
    <ul>
      <li>Adventure sports - Rafting, Kayaking</li>
      <li>Taking photos (I suck at it though)</li>
      <li>Cooking (Better than my photography skills), <b>Thai</b> and <b>Ethopian</b> cuisines are my best</li>
      <li>Playing board games, <b>Catan</b> is fun</li>
      <li>Travelling, <b>Colorado</b> has no competition, believe me</li>
      <li>Playing sports - Cricket, racketball, basketball are my favourites</li>
    </ul>
    <div className="credits">Credits:</div>
    <div className="links-title">Links used for building this website:</div>
    <ul>
      <li>
        <a target="#" href="https://medium.com/backticks-tildes/setting-up-a-redux-project-with-create-react-app-e363ab2329b8">
          Setting up a redux project with create react app
        </a>
      </li>
      <li>
        <a target="#" href="https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f">
          Setting up a react router, redux thunk within a redux project
        </a>
      </li>
    </ul>
    <div className="github-url">
      I have created this awesome react seed app by integrating <a href="https://github.com/facebook/create-react-app" target="#">create react app</a> with react router, redux thunk and saas loader setup
    </div>
    <div className="github-url">
      <a href="https://github.com/divyanshumittal/create-react-app-seed" target="#">
        https://github.com/divyanshumittal/create-react-app-seed
      </a>
    </div>
    <div className="links-title">Links used for deploying this website:</div>
    <ul>
      <li>
        <a target="#" href="https://levelup.gitconnected.com/deploying-your-ui-applications-using-docker-and-nginx-b65ffa8f744e">
          Dockerizing web app using Docker
        </a>
      </li>
      <li>
        <a target="#" href="https://levelup.gitconnected.com/deploying-ssl-enabled-react-angular-vue-applications-to-aws-using-lets-encrypt-a7aff5a417ee">
          Deploying web app to AWS
        </a>
      </li>
    </ul>

  </div>
);

export default Hobbies;