import { EmailVerificationOtpForm } from "../../forms/email-verfication-form";
import ForgotPasswordLayout from "../../layouts/forgot-password-layout";

const EmailVerificationModule = () => {
    return(
        <ForgotPasswordLayout>
            <EmailVerificationOtpForm/>
        </ForgotPasswordLayout>
    );
}

export default EmailVerificationModule;