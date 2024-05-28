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
      .then(response => {
        console.log(response);
        toast.success('Welcome back!');
      })
      .catch(error => {
        console.log(error.message);
      });

    actions.resetForm();
  };

  const initialValues = {
    name: '',
    email: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <div className={css.inputWrapper}>
          <label className={css.label} />
          Email
          <Field className={css.input} type="email" name="email" />
        </div>
        <div className={css.inputWrapper}>
          <label className={css.label} />
          Password
          <Field className={css.input} type="password" name="password" />
        </div>
        <button className={css.btn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}
