import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { simpleAction } from './actions/simpleAction';
import Home from './components/Home';
import Links from './components/Links';
import './App.css';

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Website header</h1>
            <Link to="/">Home</Link>
            <Link to="/links">Links</Link>
          </header>
          <Route exact path="/" component={Home} />
          <Route exact path="/links" component={Links} />
          <p className="App-intro">
            <button onClick={this.simpleAction}>Test redux action</button>
          </p>
          <pre>
            {
              JSON.stringify(this.props)
            }
          </pre>
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
