import MainLayout from './layouts/MainLayout';
import UsersPage from './pages/UsersPage';
import SingleUserPage, { userLoader } from './pages/SingleUserPage';
import CreateUserPage from './pages/CreateUserPage';
import UpdateUserPage from './pages/UpdateUserPage';
import ContactPage from './pages/ContactPage';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const App: React.FC = () => {

  // Delete Job
  const deleteUser = async (id: string): Promise<void> => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    });

    if(res.ok) {
      window.alert("User was deleted on the jsonplaceholder api.")
    }

    return;
  };
    
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<MainLayout />} >
        <Route index element= { <UsersPage /> } />
        <Route path='/:id' element={ <SingleUserPage deleteUser={ deleteUser } /> } loader={ userLoader } />
        <Route path='/create-user' element={ <CreateUserPage /> } />
        <Route path='/update-user' element={ <UpdateUserPage /> } />
        <Route path='/contact' element={ <ContactPage /> } />
      </Route>
    )
  );

  return <RouterProvider router={router} />
  
};

export default App;
