import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export default function RequireAuth(){
    const { hasAuth } = useAuth();
    const location = useLocation();

    if(!hasAuth){
        return <Outlet/>;
    } else {
        return <Navigate to='/post' state={{ from: location }} replace/>;
    }
};