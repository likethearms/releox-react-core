import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import releoxTNamespaces from '../../releox-t-namespaces';

interface AuthenticationError {
  message: string;
}

export default (): AuthenticationError => {
  const [message, setMessage] = useState('');
  const { t } = useTranslation(releoxTNamespaces.authError);
  const location = useLocation();

  useEffect(() => {
    const msgRegex = location.search.match(/message[^&?]*?=[^&?]*/);
    if (msgRegex) {
      const msg = msgRegex[0].split('=')[1];
      setMessage(msg);
    } else {
      setMessage(t('missingError'));
    }
  }, [setMessage, location.search, t]);

  return {
    message,
  };
};
