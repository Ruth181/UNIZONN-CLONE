import ForgotPasswordLayout from "../../layouts/forgot-password-layout";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordModule = () => {

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        navigate('/forgot-password-email-verification');
    }
    return(
        <ForgotPasswordLayout>
            <div className="my-8 w-11/12 md:w-3/5 lg:w-[40%] xl:w-[30%] h-fit bg-white rounded-2xl p-12">
                <div className="flex justify-center">
                    <div className="w-40 h-40">
                        <img src={window.location.origin + '/Saly-1.png'} className="w-full h-full object-cover" alt=""/>
                    </div>
                </div>

                <p className="text-[#05C731] text-2xl font-semibold pt-4 pb-2 text-center">Forgot your password?</p>
                <p className="text-[#67676D] text-sm text-center">
                    Don’t worry! Resetting your password is easy. Just enter your email you used to register on Unizonn and we will send you a password reset code right away.
                </p>

                <div className="my-4 flex flex-col gap-2">
                    <form onSubmit={onSubmit}>
                        <div className="my-4">
                            <p className="text-[#6E7191] text-xs py-2">Email Address</p>
                            <input type="email" required className="w-full bg-[#F5F5FC] p-3 rounded-md"/>    
                        </div>

                        <input type="submit" className='
                        w-full 
                        text-center 
                        bg-gradient-to-r from-[#06E037] to-[#04AD2B] 
                        text-xs text-white
                        cursor-pointer
                        p-3.5
                        my-4 rounded-lg hover:shadow-lg transition-shadow duration-300 delay-200'
                        value={"Request Code"}
                        />
                    </form>
                </div>
            </div>
        </ForgotPasswordLayout>
    );
}

export default ForgotPasswordModule;