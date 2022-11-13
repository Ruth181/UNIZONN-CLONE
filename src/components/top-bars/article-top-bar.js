import { UnizonnLogo } from "../shared/unizonn-logo";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Avatar, Backdrop, Badge, IconButton } from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import VideoFileOutlinedIcon from '@mui/icons-material/VideoFileOutlined';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import {useState} from 'react';

export const ArticleTopBar = () => {
    const [backdrop, setBackDrop] = useState(false);
    const [search, setSearch]  = useState(false);

    return(
        <div className="sticky top-0 w-full shadow bg-white flex justify-center items-center z-10">
            <div className="w-11/12 flex justify-between items-center py-4">
                <UnizonnLogo/>

                <form>
                    <div className="hidden lg:w-96 bg-[#F4F6F5] lg:flex flex-row items-center gap-2 text-sm rounded-lg px-3"
                    onClick={() => setSearch(!search)}>
                        <SearchRoundedIcon sx={{fontSize : '25px', color : '#A3A3A8'}}/>
                        <input type={'search'} placeholder="Search unizonn" className="bg-[#F4F6F5] py-3 w-full rounded-lg text-[#A3A3A8]"/>
                    </div>
                </form>
                
                <div className="flex w-auto flex-row items-center gap-4">
                    <div className="hidden lg:flex bg-[#05C731] mr-4 rounded-md cursor-pointer text-white capitalize text-white text-xs px-4 py-2.5"
                    onClick={() => setBackDrop(!backdrop)}>
                        <LaunchRoundedIcon sx={{fontSize:'15px', color:'#fff'}}/>
                        <span>&emsp;create&nbsp;new&nbsp;{window.location.href.includes('article') ? 'article' : 'post'}</span>
                    </div>

                    <IconButton>
                        <Badge badgeContent={4} color="error" variant="dot">
                            <PersonAddAltOutlinedIcon sx={{fontSize : '22px', color:'#000'}}/>
                        </Badge>
                    </IconButton>

                    
                    <IconButton>
                        <Badge badgeContent={4} color="error" variant="dot">
                            <NotificationsNoneOutlinedIcon sx={{fontSize : '22px',color:'#000'}}/>
                        </Badge>
                    </IconButton>

                    <div className="w-fit flex flex-row items-center">
                        <Avatar src={window.location.origin + '/Avatar.png'} sx={{ width: 30, height: 30 }}/>
                        <IconButton>
                            <KeyboardArrowDownRoundedIcon sx={{fontSize : '18px',color:'#000'}}/>
                        </IconButton>
                    </div>
                </div>
            </div>
            {search && 
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={search}
            onClick={() => setSearch(false)}>
                <div className="w-11/12 md:w-3/5 lg:w-2/5 xl:w-1/4 h-[28rem] bg-white rounded-xl p-8">
                    <div className="flex justify-between items-center gap-4">
                        <p className="font-semibold text-xl text-black">Search&nbsp;by&nbsp;Location</p>
                        <IconButton onClick={() => setSearch(!search)}>
                            <CloseRoundedIcon sx={{color : '#000'}}/>
                        </IconButton>
                    </div>

                    <div className="hidden my-2 w-full bg-[#F4F6F5] lg:flex flex-row items-center gap-2 text-xs rounded-xl px-3">
                        <SearchRoundedIcon sx={{fontSize : '30px', color : '#6E7191'}}/>
                        <input type={'search'} placeholder="Search" className="bg-[#EFF0F6] py-3 w-full rounded-xl text-[#6E7191]"/>
                    </div>
                </div>
            </Backdrop>
            }
            {backdrop &&
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={backdrop}
            onClick={() => setBackDrop(false)}>
                <div className="w-11/12 md:w-3/5 lg:w-1/2 xl:w-2/5 h-fit bg-white rounded-xl p-8">
                    <div className="flex justify-between items-center gap-4">
                        <p className="font-semibold text-xl text-black">Create Post</p>
                        <IconButton onClick={() => setBackDrop(!backdrop)}>
                            <CloseRoundedIcon sx={{color : '#000'}}/>
                        </IconButton>
                    </div>
                    <div className="flex flex-row items-center gap-2 my-2">
                        <Avatar src={window.location.origin + '/Avatar.png'} sx={{width : '30px', height:'30px'}}/>
                        <section>
                            <p className="font-bold text-xs text-black">James doe</p>
                            <p className="text-[#6E7191] text-xs">University of Lagos</p>
                        </section>
                    </div>
                    <div className="w-full bg-white h-[12rem] ">
                        <textarea className="w-full resize-none text-sm p-4" placeholder="Write your post"/>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="basis-4/5 flex justify-between items-center gap-4 bg-[#F5F5FC] rounded-lg p-2">
                        <IconButton>
                            <CameraAltOutlinedIcon sx={{fontSize : '18px'}}/>
                        </IconButton>
                        <IconButton>
                            <VideoFileOutlinedIcon sx={{fontSize : '18px'}}/>
                        </IconButton>
                        <IconButton>
                            <AddReactionOutlinedIcon sx={{fontSize : '18px'}}/>
                        </IconButton>
                        <IconButton>
                            <InsertLinkOutlinedIcon sx={{fontSize : '18px'}}/>
                        </IconButton>
                        <IconButton>
                            <PlaceOutlinedIcon sx={{fontSize : '18px'}}/>
                        </IconButton>
                        </div>
                        <button className="w-full md:w-fit outline-none bg-[#05C731] py-4 px-8 rounded-md text-white font-semibold">
                            Post
                        </button>
                    </div>
                </div>
            </Backdrop>
            }
        </div>
    );
}