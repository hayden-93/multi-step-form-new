import React, { Component } from "react";
export default class Signup extends Component {
  state = {
    step: 1,
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    country: "",
    levelOfEducation: "",
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    return (
      <>
        <></>
      </>
    );
  }
}
