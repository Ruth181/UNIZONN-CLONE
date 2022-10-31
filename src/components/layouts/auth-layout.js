import { AuthenticationBar } from "../top-bars/authentication-topbar";
import React from 'react';

const AuthLayoutComponent = ({children}) => {

    return(
        <React.Fragment>
            <AuthenticationBar/>
            <div className="flex justify-center min-h-screen lg:bg-[#E5E5E5]">
                {children}
            </div>
        </React.Fragment>
    );
}

export default AuthLayoutComponent;