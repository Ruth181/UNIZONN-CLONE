// import { Avatar, IconButton } from "@mui/material";
import React from "react";
import { Connect } from "../shared/connect";
import { AuthenticationBar } from "../top-bars/authentication-topbar";
//import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import {Link, useSearchParams} from 'react-router-dom';
// import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
// import ShareIcon from '@mui/icons-material/Share';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { EmbeddedArticleComponent } from "../shared/articles-component";

const ArticlesModule = () => {

    const [topics, setTopics] = React.useState(['All','Arts&science', 'Technology', 'Entertainment', 'Politics']);
    const [searchParams] =useSearchParams();
    const [path, setPath] = React.useState('');

    const direction = window.location.href;
    React.useEffect(() => {
        const pathname = window.location.href.split('/').pop();
        setPath(pathname);
    },[direction]);
   
    
    return(
        <React.Fragment>
            <AuthenticationBar/>
            <div className="w-full flex min-h-screen justify-center bg-[#E5E5E5]">
                <div className="w-11/12 flex flex-col lg:flex-row lg:gap-52 max-lg:gap-76 xl:gap-96">
                    <Connect/>
                    <EmbeddedArticleComponent articles={[0,1,2,3,4,5,6]}/>
                    
                </div>
            </div>
        </React.Fragment>
    );
}

export default ArticlesModule;