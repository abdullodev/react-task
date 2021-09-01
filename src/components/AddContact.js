import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  inputNameFunc = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  inputEmailFunc = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  AddFunc = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Please enter your personality");
      return;
    }

    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div className="ui main addContact">
        <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>Add Contact</h2>
        <form className="ui form" onSubmit={this.AddFunc}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.inputNameFunc}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.inputEmailFunc}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
