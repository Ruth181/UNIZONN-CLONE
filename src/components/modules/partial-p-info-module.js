import AuthLayoutComponent from '../layouts/auth-layout';
import React from 'react';
import { PartialPersonalInfoForm } from '../forms/partial-p-info-form';


const PartialPersonalInfoModule = () => {
    return(
        <React.Fragment>
            <AuthLayoutComponent>
                <PartialPersonalInfoForm/>
            </AuthLayoutComponent>
        </React.Fragment>
    );
}

export default PartialPersonalInfoModule;