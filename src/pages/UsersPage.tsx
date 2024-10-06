import User from "../components/User";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";

// Define the user type based on the API response
interface UserType {
    id: number;
    name: string;
    website: string;
    email: string;
}

const UsersPage: React.FC = () => {

    const [ users, setUsers ] = useState<UserType[]>([]);;
    const [ loading, setLoading ] = useState<boolean>(true);

    useEffect(() => { 
        // fetch data when the website refreshes
        const fetchJobs = async () => {
            const apiUrl = 'https://jsonplaceholder.typicode.com/users';
            try {
              const res = await fetch(apiUrl);
              const data = await res.json();
              setUsers(data);
            } catch (error) {
              console.log('Error fetching data', error);
            } finally {
              setLoading(false);
            }
        }
    
        fetchJobs ();
    }, []);

    return (
        <>
        <div className="title-box">
            <div className="title-container">
                <h2 className="title">USERS</h2>
            </div>
        </div>
        <div className="table-box">
            <div className="table-container">
                <h3>Name</h3>
                <h3>Website</h3>
                {/* hide this element in smaller screens */}
                <h3 className="hidden-element">Email</h3>
            </div>
        </div>

        {/* Render all the users */}
        {loading ? (<Spinner loading={ loading } /> ) : (
              <div className="users-container">
                {users.map( (user) => {
                  return (
                    <User key={user.id} user={user}/>
                  )
                })}
              </div>
            )}
        </>
    )
};

export default UsersPage;