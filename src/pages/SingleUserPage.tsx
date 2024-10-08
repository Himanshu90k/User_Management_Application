import {useNavigate, useParams} from 'react-router-dom';

// Define the type for user data
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

type SingleUserPageProps = {
    users: UserType[];
    deleteUser: (id: number) => Promise<void>;
};

const SingleUserPage: React.FC<SingleUserPageProps> = ( { users, deleteUser }) => {

    // filter data for the single user page
    const { id } = useParams<{ id: string }>();
    let userId: number;
        if (id !== undefined) {
          userId = parseInt(id, 10);
        }
    const user = users.find(user => user.id === userId);

    if (!user) {
        return <h1>User not found</h1>; // Handle the case where user is undefined
    }
    
    //initialize the useNavigate()
    const navigate = useNavigate(); 

    const onDeleteClick = (userId: number) => {
        const confirm = window.confirm("Are you sure you want to delete this listing?")

        if(!confirm) return;

        deleteUser(userId);
        navigate('/');
    };

    const onUpdateClick = (userId: number) => {
        navigate(`/update-user/${userId}`)
    };

    return (
        <>
            <div className="user-box">
                <div className="user-container">

                    {/* Name and Username */}
                    <h2 className="title-name">{user.name}</h2>
                    <p className="username">{`#${user.username}`}</p>
                    <hr className="line" />

                    {/* Email */}
                    <div className="email-container">
                        <h2 className="email-label">Email:</h2>
                        <p className="email">{user.email}</p>
                    </div>

                    {/* Address */}
                    <div className="address-container">
                        <h2>Address</h2>
                        <div className="address-boxes">
                            <div className="address">
                                <h3 className="label">street:</h3>
                                <p className="value">{user.address.street}</p>
                            </div>
                            <div className="address">
                                <h3 className="label">suite:</h3>
                                <p className="value">{user.address.suite}</p>
                            </div>
                            <div className="address">
                                <h3 className="label">city:</h3>
                                <p className="value">{user.address.city}</p>
                            </div>
                            <div className="address">
                                <h3 className="label">zipcode:</h3>
                                <p className="value">{user.address.zipcode}</p>
                            </div>
                        </div>
                    </div>

                    {/* Phone no */}
                    <div className="contacts-container">
                        <div className="contact">
                            <h3 className="contact-label">Phone no:</h3>
                            <p className="contact-value">{user.phone}</p>
                        </div>
                    </div>

                    {/* Website */}
                    <div className="contacts-container">
                        <div className="contact">
                            <h3 className="contact-label">Website:</h3>
                            <p className="contact-value">{user.website}</p>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="contacts-container">
                        <div className="contact">
                            <h3 className="contact-label">Company:</h3>
                            <p className="contact-value">{user.company.name}</p>
                        </div>
                    </div>

                    {/* Update - Delete button */}
                    <div className="buttons-container">
                        <button onClick={ () => onUpdateClick(user.id) }>
                            Update
                        </button>
                        <button onClick={ () => onDeleteClick(user.id) }>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            
            {/* end line */}
            <hr className='end-line' />
        </>
    )
};

export default SingleUserPage;