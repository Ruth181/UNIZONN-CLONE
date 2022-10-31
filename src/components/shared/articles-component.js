import { AuthenticationBar } from "../top-bars/authentication-topbar";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import {Link, useSearchParams} from 'react-router-dom';
import { IconButton } from "@mui/material";
import React from 'react';
import { ListOfArticles } from "./list-of-articles";

export const EmbeddedArticleComponent = ({articles, layoutWidth = false}) => {

    const [topics, setTopics] = React.useState(['All','Arts&science', 'Technology', 'Entertainment', 'Politics']);
    const [searchParams] =useSearchParams();
    const [path, setPath] = React.useState('');

    React.useEffect(() => {
        const pathname = window.location.href.split('/').pop();
        setPath(pathname);
    },[window.location.href]);


    return (
        <div className={!layoutWidth ? "w-full lg:w-1/2 xl:w-2/5 my-8" : "w-full"}>
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
                    {/* articles Topics */}
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
                {/* Articles */}
                <ListOfArticles articles={articles}/>

            {articles.length <= 0 &&
                <div className="flex justify-center mt-24">
                    <div className="w-fit h-fit flex flex-col">
                        <img src={window.location.origin + '/vector.png'} className="object-contain"/>
                        <p className="text-center text-black font-semibold text-sm py-2">No article to display here</p>
                        <p className="text-center text-[#4A4A4E] text-sm">Expand your connection to see more articles</p>
                    </div>
                </div>
            }
        </div>
    );
}