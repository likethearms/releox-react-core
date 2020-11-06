import releoxTNamespaces from './releox-t-namespaces';

export default {
  fi: {
    [releoxTNamespaces.login]: {
      submit: 'Kirjaudu',
      forgotPassword: 'Unohditko salasanasi?',
      register: 'Oletko uusi? Luo tunnus!',
    },
    [releoxTNamespaces.common]: {
      email: 'Sähköposti',
      password: 'Salasana',
    },
    [releoxTNamespaces.validation]: {
      required: '{{name}} kenttä on pakollinen',
      email: '{{name}} pitää olla pätevä sähköposti osoite',
    },
  },
  en: {
    [releoxTNamespaces.login]: {
      submit: 'Login',
      forgotPassword: 'Forgot password?',
      register: 'New? Create new account!',
    },
    [releoxTNamespaces.common]: {
      email: 'Email',
      password: 'Password',
    },
    [releoxTNamespaces.validation]: {
      required: '{{name}} is required',
      email: '{{name}} must be valid email',
    },
  },
};
