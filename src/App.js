import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Home from './Home';
import {updateAgeUp, updateAgeDown} from "./actions"
import { getAge} from "./selectors"

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Home />

        <div style={{backgroundColor:this.props.color}}>
          <div className="Age-label" >
            App Component: <span>{this.props.age}</span>
            Favourite Color : <span>{this.props.color}</span>
          </div>
          <button onClick={this.props.onAgeUp}>Age UP</button>
          <button onClick={this.props.onAgeDown}>Age Down</button>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: getAge(state),
    color: state.color
  };
};

const mapDispachToProps = dispatch => {
  return {
    // onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeUp: ()=> dispatch(updateAgeUp(200)),
    onAgeDown: () => dispatch(updateAgeDown(100))
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
