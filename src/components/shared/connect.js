import { Link } from 'react-router-dom';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

export const Connect = () => {
    return(
        <div className="w-11/12 lg:w-1/3 xl:w-[30%] h-fit backdrop p-8 my-8">
            <p className="break-all text-white text-xl xl:text-2xl font-semibold leading-relaxed">
            Connect to your mates 
            <br/>studying the same
            <br/>course and have the 
            <br/>same interest who can
            <br/> help you
            </p>

            <Link to="/sign-up">
                <button className='
                text-center text-white font-medium 
                px-4 py-2.5 my-6
                rounded-lg
                bg-gradient-to-r from-[#06E037] to-[#04AD2B] 
                hover:shadow-lg text-sm transition-shadow duration-300 delay-200 border-none'>
                Get started</button>
            </Link>

            <div className="flex flex-row gap-1 items-center text-white text-sm">
                <p>Or use the social login</p><ArrowForwardRoundedIcon sx={{fontSize : '17px'}}/>
            </div>
        </div>
    );
}