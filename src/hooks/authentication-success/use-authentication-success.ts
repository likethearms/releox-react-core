import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReleoxLinkObject from '../../ReleoxLinkObject';
import ReleoxConfigContext from '../../utils/ReleoxConfigContext';

interface ForgotPasswordSuccess {
  message: string;
  links: ReleoxLinkObject[];
}

export default (tNamespace: string): ForgotPasswordSuccess => {
  const [links, setLinks] = useState<ReleoxLinkObject[]>([]);

  const [config] = useContext(ReleoxConfigContext);

  const { t } = useTranslation(tNamespace);

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
