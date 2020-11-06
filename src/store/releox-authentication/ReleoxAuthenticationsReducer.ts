import { ReleoxAuthenticationsActionReturnType } from './ReleoxAuthenticationsActionReturnType';
import ReleoxAuthenticationsActionType from './ReleoxAuthenticationsActionType';

export default class ReleoxAuthenticationsReducer {
  private static initState = {
    isLoading: false,
    error: '',
    user: {} as any,
  };

  public static reducer(
    state = ReleoxAuthenticationsReducer.initState,
    action: ReleoxAuthenticationsActionReturnType
  ): typeof state {
    switch (action.type) {
      case ReleoxAuthenticationsActionType.IS_LOADING:
        return {
          ...state,
          isLoading: action.payload.isLoading,
        };

      case ReleoxAuthenticationsActionType.SET_USER:
        return {
          ...state,
          user: action.payload.user,
        };

      case ReleoxAuthenticationsActionType.SET_ERROR:
        return {
          ...state,
          error: action.payload.error,
        };

      default:
        return state;
    }
  }
}
