import React from "react";
import {Avatar} from '@mui/material';
// import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
// import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
// import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
// import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
// import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
// import { unstable_HistoryRouter } from "react-router-dom";

export const LeftComponentForDraft = () => {
    return(
        <React.Fragment>
            <div className="p-1.5 w-fit h-fit rounded-full bg-white mb-4 cursor-pointer">
                <KeyboardArrowLeftRoundedIcon/>
            </div>

            <div className="w-full rounded-2xl bg-white h-fit p-6">
                {/* profile pic and identity */}
                <div className="flex justify-center p-4 ">
                    <div className="w-fit h-fit text-sm">
                        <div className="flex justify-center">
                            <Avatar src={window.location.origin + '/Avatar.png'} sx={{width : 60, height:60}}/>
                        </div>
                        <p className="capitalize text-black font-bold pt-2 text-center">Magdalene&nbsp;Emmanuel</p>
                        <p className="capitalize text-[#67676D] text-center text-xs">Computer&nbsp;Science&nbsp;-&nbsp;UNN,&nbsp;Enugu.</p>

                    </div>
                </div>
                {/* Following, followers and connections */}
                <div className="flex justify-center my-2">
                    <div className="w-fit flex flex-row gap-4 items-center">
                        <section className="flex flex-col">
                            <p className="text-xl text-black font-bold py-0.5">300</p>
                            <p className="text-xs text[##67676D]">Followers</p>
                        </section>
                        <section className="flex flex-col">
                            <p className="text-xl text-black font-bold py-0.5">39k</p>
                            <p className="text-xs text[##67676D]">Following</p>
                        </section>
                        <section className="flex flex-col">
                            <p className="text-xl text-black font-bold py-0.5">500</p>
                            <p className="text-xs text[##67676D]">Connections</p>
                        </section>
                    </div>
                </div>

                {/* Percentage of profile completion */}
                <div className="flex justify-center mt-6 mb-4">
                    <button
                        className="px-6 py-2 capitalize text-[#000] outline-none text-sm font-semibold border-2 duration-300 delay-200 border-[#05C731] rounded-md hover:bg-[#05C731] hover:text-white">
                        follow
                    </button>
                </div>
            </div>
            
        </React.Fragment>
    );
}