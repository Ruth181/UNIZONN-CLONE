import LandingPageLayout from "../layouts/landing-page-layout";
import {Link} from 'react-router-dom';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Connect } from "../shared/connect";

const LandingPageModule = () => {
    return(
        <LandingPageLayout>
            <div className="w-full h-full flex  flex-col lg:flex-row lg:gap-64 xl:gap-[26rem] lg:py-24 mb-8">
                <Connect/>
                <div className="w-11/12 lg:w-[35%] xl:w-1/3 h-fit bg-white rounded-2xl lg:shadow-md p-8">
                    <p className="text-[#05C731] text-xl font-semibold">Welcome</p>
                    <p className="text-[#67676D] text-sm py-2">Join millions of students connecting on Unizonn</p>

                    <div className="mt-16 mb-8 flex flex-col">
                        <div className="mb-4 cursor-pointer shadow p-3 flex flex-row gap-4 md:gap-8 items-center text-sm text-black bg-white border border-[#EFF0F6] rounded-xl">
                            <div><MailOutlineRoundedIcon/></div>
                            <p className="capitalize font-semibold text-center">Sign Up with Email</p>
                        </div>

                        <div className="mb-4 cursor-pointer shadow p-3 flex flex-row gap-4 md:gap-8 items-center text-sm text-white bg-[#1877F2] rounded-xl">
                            <div><FacebookIcon sx={{backgroundColor:"inherit"}}/></div>
                            <p className="capitalize font-semibold text-center">Facebook</p>
                        </div>

                        <div className="mb-4 cursor-pointer shadow p-3 flex flex-row gap-4 md:gap-8 items-center text-sm text-black bg-white border border-[#EFF0F6] rounded-xl">
                            <div><GoogleIcon/></div>
                            <p className="capitalize font-semibold text-center">Sign Up with Google</p>
                        </div>
                    </div>

                    <p className="text-xs py-1">By clicking on Register, you agree to Unizonn's</p>
                    <div className="flex flex-row items-center">
                        <Link to="/privacy-policy">
                            <p className="text-xs text-[#05C731] font-semibold">Privacy Policies <span className="text-black font-semibold">&</span></p>
                        </Link>
                        <Link to="/terms">
                            <p className="text-xs text-[#05C731] font-semibold">Terms</p>
                        </Link>
                    </div>
                </div>
            </div>
        </LandingPageLayout>
    );
}

export default LandingPageModule;