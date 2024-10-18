import useContactForm from '@/components/HomePage/ContactSection/useContactForm';
import React from 'react';

interface InputFieldProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ name, label, type, placeholder }) => {
  const { register, errors } = useContactForm();

  // Explicitly check if the error message exists and is a string
  const errorMessage = errors.name?.message as string | undefined;

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2 text-lg font-medium text-primary-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        id={name}
        className={`bg-gray-50 border ${errors.name ? '!border-red-500' : 'border-gray-300'} text-secondary text-2xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-secondary placeholder-gray-300 dark:placeholder-gray-300 dark:text-white dark:focus:ring-accent-500 dark:focus:border-accent-500`}
        placeholder={placeholder}
        {...register("name")}
      />
      {/* Only render the error message if it exists and is a string */}
      {errorMessage && <span className="mt-1 text-sm text-red-600">{errorMessage}</span>}
    </div>
  );
};

export default InputField;
