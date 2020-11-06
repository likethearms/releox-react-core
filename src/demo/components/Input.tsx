/* eslint-disable react/jsx-props-no-spreading */
import { useField } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
}

const Input = ({ label, placeholder, ...props }: Props): JSX.Element => {
  const [field, meta] = useField(props);
  const { t } = useTranslation();
  return (
    <>
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...props} placeholder={placeholder || label} />
      {meta.touched && meta.error ? (
        <div className="error">{t(meta.error, { name: label })}</div>
      ) : null}
    </>
  );
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default Input;
