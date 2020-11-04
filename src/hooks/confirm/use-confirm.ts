import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import translationNamespaces from '../../releox-t-namespaces';

interface ConfirmScene {
  errorMessage: string;
}

type OnConfirm = (uid: string, token: string) => void;

export default (onConfirm: OnConfirm): ConfirmScene => {
  const { t } = useTranslation(translationNamespaces.confirm);
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const accessTokenMatch = location.search.match(/access_token=[a-zA-Z0-9]*/);
    const uidMatch = location.search.match(/uid=[a-zA-Z0-9]**/);

    if (accessTokenMatch && uidMatch) {
      const token = accessTokenMatch[0].split('=')[0];
      const uid = uidMatch[0].split('=')[0];
      dispatch(onConfirm(uid, token));
    } else {
      setErrorMessage(t('missingInformation'));
    }
  }, [location.search, setErrorMessage, t, dispatch, onConfirm]);

  return { errorMessage };
};
