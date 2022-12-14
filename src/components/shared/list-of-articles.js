import React from 'react';
import { Avatar } from "@mui/material";
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

export const ListOfArticles = ({articles,saved = false}) => {

    const navigate = useNavigate();

    return(
        <React.Fragment>
            {articles && articles.map((_, index) => 
                <div className="cursor-pointer w-full bg-white my-4 rounded-xl h-fit p-6" key={index}
                onClick={() => navigate('/logged/articles/'.concat(index))}>
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
                            <img src={window.location.origin + "/Rectangle2323.png"} 
                            className="w-full h-full object-cover"
                            alt=""/>
                        </div>
                    </div>
                        
                    <div className="bg-[#EFF0F6] h-px w-full my-2"/>

                    <section className="w-full flex justify-between items-center text-xs font-semibold text-sm pt-0.5">
                        <div className='flex flex-row items-center gap-1 cursor-pointer'>
                            <MenuBookOutlinedIcon sx={{fontSize : '18px'}}/> <span className="text-[#828282]">288</span>
                        </div>
                        <div className='flex flex-row items-center gap-1 cursor-pointer'>
                            <ShareIcon sx={{fontSize : '18px'}}/> <span className="text-[#828282]">988</span>
                        </div>
                        <div className='flex flex-row items-center gap-1 cursor-pointer'>
                            <FavoriteBorderIcon sx={{fontSize : '18px'}}/> <span className="text-[#828282]">100</span>
                        </div>
                        <div className='flex flex-row items-center gap-1 cursor-pointer'>
                        {!saved ?
                            <BookmarksOutlinedIcon sx={{fontSize : '18px'}}/> 
                            :
                            <BookmarkRoundedIcon sx={{fontSize : '18px', color:'#610BEF'}}/> 

                        }
                            <span className="text-[#828282]">98</span>
                        </div>
                    </section>
                </div>
            )}
        </React.Fragment>
    );
}