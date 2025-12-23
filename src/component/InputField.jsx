import React, { forwardRef } from 'react';

const InputField = forwardRef(({
  label,
  placeholder,
  type = 'text',
  id,
  name,
  value,
  onChange,
  error = '',
  className = '',
  ...rest
}, ref) => {
  return (
    <div className="relative w-full max-w-sm mt-5">
      <input
        id={id}
        name={name}
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={`shadow appearance-none bg-[#F7F8F9] border-[1px] border-[#CBCBCB] rounded w-full py-2 px-3 text-[#919191] leading-tight focus:outline-none focus:shadow-outline ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
        {...rest}
      />
      <label
        htmlFor={id}
        className="absolute -top-2.5 left-3 bg-[#F7F8F9] px-1 text-[#6C25FF] text-sm font-medium"
      >
        {label}
      </label>
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
});

InputField.displayName = 'InputField';

export default InputField;
