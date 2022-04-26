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
    <div className="max-w-screen-sm mx-auto py-10 px-24 space-y-2">
      <div className="py-4">
        <p className="text-center ">
          Please fill in the following details to create an account with us
        </p>
      </div>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Create your Username"
          values={values.email}
          onChange={handleChange("username")}
          className="w-full"
          required
        />

        <input
          type="password"
          placeholder="Choose your Password"
          values={values.password}
          onChange={handleChange("password")}
          className="w-full"
        />
      </div>
      <div className="flex justify-between py-8">
        <div>
          <button
            onClick={Previous}
            type="submit"
            className="bg-slate-900 text-white rounded py-1 px-4 hover:bg-slate-700"
          >
            Go Back
          </button>
        </div>
        <div>
          <button
            onClick={Continue}
            type="submit"
            className="bg-slate-900 text-white rounded py-1 px-4 hover:bg-slate-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
