export default class ReleoxAuthenticationsSelector {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
  public static selectIsLoading(state: any): boolean {
    return state.releoxAuthentication.isLoading;
  }
}
