import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success('Welcome back!');
      })
      .catch(error => {
        toast.error(
          'You have entered an incorrect email or password, please try again.'
        );
        console.log(error.message);
      });

    actions.resetForm();
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <div className={css.inputWrapper}>
          <label className={css.label}>Email</label>
          <Field className={css.input} type="email" name="email" autoFocus />
        </div>
        <div className={css.inputWrapper}>
          <label className={css.label}>Password</label>
          <Field className={css.input} type="password" name="password" />
        </div>
        <button className={css.btn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}
