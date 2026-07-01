import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";

function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        errors={errors}
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "طول عنوان نامعتبر است",
          },
        }}
      />
       <TextField
        label="توضیحات پروژه"
        name="description"
        register={register}
        required
        errors={errors}
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 10,
            message: "طول توضیحات نامعتبر است",
          },
        }}
      />
       <TextField
        label="بودجه"
        name="budget"
        register={register}
        required
        errors={errors}
        validationSchema={{
          required: "تعیین بودجه ضروری است",
          minLength: {
            value: 10,
            message: "طول بودجه نامعتبر است",
          },
        }}
      />
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
