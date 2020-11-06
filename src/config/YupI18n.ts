import * as Yup from 'yup';
import releoxTNamespaces from '../releox-t-namespaces';

Yup.setLocale({
  mixed: {
    required: `${releoxTNamespaces.validation}:required`,
  },
  string: {
    email: `${releoxTNamespaces.validation}:email`,
  },
});

export default Yup;
