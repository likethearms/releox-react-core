/* eslint-disable @typescript-eslint/no-empty-function,@typescript-eslint/no-explicit-any */
import React from 'react';

declare global {
  interface Window {
    API_ENDPOINT: string;
  }
}

export interface ReleoxConfig {
  scenes: {
    login: {
      showForgotPasswordLink: boolean;
      emailFieldName: string;
    };
  };

  api: {
    urls: {
      login: string;
      logout: string;
    };
  };

  routes: {
    home: string;
    register: string;
    forgotPassword: string;
  };
}

export const releoxInitialContext: ReleoxConfig = {
  scenes: {
    login: {
      showForgotPasswordLink: true,
      emailFieldName: 'email',
    },
  },

  routes: {
    home: '/',
    register: '/register',
    forgotPassword: '/forgot-password',
  },

  api: {
    urls: {
      login: `${window.API_ENDPOINT}/Members/login`,
      logout: `${window.API_ENDPOINT}/Members/logout`,
    },
  },
};

type SetCallback = (config: ReleoxConfig) => any;

export default React.createContext<[ReleoxConfig, SetCallback]>([
  releoxInitialContext,
  () => {},
]);
