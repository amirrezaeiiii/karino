function TextField({
  label,
  name,
  placeholder,
  dir,
  register,
  type = "text",
  required,
  validationSchema,
  errors,
}) {
  return (
    <div className="flex flex-col gap-y-2">
      <label
        htmlFor={name}
        className="text-xs lg:text-sm text-secondary-500 mb-1"
      >
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        type={type}
        id={name}
        dir={dir}
        placeholder={placeholder}
        className="textField__input"
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
