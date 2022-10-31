import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { useNavigate } from 'react-router-dom';

export const UnizonnLogo = () => {

    const navigate = useNavigate();

    return(
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
    );
}