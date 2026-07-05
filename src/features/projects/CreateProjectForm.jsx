import { useState } from "react";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import RHFSelect from "../../ui/RHFSelect";
import TextField from "../../ui/TextField";
import DatePickerField from "../../ui/DatePickerField";

function CreateProjectForm() {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
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
      <RHFSelect
        label="دسته بندی"
        name="category"
        required
        options={[]}
        register={register}
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین"/>
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
