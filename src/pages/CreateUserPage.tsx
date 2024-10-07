import { useNavigate } from "react-router-dom";


const CreateUserPage = () => {

    const navigate = useNavigate();
    const onSubmitClick = () => {

        navigate('/');
    };

    return (
        <form>
            <div className="user-box">
                <div className="user-container">

                    {/* Name and Username */}
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="title-name"
                    />
                    <input 
                        type="text"
                        name="username"
                        placeholder="#username"
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
                                className="contact-value"
                            />
                        </div>
                    </div>

                    {/* Submit button */}
                    <div className="buttons-container">
                        <button onClick={ () => onSubmitClick() }>
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