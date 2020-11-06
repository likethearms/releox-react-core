import { Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/login/use-login';
import ReleoxAuthenticationsAction from '../../store/releox-authentication/ReleoxAuthenticationsAction';
import ReleoxAuthenticationsSelector from '../../store/releox-authentication/ReleoxAuthenticationsSelector';
import Input from '../components/Input';

export default (): JSX.Element => {
  const {
    onSubmit,
    initFormValues,
    emailFieldName,
    emailFieldType,
    validationSchema,
    isLoading,
    links,
    translations,
  } = useLogin(
    ReleoxAuthenticationsAction.login,
    ReleoxAuthenticationsSelector.selectIsLoading
  );

  return (
    <Formik
      initialValues={initFormValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Input
          name={emailFieldName}
          type={emailFieldType}
          label={translations.email}
        />
        <br />
        <Input name="password" type="password" label={translations.password} />
        <br />
        <button type="submit" disabled={isLoading}>
          {translations.submit}
        </button>
        <br />
        {links.map((l) => (
          <Link to={l.to} key={l.id}>
            {l.text}
          </Link>
        ))}
      </Form>
    </Formik>
  );
};
