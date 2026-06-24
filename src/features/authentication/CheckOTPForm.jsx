import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loading from "../../ui/Loading";

const RESEND_TIME = 90;

function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);

      if (!user.isActive) return "/complete-profile";
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "🔔" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form
      onSubmit={checkOtpHandler}
      className="flex flex-col gap-y-6 p-8 bg-secondary-0 rounded-xl shadow-sm"
    >
      <div className="text-center flex flex-col justify-center items-center">
        <HiArrowRight
          onClick={onBack}
          className="w-6 h-6 text-secondary-500 self-start"
        />
        <img
          src="/src/assets/logo-karino-Photoroom.png"
          alt="logo-karino"
          className="w-30"
        />
        <h3 className="text-md font-bold text-secondary-700">
          ورود به حساب کاربری
        </h3>
      </div>
      <p className="text-sm text-secondary-700">کد تایید را وارد کنید</p>
      <div>
        {otpResponse && (
          <p className="flex items-center gap-x-2 text-secondary-700">
            {otpResponse?.message}
            <button onClick={onBack}>
              <CiEdit className="w-6 h-6 text-primary-900" />
            </button>
          </p>
        )}
      </div>
      <div className="text-xs lg:text-sm text-secondary-500">
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button className="text-primary-900" onClick={onResendOtp}>
            ارسال مجدد کد تایید
          </button>
        )}
      </div>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input type="number" {...props} />}
        containerStyle="flex flex-row-reverse gap-x-1 justify-center w-full sm:gap-x-2"
        inputStyle={{
          width: "2rem",
          padding: "0.5rem 0.2rem",
          border: "1px solid var(--color-primary-400)",
          borderRadius: "0.5rem",
        }}
      />
      <div>
        {isPending ? (
          <Loading />
        ) : (
          <button className="btn btn--primary w-full">تایید</button>
        )}
      </div>
    </form>
  );
}

export default CheckOTPForm;
