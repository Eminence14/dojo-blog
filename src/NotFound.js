import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Oops! Page not found</h2>
            <p>The requested resource is not available</p>
            <Link to = '/'>back to homepage</Link>
        </div>
    );
}
 
export default NotFound;