/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import translationNamespaces from '../../releox-t-namespaces';

interface Body {
  password: string;
}

type OnValidate = (token: string) => void;
type OnSubmit = (body: Body, token: string) => void;
type IsLoadingSelector = (state: any) => boolean;
type IsValidTokenSelector = (state: any) => boolean;

interface ResetPassword {
  errorMessage: string;
  onSubmit: (body: Body) => void;
  isValidToken: boolean;
  isLoading: boolean;
}

export default (
  onValidate: OnValidate,
  onSubmit: OnSubmit,
  isValidTokenSelector: IsValidTokenSelector,
  isLoadingSelector: IsLoadingSelector
): ResetPassword => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { t } = useTranslation(translationNamespaces.resetPassword);

  // Local states
  const [errorMessage, setErrorMessage] = useState('');
  const [accessToken, setAccessToken] = useState('');

  // Selectors
  const isLoading = useSelector(isLoadingSelector);
  const isValidToken = useSelector(isValidTokenSelector);

  /**
   * Handle submit
   */
  useEffect(() => {
    // Find token from from search query
    const match = location.search.match(/access_token=[a-zA-Z0-9]*/);

    if (!match) {
      // Set error message if not match found
      setErrorMessage(t('missingToken'));
    } else {
      // Get token form string
      const token = match[0].split('=')[1];

      // Set it to state
      setAccessToken(token);

      // call on validate action
      dispatch(onValidate(token));
    }
  }, [dispatch, onValidate, location, t]);

  /**
   * Handle submit
   */
  const handleSubmit = useCallback(
    (body: Body) => {
      // Call on submit with body and access token
      dispatch(onSubmit(body, accessToken));
    },
    [dispatch, onSubmit, accessToken]
  );

  return { errorMessage, onSubmit: handleSubmit, isValidToken, isLoading };
};
