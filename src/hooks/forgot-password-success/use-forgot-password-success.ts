import { useTranslation } from 'react-i18next';
import translationNamespaces from '../../translation-namespaces';

interface ResetPasswordSuccess {
  message: string;
}

export default (): ResetPasswordSuccess => {
  const { t } = useTranslation(translationNamespaces.forgotPasswordSuccess);
  return { message: t('message') };
};
