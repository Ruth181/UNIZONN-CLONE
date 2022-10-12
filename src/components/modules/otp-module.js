import AuthLayoutComponent from '../layouts/auth-layout';
import React from 'react';
import { EnterOTPForm } from '../forms/otp-form';


const OtpModule = () => {
    return(
        <React.Fragment>
            <AuthLayoutComponent>
                <EnterOTPForm/>
            </AuthLayoutComponent>
        </React.Fragment>
    );
}

export default OtpModule;