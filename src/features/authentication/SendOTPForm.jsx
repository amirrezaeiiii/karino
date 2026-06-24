import { HiOutlineArrowLeft } from "react-icons/hi";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOTPForm({ onSubmit, isSendingOtp, phoneNumber, onChange }) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-y-8 p-8 bg-secondary-0 rounded-xl shadow-sm"
    >
      <div className="text-center flex flex-col justify-center items-center">
        <img
          src="/src/assets/logo-karino-Photoroom.png"
          alt="logo-karino"
          className="w-30"
        />
        <h3 className="text-md font-bold text-secondary-700">
          ورود به حساب کاربری
        </h3>
      </div>

      <TextField
        label="لطفا شماره موبایل خود را وارد کنید"
        value={phoneNumber}
        onChange={onChange}
        name="phoneNumber"
        placeholder="09121234567"
        dir="ltr"
      />
      <div>
        {isSendingOtp ? (
          <Loading />
        ) : (
          <button
            type="submit"
            className="w-full btn btn--primary flex justify-center items-center gap-x-2"
          >
            <span className="text-sm lg:text-lg">ارسال کد تایید</span>
            <HiOutlineArrowLeft className="w-4 h-4" />
          </button>
        )}
      </div>
      <span className="text-secondary-400 text-xs">
        ورود شما به معنای پذیرش شرایط کارینو و قوانین حریم‌ خصوصی است
      </span>
    </form>
  );
}

export default SendOTPForm;
