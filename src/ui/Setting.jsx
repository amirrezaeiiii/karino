import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { updateProfile } from "../services/authService";
import useUser from "../features/authentication/useUser";
import TextField from "./TextField";

function Setting() {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isPending: formSubmitting },
  } = useForm({ defaultValues: { name: user?.name, email: user?.email } });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: updateProfile,
  });

  const roleBase =
    user?.role === "ADMIN"
      ? "/admin"
      : user?.role === "OWNER"
        ? "/owner"
        : "/freelancer";

const onSubmit = async (data) => {
  try {
    await mutateAsync(data);

    await queryClient.invalidateQueries({
      queryKey: ["get-user"],
    });

    toast.success("اطلاعات با موفقیت به‌روز شد");
  } catch (error) {
    toast.error(
      error?.response?.data?.message ||
        "خطا در به‌روزرسانی اطلاعات"
    );
  }
};

  if (!user) return null;

  return (
    <div className="container xl:max-w-7xl mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-secondary-900">ویرایش اطلاعات</h2>
        <button
          onClick={() => navigate(`${roleBase}/dashboard`)}
          className="text-sm text-secondary-600 hover:text-primary-600 transition-colors"
        >
          بازگشت
        </button>
      </div>

      <div className="max-w-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-6"
        >
          <div className="p-4 bg-secondary-50 rounded-xl border border-secondary-200">
            <label className="block text-sm text-secondary-600 mb-1">
              شماره همراه
            </label>
            <p className="font-medium text-secondary-900" dir="ltr">
              {user.phone}
            </p>
            <span className="text-xs text-secondary-400 mt-1">
              این فیلد قابل ویرایش نیست
            </span>
          </div>

          <TextField
            label="نام"
            name="name"
            register={register}
            validationSchema={{ required: "نام ضروری است" }}
            errors={errors}
          />

          <TextField
            label="ایمیل"
            name="email"
            type="email"
            register={register}
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

          <button
            type="submit"
            className="btn btn--primary w-full"
            disabled={isPending || formSubmitting}
          >
            {isPending ? "در حال ذخیره..." : "ذخیره تغییرات"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Setting;