import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './Login.module.css';

export function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <div className={css.formContainer}>
        <label className={css.label}>
          Email
          <input className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            autoComplete="off"
          />
        </label>
        <button className={css.btn} type="submit">
          SIGN IN
        </button>
        <a className={css.link} href="#">
          Don't have an account? Sign Up
        </a>
      </div>
    </form>
  );
}
