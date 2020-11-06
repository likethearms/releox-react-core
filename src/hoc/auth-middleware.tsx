import Axios from 'axios';
import React, {
  ElementType,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'react-router-redux';
import ReleoxConfigContext from '../config/ReleoxConfigContext';
import { TOKEN_STORAGE_KEY, USER_ID_STORAGE_KEY } from '../Globals';

export default (
  WrapperComponent: ElementType,
  LoadingComponent: ElementType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
) => (props: any): JSX.Element => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const [config] = useContext(ReleoxConfigContext);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(USER_ID_STORAGE_KEY);
    dispatch(push('/login'));
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    const userId = localStorage.getItem(USER_ID_STORAGE_KEY);

    if (userId && token) {
      const url = config.api.urls.validateToken
        .replace(':userId', userId)
        .replace(':accessToken', token);

      Axios.get(url)
        .then(({ data }) => {
          Axios.defaults.headers.common.Authorization = token;
          setUser(data);
          setIsLoading(false);
        })
        .catch(() => {
          logout();
        });
    } else {
      logout();
    }
  }, [config.api.urls.validateToken, logout]);

  if (isLoading) return <LoadingComponent />;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <WrapperComponent {...props} user={user} />;
};
