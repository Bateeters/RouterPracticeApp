import { Link } from "react-router-dom";

const ErrorPage = () => {
    return(
        <div>
            <h1>On no, this route doesn't exist!</h1>
            <Link to="/">Go back to Home Page</Link>
        </div>
    );
};

export default ErrorPage;