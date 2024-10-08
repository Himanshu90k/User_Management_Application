import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <h2 className="error">404</h2>
            <h3 className="error-message">Error: Resource doesn't exist</h3>
            <Link className="home" to='/'>return to homepage</Link>
        </div>
    )
};

export default NotFoundPage;