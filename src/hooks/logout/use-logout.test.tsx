import { renderHook } from '@testing-library/react-hooks';
import { MockStoreEnhanced } from 'redux-mock-store';
import {
  actionTemplate,
  getStoreHelpers,
  StoreWrapper,
} from '../../test-utils';
import useLogout from './use-logout';

describe('use-logout', () => {
  let store: MockStoreEnhanced<unknown>;
  let wrapper: StoreWrapper;

  beforeEach(() => {
    ({ store, wrapper } = getStoreHelpers());
  });

  it('should call and dispatch passed action', () => {
    const onLogout = jest.fn(actionTemplate);
    renderHook(() => useLogout(onLogout), { wrapper });
    expect(onLogout).toBeCalledTimes(1);
    expect(store.getActions()).toHaveLength(1);
    expect(store.getActions()[0]).toHaveProperty('type', 'TEST_ACTION');
  });
});
