import { useLoaderData, useNavigate, LoaderFunction } from 'react-router-dom';

type SingleUserPageProps = {
    deleteUser: (id: string) => Promise<void>;
};

// Define the type for address data
type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
};

// Define the type for company data
type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
};

// Define the type for user data
type User = {
    id: string;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
};

const SingleUserPage: React.FC<SingleUserPageProps> = ( { deleteUser }) => {

    const user = useLoaderData() as User;
    const navigate = useNavigate();

    const onDeleteClick = (userId: string) => {
        const confirm = window.confirm("Are you sure you want to delete this listing?")

        if(!confirm) return;

        deleteUser(userId);
        navigate('/');
    };

    const onUpdateClick = () => {
        navigate('/update-user')
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
                                <h3>street:</h3>
                                <p>{user.address.street}</p>
                            </div>
                            <div className="address">
                                <h3>suite:</h3>
                                <p>{user.address.suite}</p>
                            </div>
                            <div className="address">
                                <h3>city:</h3>
                                <p>{user.address.city}</p>
                            </div>
                            <div className="address">
                                <h3>zipcode:</h3>
                                <p>{user.address.zipcode}</p>
                            </div>
                        </div>
                    </div>

                    {/* Phone no */}
                    <div className="contacts-container">
                        <div className="contact">
                            <h3>Phone no:</h3>
                            <p>{user.phone}</p>
                        </div>
                    </div>

                    {/* Website */}
                    <div className="contacts-container">
                        <div className="contact">
                            <h3>Website:</h3>
                            <p>{user.website}</p>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="contacts-container">
                        <div className="contact">
                            <h3>Company:</h3>
                            <p>{user.company.name}</p>
                        </div>
                    </div>

                    {/* Update - Delete button */}
                    <div className="buttons-container">
                        <button onClick={ () => onUpdateClick() }>
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

const userLoader: LoaderFunction = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json();
    return data;
}

export {SingleUserPage as default, userLoader };