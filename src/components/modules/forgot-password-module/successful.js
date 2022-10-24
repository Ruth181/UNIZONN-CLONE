import { useNavigate } from "react-router-dom";
import ForgotPasswordLayout from "../../layouts/forgot-password-layout";

const SuccessfulModule = () => {

    const navigate = useNavigate();

    return(
        <ForgotPasswordLayout>
            <div className="w-full h-screen flex justify-center mt-24">
                <div className="w-fit sm:w-[30%] md:w-[30%] md:max-xl:w-[25%]">
                    <div className="w-full flex justify-center">
                        <div className="w-44 h-44">
                            <img src={window.location.origin + "/success.png"} className="w-full h-full object-cover"/>
                        </div>
                    </div>

                    <p className="text-sm text-[#05C731] font-semibold text-center">Congratulations John</p>
                    <p className="text-[#101011] text-sm py-2 font-semibold text-center">Your have succesful reset your passoword</p>

                    <div onClick={() => navigate('/sign-in')} 
                    className="w-full
                    text-center 
                    bg-gradient-to-r from-[#06E037] to-[#04AD2B] 
                    text-xs text-white
                    cursor-pointer
                    shadow-md
                    p-3.5
                    my-4 rounded-lg hover:shadow-lg transition-shadow duration-300 delay-200">
                        Go back to login
                    </div>
                </div>

            </div>
        </ForgotPasswordLayout>
    );
}

export default SuccessfulModule;