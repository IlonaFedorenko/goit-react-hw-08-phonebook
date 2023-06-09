import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { useAuth } from '../hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());
  return (
    <div className={css.block}>
      <p className={css.text}>Welcome, {user.name}</p>
      <button type="button" className={css.button} onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
