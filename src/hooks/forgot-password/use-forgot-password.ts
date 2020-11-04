import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReleoxConfigContext from '../../config/ReleoxConfigContext';
import ReleoxLinkObject from '../../ReleoxLinkObject';
import translationNamespaces from '../../translation-namespaces';

interface R {
  links: ReleoxLinkObject[];
}

export const ForgotScene = (): R => {
  const [links, setLinks] = useState<ReleoxLinkObject[]>([]);

  const { t } = useTranslation(translationNamespaces.forgotPassword);

  const [config] = useContext(ReleoxConfigContext);

  useEffect(() => {
    setLinks([
      {
        id: 'back-link',
        to: config.routes.login,
        text: t('toLogin'),
      },
    ]);
  }, [setLinks, config.routes.login, t]);

  return { links };
};
