import React, { Component } from "react";

import Confirmation from "./Confirmation/Confirmation";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import Success from "./Success/Success";
import UserDetails from "./UserDetails/UserDetails";

export default class Signup extends Component {
  state = {
    step: 1,
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
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
    const { step } = this.state;
    const { email, username, password, firstName, lastName } = this.state;
    const values = { email, username, password, firstName, lastName };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        break;
    }
  }
}
