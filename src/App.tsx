import MainLayout from './layouts/MainLayout';
import UsersPage from './pages/UsersPage';
import SingleUserPage from './pages/SingleUserPage';
import CreateUserPage from './pages/CreateUserPage';
import UpdateUserPage from './pages/UpdateUserPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Define the user type based on the API response
interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
          lat: string;
          lng: string;
      };
  };
  phone: string;
  website: string;
  company: {
      name: string;
      catchPhrase: string;
      bs: string;
  };
}

const App: React.FC = () => {

  const [users, setUsers] = useState<UserType[]>([]);
  const [ loading, setLoading ] = useState<boolean>(true);

  useEffect(() => { 
    // fetch data when the website refreshes
    const fetchJobs = async () => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        try {
          const res = await fetch(apiUrl);
          const data: UserType[] = await res.json();
          setUsers(data);
        } catch (error) {
          console.log('Error fetching data', error);
        } finally {
          setLoading(false);
        }
    }

    fetchJobs ();
  }, []);

  // Add User
  const addUser = async (newUser: UserType): Promise<void> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    // log the res
    console.log(res);

    if(res.ok) {
      window.alert("A user was created through jsonplaceholder api.")
    }

    // Append the new user
    setUsers((prevState) => [...prevState, newUser]);

    return ;
  };

  // Delete User
  const deleteUser = async (id: number): Promise<void> => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    });

    console.log(res);

    if(res.ok) {
      window.alert("User was deleted on the jsonplaceholder api.")
    }

    // remove the user from the users state
    setUsers((prevState) => prevState.filter(user => user.id !== id));

    return;
  };

  // Update User
  const updateUser = async (updatedUser: UserType): Promise<void> => {
    const res= await fetch(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    });

    console.log(res);

    if(res.ok) {
      window.alert("User was deleted on the jsonplaceholder api.")
    }

    // update the user from the users state
    setUsers((prevState) => prevState.map(user => (user.id === updatedUser.id ? updatedUser : user)));

    return;
  }
    
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<MainLayout />} >
        <Route index element= { <UsersPage users={users} loading={loading} /> } />
        <Route path='/:id' element={ <SingleUserPage users={users} deleteUser={ deleteUser } /> } />
        <Route path='/create-user' element={ <CreateUserPage users={users} addUser={addUser} /> } />
        <Route path='/update-user/:id' element={ <UpdateUserPage users={users} updateUser={updateUser} /> } />
        <Route path='/contact' element={ <ContactPage /> } />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
  
};

export default App;
