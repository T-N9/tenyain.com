import useContactForm from '@/components/HomePage/ContactSection/useContactForm';
import React from 'react';

interface TextAreaFieldProps {
  name: string;
  label: string;
  placeholder: string;
  rows?: number;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ name, label, placeholder, rows = 6 }) => {
  const { register, errors } = useContactForm();

  const errorMessage = errors.name?.message as string | undefined;

  return (
    <div className="mb-4 sm:col-span-2">
      <label htmlFor={name} className="block mb-2 text-lg font-medium text-primary-900 dark:text-secondary">
        {label}
      </label>
      <textarea
        id={name}
        rows={rows}
        className={`block p-2.5 w-full text-2xl text-slate-600 bg-gray-50 rounded-lg shadow-sm border ${errors.name ? '!border-red-500' : 'border-gray-300'} focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 placeholder-gray-300 dark:border-secondary dark:placeholder-gray-300 dark:text-white dark:focus:ring-accent-500 dark:focus:border-accent-500`}
        placeholder={placeholder}
        {...register("message")}
      ></textarea>
      {errorMessage && <span className="mt-1 text-sm text-red-600">{errorMessage}</span>}
    </div>
  );
};

export default TextAreaField;
