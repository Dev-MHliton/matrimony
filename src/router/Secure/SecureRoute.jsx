import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../shared/Loading";

const SecureRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    // loading state handle
    if (loading) {
        return <Loading></Loading>
    }

    // user check
    if (!user) {
        return (
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />
        )
    }

    return children;
};

export default SecureRoute;