import User from "../components/User";
import Spinner from "../components/Spinner";

// Define the user type based on the user state
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

interface UserListProps {
  users: UserType[];  // Expect an array of UserType
  loading: boolean;
}

const UsersPage: React.FC<UserListProps> = ({users, loading}) => {
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
      {/* Render all the users - show loading until users array is fetched */}
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