import { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';
// import AuthNav from '../AuthNav/AuthNav';

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {/* <AuthNav /> */}
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
