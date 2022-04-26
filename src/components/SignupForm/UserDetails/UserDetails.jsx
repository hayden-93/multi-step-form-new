import React from "react";

const UserDetails = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="space-y-8">
      <div className="space-y-3 text-center">
        <p>
          For a new beginning, enter your details into the following fields.
        </p>
      </div>
      <form className="max-w-screen-sm mx-auto px-24 space-y-4">
        <div>
          <input
            type="text"
            placeholder="First Name"
            values={values.email}
            onChange={handleChange("firstName")}
            className="w-full pl-2 rounded"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            values={values.email}
            onChange={handleChange("lastName")}
            className="w-full pl-2 rounded"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email address"
            values={values.email}
            onChange={handleChange("email")}
            className="w-full pl-2 rounded"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={Continue}
            type="submit"
            className="bg-slate-900 text-white rounded py-1 px-4 hover:bg-slate-700"
          >
            Next
          </button>
        </div>
      </form>
      <div className="text-center">
        <a href="/">
          Already got an account?{" "}
          <button className="text-red-600">Sign in</button>
        </a>
      </div>
    </div>
  );
};

export default UserDetails;
