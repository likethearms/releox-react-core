import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReleoxConfigContext from '../../config/ReleoxConfigContext';
import ReleoxLinkObject from '../../ReleoxLinkObject';
import translationNamespaces from '../../translation-namespaces';

interface ForgotPasswordSuccess {
  message: string;
  links: ReleoxLinkObject[];
}

export default (): ForgotPasswordSuccess => {
  const [links, setLinks] = useState<ReleoxLinkObject[]>([]);

  const [config] = useContext(ReleoxConfigContext);

  const { t } = useTranslation(translationNamespaces.forgotPasswordSuccess);

  useEffect(() => {
    setLinks([
      {
        id: 'back-link',
        to: config.routes.login,
        text: t('toLogin'),
      },
    ]);
  }, [setLinks, config.routes.login, t]);

  return { message: t('message'), links };
};
