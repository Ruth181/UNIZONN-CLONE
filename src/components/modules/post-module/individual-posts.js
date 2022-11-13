import React, {useState} from "react";
import { Avatar, IconButton } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { Link } from 'react-router-dom';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const IndividualPosts = ({posts}) => {
    const [openComments, setComments] = useState({
        text :'',
        openIndex :0,
        like :false
    });
    const [comment, setComment] = useState([]);
    const [share, setShare] = useState(false);

    if(!posts){
        return(
            <>
            </>
        );
    }
    return(
        <React.Fragment>
            {posts.map((_,i) => 
                <div key={i} className="w-full">
                    <div className="p-8 rounded-xl w-full h-fit bg-white mb-4">
                    <section className="flex justify-between items-center gap-4">
                        <div className="flex flex-row gap-2">
                            <Avatar src={window.location.origin + "/Avatar.png"} sx={{width : 50, height :50}}/>
                            <div className="text-[#8D8D8D] text-sm">
                                <p className="text-[#000000] font-semibold py-0.5">Richard&nbsp;Ozoemene</p>
                                <p className="text-xs">Computer&nbsp;Science&nbsp;-&nbsp;UNN,&nbsp;Enugu.</p>
                            </div>
                        </div>
                        <p className="text-xs text-[#8D8D8D]">30m&nbsp;<span className="text-xl font-bold text-black">...</span></p>
                    </section>
                    <section className="text-sm text[#4A4A4E] py-4">
                        <p>
                            Students Protesting over ASUU strike extensioon.
                            The whole street of Abuja and Lagos is littered with students protesting with play card.
                            The crowd here in Lagos is very heavy!
                        </p>
                        <br/>
                        <p>#FederalGovtHereUs</p>
                        <p>
                            Source: www.nigeriatribune.com
                        </p>

                        <Link href="/" passHref className="text-[#05C731] text-xs font-bold">
                            Students protesting all over the country over ASUU Strike...
                        </Link>
                    </section>

                    <section className="w-full rounded-xl">
                        <img src={window.location.origin + "/post.png"} className="w-full h-auto" alt=""/>
                    </section>

                    <section className="flex justify-between items-center text-black font-bold text-xs py-4">
                        <p>200&nbsp;Likes</p>
                        <p>30&nbsp;Comments</p>
                    </section>
                    <hr/>

                    <section className="flex justify-between items-center text-xs mt-4">
                        <p className="cursor-pointer"><FavoriteBorderRoundedIcon sx={{fontSize : '18px'}}/> <span>&ensp;Like</span></p>
                        <p className="cursor-pointer" onClick={() => setComments({...openComments, openIndex : i,like : true})}>
                            {openComments.like ?
                            <FavoriteIcon sx={{fontSize : '18px', color : '#E61B00'}}
                            onClick={() => setComments({...openComments, like : false})}/> 
                            :
                            <SmsOutlinedIcon sx={{fontSize : '18px', color : '#6118D9'}}/>}
                            <span>&ensp;Comment</span>
                        </p>
                        <p className="cursor-pointer relative"
                            onClick={() => setShare(!share)}>
                            <ReplyRoundedIcon sx={{fontSize : '18px', rotate:'180deg', color:'#188BF5'}}/>
                            <span>&ensp;Share</span>

                            {share && 
                            <div className="w-fit shadow-lg rounded-xl p-4 bg-white absolute">
                                <p className="text-black font-bold">Share&nbsp;to</p>
                                <section className="flex flex-row items-center gap-1 my-2">
                                    <ReplyRoundedIcon sx={{fontSize : '18px', rotate:'180deg', color:'#000'}}/> 
                                    <span>Share&nbsp;with&nbsp;Friends&nbsp;&&nbsp;Connection</span>
                                </section>
                                <section className="flex flex-row items-center gap-1 mt-2 mb-4">
                                    <NoteAltOutlinedIcon sx={{fontSize : '18px', rotate:'180deg', color:'#000'}}/> 
                                    <span>Share&nbsp;your&nbsp;thoughts</span>
                                </section>

                                <hr/>
                                <p className="py-2 font-bold">Share&nbsp;your&nbsp;social&nbsp;media</p>

                                <div className="flex flex-row items-center gap-2">
                                    <IconButton onClick={() => setShare(false)}>
                                        <FacebookOutlinedIcon sx={{color : '#1877F2'}}/>
                                    </IconButton>
                                    <IconButton onClick={() => setShare(false)}>
                                        <InstagramIcon sx={{color : '#F77F34'}}/>
                                    </IconButton>
                                    <IconButton onClick={() => setShare(false)}>
                                        <TwitterIcon sx={{color : '#1877F2'}}/>
                                    </IconButton>
                                </div>
                            </div>
                            }
                        </p>
                    </section>
                   
                    
                </div>
                {openComments.openIndex === i && 
                    <div className="my-8 w-full max-h-[42rem] overflow-y-auto rounded-xl bg-white py-8 flex justify-center">
                        <div className="w-[85%]">
                            <div className="flex justify-between items-center">
                                <p className="text-xl font-bold">Comments</p>
                                <div className="px-4 py-2 rounded bg-[#F5F5FC] cursor-pointer">
                                    <CloseRoundedIcon/>
                                </div>
                            </div>
                            <div className="w-11/12 py-4">
                                <div className="w-full flex flex-row gap-4">
                                    <Avatar src={window.location.origin + '/Avatar.png'}/>
                                    <div className="w-4/5">
                                        <p className="text-xs font-bold py-2">Your Comments</p>
                                        <form onSubmit={(e) => {
                                            e.preventDefault();
                                            setComment((prev) => [...prev, openComments.text]);
                                        }}>
                                            <div className="flex justify-between items-center bg-[#F5F5FC] rounded-xl p-2">
                                                <textarea 
                                                className="basis-11/12 focus:outline-none bg-[#F5F5FC] p-2 rounded-xl resize-none" 
                                                rows={3} 
                                                onChange={(e) => setComments({...openComments, text : e.target.value})}/>

                                                <button type="submit" className="bg-[#05C731] w-fit h-fit rounded-full p-0.5 outline-none mt-16">
                                                    <TelegramIcon sx={{color : '#fff'}}/>
                                                </button>
                                            </div>
                                        </form>
                                        
                                    </div>
                                </div>
                                {/* comments */}
                                {comment && comment.map((data,i) => 
                                <div className="w-full py-4" key={i}>
                                    <div className="flex flex-row items-center gap-2">
                                        <Avatar src={window.location.origin + '/Avatar.png'} sx={{width : '30px', height:'30px'}}/>
                                        <section>
                                            <p className="font-bold text-xs">James doe</p>
                                            <p className="text-[#6E7191] text-xs">University of Lagos</p>
                                        </section>
                                    </div>
                                    <div className="w-11/12 bg-[#F5F5FC] rounded-lg p-4 text-sm my-2">
                                        {data}
                                    </div>
                                    <section className="flex flex-row items-center gap-4 text-xs">
                                        <div className="flex flex-row items-center gap-2">
                                            <FavoriteBorderIcon sx={{width : '15px', height : '15px'}}/>
                                            <p>replies</p>
                                        </div>
                                        <div className="flex flex-row items-center gap-2">
                                            <InsertCommentOutlinedIcon  sx={{width : '15px', height : '15px'}}/>
                                            <p>comments</p>
                                        </div>
                                    </section>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                }
            </div>
            )}
        </React.Fragment>
    );
}