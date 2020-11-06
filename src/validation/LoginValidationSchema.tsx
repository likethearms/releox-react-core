import Yup from '../utils/YupI18n';

export const EmailLoginValidation = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const UsernameLoginValidation = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});
