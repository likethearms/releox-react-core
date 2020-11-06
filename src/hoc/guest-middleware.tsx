import React, { ElementType, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'react-router-redux';
import { TOKEN_STORAGE_KEY, USER_ID_STORAGE_KEY } from '../Globals';

export default (
  WrapperComponent: ElementType,
  LoadingComponent: ElementType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
) => (props: any): JSX.Element => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    const userId = localStorage.getItem(USER_ID_STORAGE_KEY);

    if (userId || token) {
      dispatch(push('/'));
    } else {
      setIsLoading(false);
    }
  }, [dispatch]);

  if (isLoading) return <LoadingComponent />;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <WrapperComponent {...props} />;
};
