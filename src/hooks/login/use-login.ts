import { useCallback, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ObjectSchema } from 'yup';
import translationNamespaces from '../../releox-t-namespaces';
import ReleoxLinkObject from '../../ReleoxLinkObject';
import ReleoxConfigContext from '../../utils/ReleoxConfigContext';
import {
  EmailLoginValidation,
  UsernameLoginValidation,
} from '../../validation/LoginValidationSchema';
import LoginBody from './LoginBody';

interface UseLoginHook {
  links: ReleoxLinkObject[];
  isLoading: boolean;
  initFormValues: LoginBody;
  emailFieldName: string;
  emailFieldType: string;
  validationSchema: ObjectSchema;
  onSubmit: (body: LoginBody) => void;
  translations: {
    email: string;
    password: string;
    submit: string;
  };
}

type OnSubmit = (url: string, body: LoginBody) => void;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LoadingSelector = (state: any) => boolean;

export default (
  onSubmit: OnSubmit,
  isLoadingSelector: LoadingSelector
): UseLoginHook => {
  const dispatch = useDispatch();
  const [config] = useContext(ReleoxConfigContext);
  const { t } = useTranslation(translationNamespaces.login);
  const [links, setLinks] = useState<ReleoxLinkObject[]>([]);
  const isLoading = useSelector(isLoadingSelector);

  const { emailFieldName } = config.scenes.login;
  const emailFieldType = emailFieldName === 'email' ? 'email' : 'text';
  const validationSchema =
    emailFieldName === 'email' ? EmailLoginValidation : UsernameLoginValidation;

  const handleOnSubmit = useCallback(
    (body: LoginBody): void => {
      dispatch(onSubmit(config.api.urls.login, body));
    },
    [onSubmit, dispatch, config.api.urls.login]
  );

  useEffect(() => {
    const linkArray = [];
    if (config.scenes.login.showForgotPasswordLink) {
      linkArray.push({
        to: config.routes.forgotPassword,
        id: 'login-forgot-link',
        text: t('forgotPassword'),
      });
    }
    if (config.routes.register) {
      linkArray.push({
        to: config.routes.register,
        id: 'login-register-link',
        text: t('register'),
      });
    }
    setLinks(linkArray);
  }, [
    setLinks,
    config.routes.forgotPassword,
    config.routes.register,
    config.scenes.login.showForgotPasswordLink,
    t,
  ]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const initFormValues: any = {
    [config.scenes.login.emailFieldName]: '',
    password: '',
  };

  return {
    links,
    initFormValues,
    isLoading,
    emailFieldName,
    emailFieldType,
    validationSchema,
    onSubmit: handleOnSubmit,
    translations: {
      email: t(`${translationNamespaces.common}:email`),
      password: t(`${translationNamespaces.common}:password`),
      submit: t(`submit`),
    },
  };
};
