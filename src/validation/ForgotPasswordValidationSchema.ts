import Yup from '../config/YupI18n';

export default Yup.object().shape({
  password: Yup.string().email().required(),
});
