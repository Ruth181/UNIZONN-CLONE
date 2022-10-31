import { Avatar } from '@mui/material';
import React from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const ConnectFriends = () => {
    return(
        <React.Fragment>
            <p className="text-lg text-black font-bold">Friends to Network</p>
            {/* friends list */}
            {[0,1,2,3,4].map((_,index) => 
            <div key={index} className="w-full flex flex-row gap-2 my-6">
                <Avatar src={window.location.origin + '/Avatar.png'}/>
                <div>
                    <p className="text-sm font-bold py-0.5">Magdalene Emmanuel</p>
                    <p className="text-[#67676D] text-xs">Computer&nbsp;Science&nbsp;-&nbsp;UNN,&nbsp;Enugu.</p>
                    <div className="flex flex-row my-1 items-center gap-1">
                        <div className="flex flex-row">
                            {[0,1,2].map((_,index) => <Avatar 
                            key={index} 
                            src={window.location.origin + '/Avatar1.png'}
                            sx={{width : 24, height : 24, padding : 0, margin : 0}}/>
                            )}
                        </div>
                        <p className="text-[10px] text-[#67676D]">Connections</p>
                    </div>
                    <button
                        className="px-4 py-1.5
                        capitalize text-[#000] 
                        outline-none text-xs 
                        font-semibold border-2 
                        duration-300 delay-200 
                        border-[#05C731] rounded-md
                        hover:bg-[#05C731] hover:text-white my-2">
                        follow
                    </button>
                </div>
                <div className="p-px h-fit rounded-full cursor-pointer">
                    <CloseRoundedIcon sx={{
                    color : '#05C731',
                    fontSize : '13px',
                    padding : '2px',  
                    background:'#DAFEE2',
                    borderRadius : '100%'
                    }}/>
                </div>
            </div>
            )}
            <div className="bg-[#D9DBE9] text-center 
                capitalize text-xs
                text-black 
                font-semibold px-6 
                py-2.5 rounded-md">View all network
            </div>
        </React.Fragment>
    );
}