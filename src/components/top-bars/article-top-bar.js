import { UnizonnLogo } from "../shared/unizonn-logo";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Avatar, Badge, IconButton } from "@mui/material";


export const ArticleTopBar = () => {
    return(
        <div className="sticky top-0 w-full shadow bg-white flex justify-center items-center z-10">
            <div className="w-11/12 flex justify-between items-center py-4">
                <UnizonnLogo/>

                <form>
                    <div className="hidden lg:w-96 bg-[#F4F6F5] lg:flex flex-row items-center gap-2 text-sm rounded-lg px-3">
                        <SearchRoundedIcon sx={{fontSize : '25px', color : '#A3A3A8'}}/>
                        <input type={'search'} placeholder="Search unizonn" className="bg-[#F4F6F5] py-3 w-full rounded-lg text-[#A3A3A8]"/>
                    </div>
                </form>
                
                <div className="flex w-auto flex-row items-center gap-4">
                    <div className="hidden lg:flex bg-[#05C731] mr-4 rounded-md cursor-pointer text-white capitalize text-white text-xs px-4 py-2.5">
                        <LaunchRoundedIcon sx={{fontSize:'15px', color:'#fff'}}/>
                        <span>&emsp;create&nbsp;new&nbsp;article</span>
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
        </div>
    );
}