import React from 'react';
import netiq from '../../assets/netiq.png';
import aws from '../../assets/aws.png';
import egen from '../../assets/egen.svg';
import halliburton from '../../assets/halliburton.svg';
import oracle from '../../assets/oracle.png';
import tempus from '../../assets/tempus.jpg';
import uptake from '../../assets/uptake.png';
import './style.css';

const events = [{
  id: 1,
  date: 'Jun 2013 - Aug 2013',
  company: 'NetIQ (Internship)',
  img: <img src={netiq} />
}, {
  id: 2,
  date: 'Aug 2013',
  company: 'Oracle Certified Professional, Java SE 6 Programmer',
  img: <img src={oracle} />
}, {
  id: 3,
  date: 'Jun 2014 - Feb 2015',
  company: 'Halliburton',
  img: <img src={halliburton} />
}, {
  id: 4,
  date: 'Mar 2015 - Present',
  company: 'Egen Solutions',
  img: <img src={egen} />
}, {
  id: 5,
  date: 'May 2018 - Present',
  company: 'Tempus',
  img: <img src={tempus} />
}];

const Experience = () => (
  <div className="experience">
    <div className="experience-sub">
      <div className="line1"></div>
      <div className="oracle-netiq-container">
        <div className="item left netiq">
          <img src={netiq} />
          <div>Summer internship</div><div><b className="hightlights">Major Highlights:</b>IDM, SQL, Postgres</div>
        </div>
        <div className="item"><div className="circle"><span className="year">2013</span></div></div>
        <div className="item right oracle">
          <img src={oracle} />
          <div className="padding-top-10">Oracle Certified Professional, Java SE 6 Programmer</div>
        </div>
      </div>
      <div className="line2"></div>
      <div className="halliburton-container">
        <div className="item left">
          <img src={halliburton} />
        </div>
        <div className="item"><div className="circle"><span className="year">2014</span></div></div>
        <div className="item right">
          <div><b className="hightlights">Major Highlights:</b>C# WPF, Lightning charts, TFS</div>
        </div>
      </div>
      <div className="line3"></div>
      <div className="egen-container">
        <div className="item left">
          <div className="egen"><img src={egen} /></div>
          <div className="uptake"><img src={uptake} /></div>
        </div>
        <div className="item"><div className="circle"><span className="year">2015</span></div></div>
        <div className="item right">
          <div className="egen"><b className="hightlights">Major Highlights:</b>Ionic, MongoDB, Express, Node</div>
          <div className="uptake"><b className="hightlights">Major Highlights:</b>Java RESTful, AngularJS, Highcharts, D3, Selenium</div>
        </div>
      </div>
      <div className="line4"></div>
      <div className="tempus-container">
        <div className="item left">
          <div className="tempus"><img src={tempus} /></div>
          <div className="aws"><img src={aws} /></div>
        </div>
        <div className="item"><div className="circle"><span className="year">2018</span></div></div>
        <div className="item right">
          <div className="tempus"><b className="hightlights">Major Highlights:</b>ReactJS, Redux, React Native, ES 6, Typescript, NestJS, SQL</div>
          <div className="aws">AWS Certified Solutions Architect- Associate</div>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;