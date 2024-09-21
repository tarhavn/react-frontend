import { Link } from "react-router-dom";

const LoginPage = () => {
    return(
        <>
        <h1>Please log in</h1>
        <div>
            <p>Don't have an account</p>
            <Link to='/create-account'>Create an account</Link>           
        </div>
        </>
    );
}

export default LoginPage;