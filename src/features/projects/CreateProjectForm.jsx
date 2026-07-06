import { useState } from "react";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import useCategories from "../../hooks/useCategories";
import DatePickerField from "../../ui/DatePickerField";
import Loading from "../../ui/Loading";
import RHFSelect from "../../ui/RHFSelect";
import TextField from "../../ui/TextField";
import useCreateProject from "./useCreateProject";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);
  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = projectToEdit;
  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { categories } = useCategories();
  const { createProject, isCreating } = useCreateProject();
  const { editProject, isEditing } = useEditProject();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: editValues });

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
          },
        },
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
        },
      });
    }
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
            value: 15,
            message: "حداقل 15 کاراکتر را وارد کنید",
          },
        }}
      />
      <TextField
        label="بودجه (تومان)"
        name="budget"
        type="number"
        register={register}
        required
        errors={errors}
        validationSchema={{
          required: "تعیین بودجه ضروری است",
        }}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        required
        options={categories}
        register={register}
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین" />
      <div>
        {isCreating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateProjectForm;
