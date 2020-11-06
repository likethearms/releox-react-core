/* eslint-disable @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any */
import { push } from 'react-router-redux';
import LoginBody from '../../hooks/login/LoginBody';
import releoxTNamespaces from '../../releox-t-namespaces';
import { ReduxDispatch } from '../ActionInterfaces';
import { ReleoxAuthenticationsActionReturnType } from './ReleoxAuthenticationsActionReturnType';
import ReleoxAuthenticationsActionType from './ReleoxAuthenticationsActionType';
import ReleoxAuthenticationsEffect from './ReleoxAuthenticationsEffect';

export default class ReleoxAuthenticationsAction {
  public static isLoading(
    isLoading: boolean
  ): ReleoxAuthenticationsActionReturnType {
    return {
      type: ReleoxAuthenticationsActionType.IS_LOADING,
      payload: { isLoading },
    };
  }

  public static setUser(user: any): ReleoxAuthenticationsActionReturnType {
    return {
      type: ReleoxAuthenticationsActionType.SET_USER,
      payload: { user },
    };
  }

  public static setError(error: string): ReleoxAuthenticationsActionReturnType {
    return {
      type: ReleoxAuthenticationsActionType.SET_ERROR,
      payload: { error },
    };
  }

  public static login(url: string, body: LoginBody) {
    return (dispatch: ReduxDispatch): void => {
      dispatch(ReleoxAuthenticationsAction.isLoading(true));
      ReleoxAuthenticationsEffect.login(url, body)
        .then(() => {
          dispatch(ReleoxAuthenticationsAction.isLoading(false));
          dispatch(push('/'));
        })
        .catch((error) => {
          const tNamespace = releoxTNamespaces.login;
          const credError = `${tNamespace}:credentialError`;
          const serverError = `${tNamespace}:serverError`;
          const networkError = `${tNamespace}:networkError`;

          let message = credError;
          if (!error.response) message = networkError;
          else if (error.response.status === 500) message = serverError;

          dispatch(ReleoxAuthenticationsAction.setError(message));
          dispatch(ReleoxAuthenticationsAction.isLoading(false));
        });
    };
  }
}
