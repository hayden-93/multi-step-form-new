import React, { useState } from "react";

import { Confirmation } from "./Confirmation";
import { PersonalDetails } from "./PersonalDetails";
import { Success } from "./Success";
import { UserDetails } from "./UserDetails";
import { userSignupSchema } from "../../utils/validation";

export const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const next = () => setStep((prevStep) => prevStep + 1);

  const previous = () => setStep((prevStep) => prevStep - 1);

  const handleChange = ({ target }) => {
    setUser((currentUser) => ({ ...currentUser, [target.name]: target.value }));
  };

  const restartForm = () => setStep(1);

  const handleSubmit = async () => {
    try {
      await userSignupSchema.validate(user);
      setStep(4);
    } catch (error) {
      throw new Error("Missing required fields");
    }
  };

  switch (step) {
    case 1:
      return (
        <UserDetails
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          nextStep={next}
          onChange={handleChange}
        />
      );

    case 2:
      return (
        <PersonalDetails
          username={user.username}
          password={user.password}
          nextStep={next}
          previousStep={previous}
          onChange={handleChange}
        />
      );

    case 3:
      return (
        <Confirmation
          user={user}
          previousStep={previous}
          onSubmit={handleSubmit}
        />
      );

    case 4:
      return <Success restart={restartForm} />;

    default:
      throw new Error("Unknown step");
  }
};
