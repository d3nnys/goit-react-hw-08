import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <div className={css.inputWrapper}>
          <label />
          Username
          <Field className={css.input} type="text" name="name" autoFocus />
        </div>
        <div className={css.inputWrapper}>
          <label />
          Email
          <Field className={css.input} type="email" name="email" />
        </div>
        <div className={css.inputWrapper}>
          <label />
          Password
          <Field className={css.input} type="password" name="password" />
        </div>
        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
