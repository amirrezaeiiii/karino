import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { completeProfile } from "../../services/authService";
import Loading from "../../ui/Loading";
import RadioInput from "../../ui/RadioInput";
import TextField from "../../ui/TextField";
import RadioInputGroup from "../../ui/RadioInputGroup";
import { useForm } from "react-hook-form";

function CompleteProfileForm() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
      toast.success(message);

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
    <div className="w-full max-w-md px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
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
          register={register}
          dir="rtl"
          validationSchema={{
            required: "نام و نام خانوادگی  ضروری است",
          }}
          errors={errors}
        />
        <TextField
          label="ایمیل"
          name="email"
          register={register}
          placeholder="example@gmail.com"
          dir="ltr"
          validationSchema={{
            required: "ایمیل ضروری است",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل نامعتبر است",
            },
          }}
          errors={errors}
        />
        <div className="flex items-center justify-center gap-x-8">
           <RadioInputGroup
            errors={errors}
            register={register}
            watch={watch}
            configs={{
              name: "role",
              validationSchema: { required: "انتخاب نقش ضروری است" },
              options: [
                {
                  value: "OWNER",
                  label: "کارفرما",
                },
                { value: "FREELANCER", label: "فریلنسر" },
              ],
            }}
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
