import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export default function RequireAuth(){
    const { hasAuth } = useAuth();
    const location = useLocation();

    if(!hasAuth){
        return <Navigate to='/login' state={{ from: location }} replace/>;
    }
    
    return <Outlet/>;
};