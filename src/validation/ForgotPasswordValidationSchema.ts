import Yup from 'yup';

export default Yup.object().shape({
  password: Yup.string().email().required(),
});