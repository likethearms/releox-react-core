import { ActionWPayload } from '../ActionInterfaces';
import ReleoxAuthenticationsActionType from './ReleoxAuthenticationsActionType';

type IsLoadingReturn = ActionWPayload<
  ReleoxAuthenticationsActionType.IS_LOADING,
  { isLoading: boolean }
>;

type SetUserReturn = ActionWPayload<
  ReleoxAuthenticationsActionType.SET_USER,
  { user: boolean }
>;

type SetErrorReturn = ActionWPayload<
  ReleoxAuthenticationsActionType.SET_ERROR,
  { error: string }
>;

export type ReleoxAuthenticationsActionReturnType =
  | IsLoadingReturn
  | SetErrorReturn
  | SetUserReturn;
