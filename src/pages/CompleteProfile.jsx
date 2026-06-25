import React from "react";
import CompleteProfileForm from "../features/authentication/CompleteProfileForm";

function CompleteProfile() {
  return (
    <div className="container xl:max-w-7xl mx-auto">
      <div className="flex justify-center items-center min-h-screen">
        <CompleteProfileForm />
      </div>
    </div>
  );
}

export default CompleteProfile;
