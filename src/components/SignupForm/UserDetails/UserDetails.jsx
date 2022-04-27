import React, { useEffect, useState } from "react";

export const UserDetails = ({
  firstName,
  lastName,
  email,
  nextStep,
  onChange,
}) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(!(firstName && lastName && email));
  }, [firstName, lastName, email]);

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
            name="firstName"
            required
            placeholder="First Name"
            value={firstName}
            onChange={onChange}
            className="w-full px-2 text-sm leading-9 rounded-sm"
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            required
            placeholder="Last Name"
            value={lastName}
            onChange={onChange}
            className="w-full px-2 text-sm leading-9 rounded-sm"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            required
            placeholder="Email address"
            value={email}
            onChange={onChange}
            className="w-full px-2 text-sm leading-9 rounded-sm"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={nextStep}
            disabled={disabled}
            className={`text-white rounded py-1 px-4${
              disabled
                ? " bg-slate-400 cursor-not-allowed"
                : " bg-slate-900 hover:bg-slate-700"
            }`}
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
