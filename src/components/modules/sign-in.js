import AuthLayoutComponent from '../layouts/auth-layout';
import { SignUpForm } from '../forms/signup-form';
import React from 'react';


const SignUpModule = () => {
    return(
        <React.Fragment>
            <AuthLayoutComponent>
                <SignUpForm/>
            </AuthLayoutComponent>
        </React.Fragment>
    );
}

export default SignUpModule;