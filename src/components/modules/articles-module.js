import { Avatar, IconButton } from "@mui/material";
import React from "react";
import { Connect } from "../shared/connect";
import { AuthenticationBar } from "../top-bars/authentication-topbar";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import {Link, useSearchParams} from 'react-router-dom';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { EmbeddedArticleComponent } from "../shared/articles-component";

const ArticlesModule = () => {

    const [topics, setTopics] = React.useState(['All','Arts&science', 'Technology', 'Entertainment', 'Politics']);
    const [searchParams] =useSearchParams();
    const [path, setPath] = React.useState('');

    React.useEffect(() => {
        const pathname = window.location.href.split('/').pop();
        setPath(pathname);
    },[window.location.href]);
   
    
    return(
        <React.Fragment>
            <AuthenticationBar/>
            <div className="w-full flex min-h-screen justify-center bg-[#E5E5E5]">
                <div className="w-11/12 flex flex-col lg:flex-row lg:gap-52 max-lg:gap-76 xl:gap-96">
                    <Connect/>
                    <EmbeddedArticleComponent articles={[0,1,2,3,4,5,6]}/>
                    {/* Articles */}
                    {/* <div className="w-full lg:w-1/2 xl:w-2/5 my-8">
                       <div className="w-full flex justify-center bg-white rounded-xl h-fit">
                            <div className="w-11/12 flex flex-col pt-4">
                                <div className="w-full flex justify-between">
                                    <p className="text-3xl font-bold">Articles</p>
                                    <div className="px-2 h-fit py-0.5 flex flex-row items-center border border-[#E5E5E5] rounded-md">
                                        <p className="font-semibold">Today</p>
                                        <IconButton>
                                            <KeyboardArrowDownRoundedIcon sx={{color:"#05C731"}}/>
                                        </IconButton>
                                    </div>
                                </div>
                                {/* articles Topics 
                                <div className="max-w-full overflow-x-auto flex flex-nowrap gap-4 mt-4 px-5">
                                    {topics && topics.map((topic,index) => 
                                        
                                        <Link to={`/articles/${topic}`} key={index}>
                                            <div 
                                                className={
                                                path.includes(topic) || topic.includes(path.substring(0,4))?
                                                "pt-2 pb-4 px-2 text-[#05C731] border-b border-b-[#05C731] text-sm" 
                                                :"text-[#8D8D8D] text-sm pt-2 pb-4 px-2"}>
                                                    <span>{topic}</span>
                                            </div>
                                        </Link>
                                    )}
                                </div>
                            </div>
                       </div>
                        {articles && articles.map((_, index) => 
                        <div className="w-full bg-white my-4 rounded-xl h-fit p-6" key={index}>
                            <div className="flex flex-row gap-2 items-center">
                                <Avatar src={window.location.origin + '/Avatar.png'}/>
                                <p className="text-sm font-semibold">jane Doe<span className="text-[#93939A]"> . </span><span className="text-[#93939A] font-medium">5 Min Ago</span></p>
                            </div>
                            <div className="w-full flex flex-col md:flex-row gap-2 mt-4">
                                <div className="w-full md:w-3/5 flex flex-col gap-2">
                                    <div className="w-fit p-2 text-xs text-[#4E4B66] bg-[#E5E5E5] rounded">
                                        <span>Technology</span>
                                    </div>
                                    <p className="font-bold text-lg">Role of Technology in Distance Learning Education</p>
                                    <p className="text-[#67676D] text-sm">Definition of Distance Learning The nature of the "information age" and communication are changing rapidly. Read More</p>
                                </div>

                                <div className="w-full md:w-2/5 border border-[#E5E5E5]">
                                    <img src={window.location.origin + "/Rectangle2323.png"} className="w-full h-full object-cover"/>
                                </div>
                            </div>
                                
                            <div className="bg-[#EFF0F6] h-px w-full my-2"/>

                            <div className="w-full flex justify-between items-center text-sm pt-0.5">
                                <p><BookmarksOutlinedIcon sx={{fontSize : '18px'}}/> <span className="text-[#828282]">988</span></p>
                                <p><ShareIcon sx={{fontSize : '18px'}}/> <span className="text-[#828282]">988</span></p>
                                <p><FavoriteBorderIcon sx={{fontSize : '18px'}}/> <span className="text-[#828282]">988</span></p>
                                <p><BookmarkBorderIcon sx={{fontSize : '18px'}}/> <span className="text-[#828282]">988</span></p>
                            </div>
                        </div>
                        )}
                    </div> */}
                </div>
            </div>
        </React.Fragment>
    );
}

export default ArticlesModule;