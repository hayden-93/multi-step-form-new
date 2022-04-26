import React from "react";

const UserDetails = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <form className="max-w-screen-sm mx-auto px-4 space-y-2">
        <input
          type="text"
          placeholder="First Name"
          values={values.email}
          onChange={handleChange("firstName")}
          className="w-full"
        />
        <div className="">
          <input
            type="text"
            placeholder="Last Name"
            values={values.email}
            onChange={handleChange("lastName")}
            className="w-full"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Email address"
            values={values.email}
            onChange={handleChange("email")}
            className="w-full"
          />
        </div>
        <div>
          <button onClick={Continue} type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
