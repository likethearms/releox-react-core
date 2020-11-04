import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

type OnLogout = () => void;

export default (onLogout: OnLogout): void => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onLogout());
  }, [dispatch, onLogout]);
};
