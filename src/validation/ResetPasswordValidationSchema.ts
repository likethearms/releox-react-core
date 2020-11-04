import Yup from 'yup';

export default Yup.object().shape({
  password: Yup.string().min(8).required(),
});
