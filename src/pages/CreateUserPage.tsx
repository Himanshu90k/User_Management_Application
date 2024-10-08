import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Define the user type send to the jsonPlaceholder api
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

type CreateUserPageProps = {
    users: UserType[];
    addUser: (newUser: UserType) => Promise<void>;
};

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

const CreateUserPage:React.FC<CreateUserPageProps> = ({users, addUser}) => {

    const initialValues = {
        name: '',
        username: '',
        email: '',
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        phone: '',
        website: '',
        company: '',
    };

    const navigate = useNavigate();
    const [ formData, setFormData ] = useState<FormData>(initialValues);

    const handleChange = (fieldName: keyof FormData, newValue: string) => {
      setFormData((prevState) => ({
        ...prevState,
        [fieldName]: newValue
      }))
    }

    const onSubmitClick = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
    const newUser = {
        id: users.length+1,
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
            },
        },
        phone: formData.phone,
        website: formData.website,
        company: {
            name: formData.company,
            catchPhrase: "",
            bs: "",
        }
      }

      console.log(newUser);

      addUser(newUser);
      navigate('/');

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
                        required
                        minLength={3}
                        value={formData.name}
                        onChange={e => handleChange('name', e.target.value)}
                        className="title-name"
                    />
                    <input 
                        type="text"
                        name="username"
                        placeholder="#username"
                        required
                        minLength={3}
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
                                    required
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
                                    required
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
                                required
                                pattern="\d{10}"
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
                                type="url"
                                id="website"
                                name="website"
                                placeholder="website.com"
                                required
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
                                required
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

export default CreateUserPage;