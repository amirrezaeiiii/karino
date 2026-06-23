import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ name, email, role });
      toast.success(message);
      //   console.log(data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full max-w-md px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-6 p-8 bg-secondary-0 rounded-xl shadow-sm"
      >
        <div className="text-center flex flex-col justify-center items-center">
          <img
            src="/src/assets/logo-karino-Photoroom.png"
            alt="logo-karino"
            className="w-30"
          />
          <h3 className="text-md font-bold text-secondary-700">
            تکمیل حساب کاربری
          </h3>
        </div>
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          dir="rtl"
        />
        <TextField
          label="ایمیل"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="example@gmail.com"
          dir="ltr"
        />
        <div className="flex items-center justify-center gap-x-8">
          <RadioInput
            label="کارفرما"
            name="role"
            value="OWNER"
            id="OWNER"
            onChange={(e) => setRole(e.target.value)}
            checked={role === "OWNER"}
          />
          <RadioInput
            label="فریلنسر"
            name="role"
            value="FREELANCER"
            id="FREELANCER"
            onChange={(e) => setRole(e.target.value)}
            checked={role === "FREELANCER"}
          />
        </div>
        {isPending ? (
          <Loading />
        ) : (
          <button className="w-full btn btn--primary">تایید</button>
        )}
      </form>
    </div>
  );
}

export default CompleteProfileForm;
