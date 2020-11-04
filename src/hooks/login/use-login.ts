import { useCallback, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import ReleoxConfigContext from '../../config/ReleoxConfigContext';
import ReleoxLinkObject from '../../ReleoxLinkObject';

interface UseLoginHook {
  links: ReleoxLinkObject[];
  isLoading: boolean;
  initFormValues: LoginBody;
  onSubmit: OnSubmit;
}

type LoginBody =
  | {
      email: string;
      password: string;
    }
  | {
      username: string;
      password: string;
    };

type OnSubmit = (body: LoginBody) => void;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LoadingSelector = (state: any) => boolean;

export default (
  onSubmit: OnSubmit,
  isLoadingSelector: LoadingSelector
): UseLoginHook => {
  const dispatch = useDispatch();
  const [config] = useContext(ReleoxConfigContext);
  const { t } = useTranslation('LoginScene');
  const [links, setLinks] = useState<ReleoxLinkObject[]>([]);
  const isLoading = useSelector(isLoadingSelector);

  const handleOnSubmit = useCallback(
    (body: LoginBody): void => {
      dispatch(onSubmit(body));
    },
    [onSubmit, dispatch]
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
    onSubmit: handleOnSubmit,
  };
};
