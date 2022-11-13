import { Avatar } from "@mui/material";
import ArticleLayout from "../../layouts/article-layout";
import { EmbeddedArticleComponent } from "../../shared/articles-component";
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
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {Link, useLocation} from 'react-router-dom';
import React from 'react';

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
const ArticlesModuleComponent = ({leftComponent, middleComponent, rightComponent}) => {
    const location = useLocation();
    const [path, setPath] = React.useState(location.pathname);

    return(
        <ArticleLayout>
            <div className="w-11/12 min-h-screen flex flex-col lg:flex-row gap-8 my-8 z-0">
                {/* profile and navigation */}
                <div className="basis-full lg:basis-1/4 xl:basis-1/5 h-auto ">
                    {leftComponent}
                </div>

                {/* articles section */}
                <div className="basis-full lg:basis-1/2 xl:basis-[53%] rounded-2xl h-auto">
                   {middleComponent}
                </div>

                {/* friends connection section */}
                <div className={rightComponent ? 
                    "basis-full lg:basis-1/4 xl:basis-1/5 bg-white rounded-2xl h-fit p-4" : 
                    "basis-full lg:basis-1/4 xl:basis-1/5 bg-white rounded-2xl h-fit"}>
                    {rightComponent}
                </div>
            </div>
        </ArticleLayout>
    );
}

export default ArticlesModuleComponent;