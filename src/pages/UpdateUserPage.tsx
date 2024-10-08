import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

// Define the user type for updation on jsonPlaceholder 
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

interface FormData {
    name: string;
    username: string;
    email: string;
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    phone: string;
    website: string;
    company: string;
}

type UpdateUserPageProps = {
    users: UserType[];
    updateUser: (updatedUser: UserType) => Promise<void>;
};

const UpdateUserPage:React.FC<UpdateUserPageProps> = ({ users, updateUser }) => {

    // find user for the update user page
    const { id } = useParams<{ id: string }>();
    let userId: number;
        if (id !== undefined) {
          userId = parseInt(id, 10);
        }
    const user = users.find(user => user.id === userId);

    if (!user) {
        return <h1>User not found</h1>; // Handle the case where user is undefined
    }

    // initialize the useNavigate
    const navigate = useNavigate();

    const onSubmitClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const updatedUser = {
        id: userId,
        name : formData.name,
        username : formData.username,
        email: formData.email,
        address: {
            street: formData.street,
            suite: formData.suite,
            city: formData.city,
            zipcode: formData.zipcode,
            geo: {
                lat: "",
                lng: "",
            }
        },
        phone: formData.phone,
        website: formData.website,
        company: {
            name: formData.company,
            catchPhrase: "",
            bs: ""
        }
    }

        updateUser(updatedUser);
        return navigate(`/${user.id}`);

    }

    const initialValues = {
        name: user.name,
        username: user.username,
        email: user.email,
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
        phone: user.phone,
        website: user.website,
        company: user.company.name,
    };

    const [ formData, setFormData ] = useState<FormData>(initialValues);

    const handleChange = (fieldName: keyof FormData, newValue: string) => {
      setFormData((prevState) => ({
        ...prevState,
        [fieldName]: newValue
      }))
    }

    return (
        <form onSubmit={onSubmitClick}>
            <div className="user-box">
                <div className="user-container">

                    {/* Name and Username */}
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={e => handleChange('name', e.target.value)}
                        className="title-name"
                    />
                    <input 
                        type="text"
                        name="username"
                        placeholder="#username"
                        value={formData.username}
                        onChange={e => handleChange('username', e.target.value)}
                        className="username"
                    />
                    <hr className="line" />

                    {/* Email */}
                    <div className="email-container">
                        <label htmlFor="email" className="email-label">Email:</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={e => handleChange('email', e.target.value)}
                            className="email"
                            placeholder="abc@email.com"
                            required
                        />
                    </div>

                    {/* Address */}
                    <div className="address-container">
                        <h2>Address</h2>
                        <div className="address-boxes">
                            <div className="address">
                                <label htmlFor="street" className="label">street:</label>
                                <input 
                                    type="text" 
                                    id="street" 
                                    name="street" 
                                    placeholder="9th st"
                                    value={formData.street}
                                    onChange={e => handleChange('street', e.target.value)}
                                    className="value"
                                />
                            </div>
                            <div className="address">
                                <label htmlFor="suite" className="label">suite:</label>
                                <input 
                                    type="text"
                                    id="suite" 
                                    name="suite" 
                                    placeholder="ab-mall"
                                    value={formData.suite}
                                    onChange={e => handleChange('suite', e.target.value)}
                                    className="value"
                                />
                            </div>
                            <div className="address">
                                <label htmlFor="city" className="label">city:</label>
                                <input 
                                    type="text"
                                    id="city"
                                    name="city"
                                    placeholder="new delhi"
                                    value={formData.city}
                                    onChange={e => handleChange('city', e.target.value)}
                                    className="value"
                                />
                            </div>
                            <div className="address">
                                <label htmlFor="zipcode" className="label">zipcode:</label>
                                <input 
                                    type="text"
                                    id="zipcode"
                                    name="zipcode"
                                    placeholder="11893"
                                    value={formData.zipcode}
                                    onChange={e => handleChange('zipcode', e.target.value)}
                                    className="value"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Phone no */}
                    <div className="contacts-container">
                        <div className="contact">
                            <label htmlFor="phone" className="contact-label">Phone no:</label>
                            <input 
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="1234567890"
                                value={formData.phone}
                                onChange={e => handleChange('phone', e.target.value)}
                                className="contact-value"
                            />
                        </div>
                    </div>

                    {/* Website */}
                    <div className="contacts-container">
                        <div className="contact">
                            <label htmlFor="website" className="contact-label">Website:</label>
                            <input 
                                type="text"
                                id="website"
                                name="website"
                                placeholder="website.com"
                                value={formData.website}
                                onChange={e => handleChange('website', e.target.value)}
                                className="contact-value"
                            />
                        </div>
                    </div>

                    {/* Company */}
                    <div className="contacts-container">
                        <div className="contact">
                            <label htmlFor="company" className="contact-label">Company:</label>
                            <input 
                                type="text"
                                id="company"
                                name="company"
                                placeholder="microsoft"
                                value={formData.company}
                                onChange={e => handleChange('company', e.target.value)}
                                className="contact-value"
                            />
                        </div>
                    </div>

                    {/* Submit button */}
                    <div className="buttons-container">
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            
            {/* end line */}
            <hr className='end-line' />
        </form>
    )
};

export default UpdateUserPage;