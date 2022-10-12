import AuthLayoutComponent from '../layouts/auth-layout';
import { LoginForm } from '../forms/login-form';
import React from 'react';


const LogInModule = () => {
    return(
        <React.Fragment>
            <AuthLayoutComponent>
                <LoginForm/>
            </AuthLayoutComponent>
        </React.Fragment>
    );
}

export default LogInModule;