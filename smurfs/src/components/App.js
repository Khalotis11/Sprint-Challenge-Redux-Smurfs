import React, { Component } from "react";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { handleGetSmurfs, handleAddSmurfs } from "../actions/index";
import { connect } from "react-redux";

class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  componentDidMount() {
    this.props.handleGetSmurfs();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddSmurfs(this.state);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };
  render() {
    return (
      <div className="App">
        <div className="smurfs-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="name..."
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              name="age"
              value={this.state.age}
              placeholder="age..."
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              name="height"
              value={this.state.height}
              placeholder="height..."
              onChange={this.handleChange}
            />
            <br />

            <button type="submit"> Add Smurf </button>
          </form>
        </div>
        {this.props.smurfs.map(smurf => (
          <div className="added-smurfs">
            <h2>{smurf.name}</h2>
            <p>{smurf.age}</p>
            <small>{smurf.height}</small>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { handleGetSmurfs, handleAddSmurfs }
)(App);
