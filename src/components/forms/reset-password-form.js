import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { IconButton } from '@mui/material';

export const ResetPasswordForm = () => {

    const [visibility, setVisibility] = React.useState({
        password : false,
        confirm :false
    });
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setVisibility({...visibility, password : !visibility.password});
    }

    const toggleConfirmPasswordVisibility = () => {
        setVisibility({...visibility, confirm : !visibility.confirm});
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate('/successful');
    }

    return(
        <div className="w-11/12 md:w-fit xl:w-[25%] h-auto p-8 h-fit bg-white rounded-2xl lg:shadow-sm mt-8">
            <div className="text-center">
                <p className="capitalize text-[#05C731] font-semibold text-2xl pt-2">Enter New password</p>
                <br/>
                <p className="text-[#67676D] text-xs font-md">Enter your new password here to have access to your Unizonn Account</p>
            </div>

            <div className='mt-12'>
                <form onSubmit={onSubmitHandler}>
                    <div className='w-full flex flex-col gap-2'>
                        <div className="flex flex-col my-2">
                            <p className="text-[#6E7191] font-semibold text-xs">Password</p>
                            <div className="w-full rounded-lg bg-[#F5F5FC] my-2 flex-between items-center gap-2">
                                <input type={visibility.password ? "text" : "password"} className="w-4/5 h-full py-4 px-4 rounded-lg bg-[#F5F5FC] focus:outline-none" required/>

                                <IconButton onClick={togglePasswordVisibility}>
                                    {
                                        visibility.password ?
                                        <RemoveRedEyeOutlinedIcon/>
                                        :
                                        <VisibilityOffOutlinedIcon/>
                                    }
                                </IconButton>
                            </div>
                        </div>

                        <div className="flex flex-col my-2">
                        <p className="text-[#6E7191] font-semibold text-xs">Confirm Password</p>
                        <div className="w-full rounded-lg bg-[#F5F5FC] my-2 flex-between items-center gap-2">
                            <input type={visibility.confirm ? "text" : "password"} className="w-4/5 h-full py-4 px-4 rounded-lg bg-[#F5F5FC] focus:outline-none" required/>

                            <IconButton onClick={toggleConfirmPasswordVisibility}>
                                {
                                    visibility.confirm ?
                                    <RemoveRedEyeOutlinedIcon/>
                                    :
                                    <VisibilityOffOutlinedIcon/>
                                }
                            </IconButton>
                        </div>
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
                    value={"Verify account"}
                    />
                </form>
            </div>
        </div>
    );
}