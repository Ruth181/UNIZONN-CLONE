import AuthLayoutComponent from '../layouts/auth-layout';
import React from 'react';
import { PersonalInfoForm } from '../forms/personalnfo-form';


const PersonalInfoModule = () => {
    return(
        <React.Fragment>
            <AuthLayoutComponent>
                <PersonalInfoForm/>
            </AuthLayoutComponent>
        </React.Fragment>
    );
}

export default PersonalInfoModule;