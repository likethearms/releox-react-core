/* eslint-disable @typescript-eslint/no-explicit-any */
import merge from 'lodash.merge';
import React, { useCallback, useState } from 'react';
import ReleoxConfigContext, {
  ReleoxConfig,
  releoxInitialContext,
} from './ReleoxConfigContext';

interface Prop {
  children: any;
}

export default ({ children }: Prop): JSX.Element => {
  const [config, setConfig] = useState(releoxInitialContext);

  const changeState = useCallback(
    (conf: Partial<ReleoxConfig>) => {
      setConfig(merge(config, conf));
    },
    [setConfig, config]
  );

  return (
    <ReleoxConfigContext.Provider value={[config, changeState]}>
      {children}
    </ReleoxConfigContext.Provider>
  );
};
