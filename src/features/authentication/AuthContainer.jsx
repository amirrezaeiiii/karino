import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOtpForm";

function AuthContainer() {
  const [step, setStep] = useState(1);
  // const [phoneNumber, setPhoneNumber] = useState("");
  const { handleSubmit, register, getValues,formState:{errors} } = useForm();

  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async () => {
    try {
      const data = await mutateAsync({ phoneNumber: getValues("phoneNumber") });
      setStep(2);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={handleSubmit(sendOtpHandler)}
            setStep={setStep}
            register={register}
            errors={errors}
            // phoneNumber={phoneNumber}
            // onChane={(e) => setPhoneNumber(e.target.value)}
          />
        );

      case 2:
        return (
          <CheckOTPForm
            otpResponse={otpResponse}
            onResendOtp={sendOtpHandler}
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
          />
        );

      default:
        return null;
    }
  };
  return <div className="w-full max-w-md px-4">{renderStep()}</div>;
}

export default AuthContainer;
