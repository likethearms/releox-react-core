import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import translationNamespaces from '../../releox-t-namespaces';
import ReleoxLinkObject from '../../ReleoxLinkObject';
import ReleoxConfigContext from '../../utils/ReleoxConfigContext';

interface Forgot {
  links: ReleoxLinkObject[];
}

export default (): Forgot => {
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
