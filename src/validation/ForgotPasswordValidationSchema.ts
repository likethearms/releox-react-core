import Yup from '../utils/YupI18n';

export default Yup.object().shape({
  password: Yup.string().email().required(),
});
