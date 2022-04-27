import React from "react";

export const Success = ({ restart }) => {
  return (
    <div className="py-4 text-center">
      <h1 className="pb-4">
        You are all done! Welcome to the LogoIpsum family!
      </h1>
      <button type="button" onClick={restart}>
        Continue to website
      </button>
    </div>
  );
};
