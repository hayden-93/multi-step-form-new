import React from "react";

const Confirmation = ({ prevStep, nextStep, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="max-w-screen-sm mx-auto px-24 space-y-10 text-center">
      <button>
        Thank you for signing up with LogoIpsum. To confirm all details are
        correct all you will need to do is submit at the bottom of the page
      </button>
      <p>
        If you wish to subcribe for marketing and newsletters, please click{" "}
        <button className="text-red-700">here</button> to be added to our
        mailing list
      </p>
      <div className="flex justify-between">
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
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
