import React from "react";
import AuthContainer from "../features/authentication/AuthContainer";

function Auth() {
  return (
    <div className="container xl:max-w-7xl mx-auto">
      <div className="flex justify-center items-center min-h-screen">
        <AuthContainer />
      </div>
    </div>
  );
}

export default Auth;
