import React, { useEffect, useState } from "react";

export const PersonalDetails = ({
  username,
  password,
  nextStep,
  previousStep,
  onChange,
}) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(!(username && password));
  }, [username, password]);

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
          name="username"
          placeholder="Create your Username"
          value={username}
          onChange={onChange}
          className="w-full px-2 text-sm leading-9"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Choose your Password"
          value={password}
          onChange={onChange}
          className="w-full px-2 text-sm leading-9"
        />
      </div>
      <div className="flex justify-between py-8">
        <div>
          <button
            type="button"
            onClick={previousStep}
            className="bg-slate-900 text-white rounded py-1 px-4 hover:bg-slate-700"
          >
            Go Back
          </button>
        </div>
        <div>
          <button
            type="button"
            disabled={disabled}
            onClick={nextStep}
            className={`text-white rounded py-1 px-4${
              disabled
                ? " bg-slate-400 cursor-not-allowed"
                : " bg-slate-900 hover:bg-slate-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
