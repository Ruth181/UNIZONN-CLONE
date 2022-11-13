import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import './auth.css';
import {useNavigate} from 'react-router-dom';

/**TOP BAR OR NAV BAR FOR AUTHENTICATION */

export const UnizonnTopBarComponent = () => {

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
                <div className='w-fit h-auto flex lg:hidden'>
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3333 19.4997V22.1663H2.66667V19.4997H17.3333ZM24 10.1663V12.833H0V10.1663H24ZM21.3333 0.833008V3.49967H6.66667V0.833008H21.3333Z" fill="#09121F"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}