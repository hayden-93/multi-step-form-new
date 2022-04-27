import React from "react";

export const Confirmation = ({ user, previousStep, onSubmit }) => {
  return (
    <div className="max-w-screen-sm mx-auto px-24 space-y-10">
      <p className="text-center">
        Thank you for signing up with LogoIpsum. To confirm all details below
        are correct all you will need to do is submit at the bottom of the page
      </p>
      <div className="space-y-4">
        <div>
          <p className="font-bold">
            First Name:{" "}
            <span className="pl-4 font-light">{user.firstName}</span>
          </p>
        </div>
        <div>
          <p className="font-bold">
            Last Name: <span className="pl-4 font-light">{user.lastName}</span>
          </p>
        </div>
        <div>
          <p className="font-bold">
            Username: <span className="pl-4 font-light">{user.username}</span>
          </p>
        </div>
        <div>
          <p className="font-bold">
            Email Address: <span className="pl-4 font-light">{user.email}</span>
          </p>
        </div>
      </div>
      <p className="text-center">
        If you wish to subcribe for marketing and newsletters, please click{" "}
        <button className="text-red-700">here</button> to be added to our
        mailing list
      </p>
      <div className="flex justify-between">
        <div>
          <button
            onClick={previousStep}
            type="submit"
            className="bg-slate-900 text-white rounded py-1 px-4 hover:bg-slate-700"
          >
            Go Back
          </button>
        </div>
        <div>
          <button
            type="submit"
            onClick={onSubmit}
            className="bg-slate-900 text-white rounded py-1 px-4 hover:bg-slate-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
