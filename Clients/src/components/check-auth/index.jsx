import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { path } from 'path';
const CheckAuth = ({isAuthenticated,user,}) => {
    const location = useLocation();
 if(!isAuthenticated  && !(loaction.path.pathname.incl)){
    return <Navigate to="/"/>
 }

  return (
    <div>
      
    </div>
  )
}

export default CheckAuth;
