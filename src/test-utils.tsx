import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';

export const actionTemplate = (): { type: string } => ({
  type: 'TEST_ACTION',
});

interface ChildrenProp {
  children: JSX.Element;
}

export type StoreWrapper = ({ children }: ChildrenProp) => JSX.Element;

interface StoreHelper<T> {
  store: MockStoreEnhanced<T>;
  wrapper: StoreWrapper;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStoreHelpers = <T extends {}>(state: T): StoreHelper<T> => {
  const mockStore = configureMockStore<T>();
  const store = mockStore(state);
  return {
    store,
    wrapper: ({ children }: ChildrenProp): JSX.Element => (
      <Provider store={store}>{children}</Provider>
    ),
  };
};
