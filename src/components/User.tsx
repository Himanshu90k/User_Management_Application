import { Link } from "react-router-dom";

// Define the type for the user prop
interface UserType {
    id: number;
    name: string;
    website: string;
    email: string;
}
  

const User: React.FC<{ user: UserType }> = ({user}) => {

    let alternateCard;
    if (user.id % 2 === 0) {
        alternateCard = 'alternate-card';
    }

    return (
        <>
            <div className="table-box">
                <div className={`table-container ${alternateCard}`}>
                    <p>{user.name}</p>
                    <p>{user.website}</p>
                    {/* hide this element in smaller screens */}
                    <p className="hidden-element">{user.email}</p>
                    <Link className="button" to={`/${user.id}`}>
                        View
                    </Link>
                </div>
            </div>
        </>
    )
};

export default User;