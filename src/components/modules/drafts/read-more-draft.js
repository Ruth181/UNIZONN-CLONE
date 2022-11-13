import { Avatar, IconButton } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import React from 'react';
// import { EmbeddedArticleComponent } from "../../shared/articles-component";
// import { ListOfArticles } from "../../shared/list-of-articles";
// import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
// import ShareIcon from '@mui/icons-material/Share';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export const ReadMoreDraft = () => {
    return(
        <React.Fragment>
            <div className="w-full rounded-2xl h-auto bg-white py-6 px-4 md:px-12">
                <div className="w-4/5 mt-4">
                    <div className="w-fit p-2 text-xs font-semibold text-[#4E4B66] bg-[#E5E5E5] rounded-lg">
                        <span>Technology</span>
                    </div>
                    <p className="text-[#000000] py-2 text-xs">Role of Technology in Distance Learing Education</p>
                    <p className="text-3xl py-4 font-bold text-[#000]">Role of Technology in Distance Learning Education</p>

                    <div className="flex flex-row items-center gap-4">
                        <Avatar src={window.location.origin + "/Avatar.png"} sx={{width : 50, height :50}}/>
                        <div className="text-[#8D8D8D] text-sm">
                            <p>Written by</p>
                            <p className="text-[#000000] font-semibold py-0.5">Richard Ozoemene&nbsp;<FiberManualRecordIcon sx={{color : '#05C731', fontSize : '10px'}}/>
                            <span className="text-xs text-[#8D8D8D] font-medium">&nbsp;6&nbsp;min&nbsp;read</span>
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-72 rounded-md my-8">
                        <img 
                        src={window.location.origin + "/Rectangle519.png"} 
                        className="w-full h-full rounded-md object-cover"
                        alt=""
                        />
                    </div>

                    <div className="text-[##101011] text-base leading-relaxed">
                        Definition of Distance Learning The nature of the "information age" and communication are changing rapidly. 
                        Technologies that were previously considered advanced are becoming commonplace and new technologies are still being developed. The nature of this trend is evident in the multitude of definitions of long distance learning. The U. S. Office of Technology Assessment defines distance learning as the "linking of a teacher and students in several geographic locations via technology that allows for interaction" (in Cartwright, 1994). According to the United States Distance Learning Association, "distance learning is the application of electronic means to education in all areas: K-12, higher education, continuing education, co rporate training, and military and government training, telemedicine and those devoted to the pursuit of lifelong learning" (USDLA, 1996). The VTEL Corporation defines interactive distance learning as usi ng "today's video technologies to reach more students, in more locations, with fewer instructors" (VTEL, 1996). The Distance Learning Homepage of Western Carolina University defines distance learning as "the delivery of instruction to the right group of people at the right time in the right place. The educator and the learner may be separated by time, distance, or both. It may or may not include technology" (WCU, 1 995). Clearly these definitions have some common ground and some differences.
                        Distance Learning - A Paradigm Shift
                    </div>

                    <div className="w-full h-96 rounded-md my-8">
                        <img src={window.location.origin + "/Rectangle2323.png"} 
                        className="w-full h-full rounded-md object-cover"
                        alt=""
                        />
                    </div>

                    <div className="text-[##101011] text-sm text-base leading-relaxed">
                        <p>
                        Definition of Distance Learning The nature of the "information age" and communication are changing rapidly. 
                        Technologies that were previously considered advanced are becoming commonplace and new technologies are still being developed. The nature of this trend is evident in the multitude of definitions of long distance learning. The U. S. Office of Technology Assessment defines distance learning as the "linking of a teacher and students in several geographic locations via technology that allows for interaction" (in Cartwright, 1994). According to the United States Distance Learning Association, "distance learning is the application of electronic means to education in all areas: K-12, higher education, continuing education, co rporate training, and military and government training, telemedicine and those devoted to the pursuit of lifelong learning" (USDLA, 1996). The VTEL Corporation defines interactive distance learning as usi ng "today's video technologies to reach more students, in more locations, with fewer instructors" (VTEL, 1996). The Distance Learning Homepage of Western Carolina University defines distance learning as "the delivery of instruction to the right group of people at the right time in the right place. The educator and the learner may be separated by time, distance, or both. It may or may not include technology" (WCU, 1 995). Clearly these definitions have some common ground and some differences.
                        Distance Learning - A Paradigm Shift.
                        </p>
                    <p>
                        Definition of Distance Learning The nature of the "information age" and communication are changing rapidly. 
                        Technologies that were previously considered advanced are becoming commonplace and new technologies are still being developed. The nature of this trend is evident in the multitude of definitions of long distance learning. The U. S. Office of Technology Assessment defines distance learning as the "linking of a teacher and students in several geographic locations via technology that allows for interaction" (in Cartwright, 1994). According to the United States Distance Learning Association, "distance learning is the application of electronic means to education in all areas: K-12, higher education, continuing education, co rporate training, and military and government training, telemedicine and those devoted to the pursuit of lifelong learning" (USDLA, 1996). The VTEL Corporation defines interactive distance learning as usi ng "today's video technologies to reach more students, in more locations, with fewer instructors" (VTEL, 1996). The Distance Learning Homepage of Western Carolina University defines distance learning as "the delivery of instruction to the right group of people at the right time in the right place. The educator and the learner may be separated by time, distance, or both. It may or may not include technology" (WCU, 1 995). Clearly these definitions have some common ground and some differences.
                        Distance Learning - A Paradigm Shift
                    </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}