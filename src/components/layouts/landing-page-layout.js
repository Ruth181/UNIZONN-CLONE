import React from 'react';
import { AuthenticationBar } from '../top-bars/authentication-topbar';
//import {Landing_Background} from 'C:/Users/pc/Documents/unizon-web-app/public/Landing_Background.png';
//C:\Users\pc\Documents\unizon-web-app\public\Landing_Background.png

const LandingPageLayout = ({children}) => {
    return(
        <React.Fragment>
            <AuthenticationBar/>
            <div className='w-full z-0'>
                <div className='lg:h-screen flex justify-center'>
                    <div className='w-full md:w-11/12 lg:h-screen container'>
                        <div className='md:rounded-[3rem] content'>
                            <img 
                            src={window.location.origin + '/Landing_Background.png'} 
                            className='md:rounded-[3rem] w-full h-full object-cover'
                            alt=''/>
                        </div>
                        <div className='overlay flex justify-center'>
                            <div className='w-11/12 h-auto'>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LandingPageLayout;