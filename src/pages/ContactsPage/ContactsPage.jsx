import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import TaskEditor from '../../components/TaskEditor/TaskEditor';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/selectors';
import ContactList from '../../components/ContactList/ContactList';

export default function TasksPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <p>Your tasks</p>
      {/* <TaskEditor /> */}
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
