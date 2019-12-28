import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor:this.props.color}}>
        <div className="Age-label">
          Home Component: <span>{this.props.age}</span>
          Favourite Color : <span>{this.props.color}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    color: state.color
  };
};

export default connect(
  mapStateToProps
)(Home);
