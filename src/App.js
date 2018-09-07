import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { simpleAction } from './actions/simpleAction';
import Home from './components/Home/Home';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Hobbies from './components/Hobbies/Hobbies';
import './App.css';

class App extends Component {
  // simpleAction = (event) => {
  //   this.props.simpleAction();
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Link to="/">Home</Link>
            {/* <Link to="/education">Education</Link> */}
            <Link to="/experience">Experience</Link>
            <Link to="/hobbies">Hobbies</Link>
          </header>
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/hobbies" component={Hobbies} />
          </main>
          {/* <p className="App-intro">
            <button onClick={this.simpleAction}>Test redux action</button>
          </p>
          <pre>
            {
              JSON.stringify(this.props)
            }
          </pre> */}
        </div>
      </Router>
     
    );
  }
}

const mapStateToProps = state => ({
  result: state.simpleReducer.result
});

const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
