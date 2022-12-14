import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import './auth.css';
import {Link, useNavigate} from 'react-router-dom';

/**TOP BAR OR NAV BAR FOR AUTHENTICATION */

export const AuthenticationBar = () => {

    const navigate = useNavigate();

    return(
        <div className="w-full h-20 bg-white flex justify-center items-center sticky top-0 z-10 shadow-md lg:shadow-none">
            <div className="w-11/12 flex justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                    {/* unizonn Logo */}
                    <div className="
                    bg-gradient-to-r from-[#06E037] to-[#04AD2B] 
                    w-10 h-10 shadow-lg rounded-full 
                    flex justify-center items-center cursor-pointer" onClick={()=> navigate('/')}>
                        <BubbleChartIcon sx={{
                            color : '#fff',
                            fontSize : '30px'
                        }}/>
                    </div>
                    {/* Unizonn */}
                    <div className='font-semibold text-sm'>
                        <span>Unizonn</span>
                    </div>
                </div>
                <div className='hidden lg:flex w-fit h-auto'>
                    <div className='flex flex-row items-center gap-8 text-sm capitalize'>
                        <Link to="/articles/:topic" className='hover:underline'>
                            <span className='font-semibold'>articles</span>
                        </Link>

                        <Link to="/sign-in" className='hover:underline'>
                            <span className='font-semibold'>sign in</span>
                        </Link>

                        <Link to="/sign-up">
                            <button className='shadow-lg
                            text-center text-white font-medium 
                            px-4 py-2.5
                            rounded-lg
                            bg-gradient-to-r from-[#06E037] to-[#04AD2B] 
                            hover:shadow-2xl transition-shadow duration-300 delay-200 border-none'>
                            sign up</button>
                        </Link>

                    </div>
                </div>
                <div className='w-fit h-auto flex lg:hidden'>
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3333 19.4997V22.1663H2.66667V19.4997H17.3333ZM24 10.1663V12.833H0V10.1663H24ZM21.3333 0.833008V3.49967H6.66667V0.833008H21.3333Z" fill="#09121F"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}