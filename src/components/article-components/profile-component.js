import { Avatar } from "@mui/material";
import React from 'react';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import WysiwygOutlinedIcon from '@mui/icons-material/WysiwygOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from "react-router-dom";

const links = [
    {
        title : 'articles',
        icon : <ArticleOutlinedIcon sx={{color : '#67676D', fontSize : '15px'}}/>,
        link : '/logged/articles'
    },
    {
        title : 'posts',
        icon : <WysiwygOutlinedIcon sx={{color : '#67676D', fontSize : '15px'}}/>,
        link : '/posts'
    },
    {
        title : 'catchup',
        icon : <PlaceOutlinedIcon sx={{color : '#67676D', fontSize : '15px'}}/>,
        link : '/catchup'
    },
    {
        title : 'messages',
        icon : <ForumOutlinedIcon sx={{color : '#67676D', fontSize : '15px'}}/>,
        link : '/message'
    },
    {
        title : 'saved articles',
        icon : <TurnedInNotOutlinedIcon sx={{color : '#67676D', fontSize : '15px'}}/>,
        link : '/saved-articles',
    },
    {
        title : 'drafts',
        icon : <ModeOutlinedIcon sx={{color : '#67676D', fontSize : '15px'}}/>,
        link : '/drafts',
    },
    {
        title : 'ask unizonn',
        icon : <HelpOutlineOutlinedIcon sx={{color : '#67676D', fontSize : '15px'}}/>,
        link : '/help',
    },
    {
        title : 'Invite friends',
        icon : <GroupsOutlinedIcon sx={{color : '#67676D', fontSize : '15px'}}/>,
        link : '/invite',
    },
    {
        title : 'profile',
        icon : <PersonOutlineOutlinedIcon sx={{color : '#67676D', fontSize : '15px'}}/>,
        link : '/profile'
    },
    {
        title : 'sign out',
        icon : <LogoutOutlinedIcon sx={{color : '#67676D', fontSize : '15px'}}/>,
        link : '/sign-in'
    },
];

export const ProfileDisplay = () => {

    const [path, setPath] = React.useState(window.location.href);

    return(
        <React.Fragment>
        <div className="w-full rounded-2xl bg-white h-fit p-4">
            <div className="flex justify-end">
                <button
                    className="px-4 py-2 capitalize text-[#05C731] outline-none text-xs font-semibold border-2 duration-300 delay-200 border-[#05C731] rounded-xl hover:bg-[#05C731] hover:text-white">
                    update&nbsp;profile
                </button>
            </div>
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
                        <p className="text-2xl text-black font-bold py-0.5">300</p>
                        <p className="text-xs text[##67676D]">Followers</p>
                    </section>
                    <section className="flex flex-col">
                        <p className="text-2xl text-black font-bold py-0.5">39k</p>
                        <p className="text-xs text[##67676D]">Following</p>
                    </section>
                    <section className="flex flex-col">
                        <p className="text-2xl text-black font-bold py-0.5">500</p>
                        <p className="text-xs text[##67676D]">Connections</p>
                    </section>
                </div>
            </div>

            {/* Percentage of profile completion */}
            <div className="flex justify-center mt-6">
                <div className="w-fit bg-[#FFF2F1] px-6 py-4 rounded-xl">
                    <p className="text-black font-semibold text-center text-xs">60%&nbsp;Profile&nbsp;Completion</p>
                </div>
            </div>
        </div>

        <div className="hidden w-full my-4 lg:flex flex-col gap-2">
            {links && links.map(({title, icon, link}, index) => 
                <Link key={index} to={link}>
                    <div className={path.includes(link) ? "bg-[white] text-[#000] font-bold text-xs flex flex-row gap-2 p-4 border-l-8 border-[#05DA36] rounded-md capitalize"
                        :"bg-[white] text-[#67676D] text-xs flex flex-row gap-2 p-4 rounded-md capitalize"}>
                        <div>{icon}</div>
                        <p>{title}</p>
                    </div>
                </Link>
            )}
        </div>
        </React.Fragment>
    );
}