import React from "react";

const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <div className="">
        <input
          type="text"
          placeholder="Create your Username"
          values={values.email}
          onChange={handleChange("username")}
          className="w-full"
        />
      </div>
      <div className="">
        <input
          type="password"
          placeholder="Choose your Password"
          values={values.email}
          onChange={handleChange("password")}
          className="w-full"
        />
      </div>
      <div className="flex justify-between">
        <div>
          <button onClick={Previous} type="submit">
            Go Back
          </button>
        </div>
        <div>
          <button onClick={Continue} type="submit">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
