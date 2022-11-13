import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { IconButton } from '@mui/material';
import React from 'react';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';
import '../../App.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

export const LoginForm = () => {

    const [visibility, setVisibility] = React.useState(false);

    const togglePasswordVisibility = () => {
        setVisibility(!visibility);
    }

    const onSuccess = (res) =>{
        console.log("Login Success! Current User", res);
    }

    const onFailure = (res) =>{
        console.log("Login Failed! Current User", res);
    }

    return(

        <div className="w-11/12 my-8 md:w-4/5 lg:w-1/3 xl:w-1/4 p-8 h-auto bg-white rounded-2xl lg:shadow-sm">
            <div className="text-center">
                <p className="capitalize text-[#05C731] font-semibold text-2xl">Welcome!</p>
                <p className="text-[#67676D] py-2 text-sm font-md">Join millions of students connecting on <br/> unizonn</p>
            </div>

            {/* Usual signup form */}
            <div className="my-4">
                <form>
                    <div className="flex flex-col my-2">
                        <p className="text-[#6E7191] font-semibold text-xs">Email Address</p>
                        <div className="w-full rounded-lg bg-[#F5F5FC] my-2">
                            <input type="email" className="w-full h-full py-3 px-4 rounded-lg bg-[#F5F5FC] focus:outline-none" required/>
                        </div>
                    </div>
                    <div className="flex flex-col my-2">
                        <p className="text-[#6E7191] font-semibold text-xs">Password</p>
                        <div className="w-full rounded-lg bg-[#F5F5FC] my-2 flex-between items-center gap-2">
                            <input type={visibility ? "text" : "password"} className="w-10/12 h-full py-3 px-4 rounded-lg bg-[#F5F5FC] focus:outline-none" required/>

                            <IconButton onClick={togglePasswordVisibility}>
                                {
                                    visibility ?
                                    <RemoveRedEyeOutlinedIcon/>
                                    :
                                    <VisibilityOffOutlinedIcon/>
                                }
                            </IconButton>
                        </div>
                    </div>

                    <input type="submit" className='
                    w-full 
                    text-center 
                    bg-gradient-to-r from-[#06E037] to-[#04AD2B] 
                    text-xs text-white
                    cursor-pointer
                    p-3.5
                    my-4 rounded-lg hover:shadow-lg transition-shadow duration-300 delay-200'
                    value={"Login"}
                    />
                </form>

                <div className='w-full flex justify-end'>
                    <Link to={{pathname : '/forgot-password'}} className="text-xs text-[#05C731] underline">Forgot Password</Link>
                </div>
            </div>

            {/* Alternative SignUp options Google or Facebook 
            clientid 895414821539-1aa6tsgl66vdfe01cvpekr4gmkrdutfo.apps.googleusercontent.com
            clientsecret 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*/}

            <div className='my-4'>
                <div className='w-full flex flex-row gap-2 items-center text-[10px] font-semibold'>
                    <div className='w-1/3 h-px bg-[#D9DBE9]'/>
                    <span>Or Login With</span>
                    <div className='w-1/3 h-px bg-[#D9DBE9]'/>
                </div>

                <div className='w-full'>
                    {/* <GoogleLogin
                        clientId={"895414821539-1aa6tsgl66vdfe01cvpekr4gmkrdutfo.apps.googleusercontent.com"}
                        buttonText="Sign up with google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                        className={"google-login-btn"}
                    /> */}
                    <button 
                    disabled={true}
                    className='w-full 
                    text-xs text-white
                    cursor-wait
                    py-3
                    px-6 flex flex-row gap-8 items-center
                    my-4 rounded-lg hover:shadow-lg transition-shadow duration-300 delay-200
                    bg-[#1877F2] disabled:bg-[#D9DBE9] disabled:text[#4E4B66] disabled:shadow-none'>
                        <FacebookIcon sx={{background : 'inherit'}}/>
                        <p className='text-center font-semibold'>Login&nbsp;with&nbsp;facebook</p>
                    </button>
                    <button 
                    disabled={true}
                    className='w-full 
                    text-xs text-white
                    cursor-wait
                    py-3
                    px-6 flex flex-row gap-8 items-center
                    my-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 delay-200
                    border border-2-[#EFF0F6]
                    bg-white disabled:bg-[#D9DBE9] disabled:text[#4E4B66] disabled:shadow-none
                    text-black'>
                        <GoogleIcon sx={{background : 'inherit'}}/>
                        <p className='text-center font-semibold'>Login&nbsp;with&nbsp;Google</p>
                    </button>
                    <div className='text-xs pt-6 text-center'><span>Don't have an account? </span>
                        <Link to={{pathname : '/sign-up'}} className="text-[#05C731] font-semibold">SignUp</Link>
                    </div>
                </div>
            </div>

        </div>
    );
}