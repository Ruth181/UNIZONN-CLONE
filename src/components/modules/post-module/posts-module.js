import ArticleLayout from "../../layouts/article-layout";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { IconButton } from "@mui/material";

const PostsModuleComponent = ({leftComponent, middleComponent, rightComponent}) => {
    return(
       <ArticleLayout>
            <div className="w-11/12 min-h-screen flex flex-col lg:flex-row gap-8 my-8 z-0">
                {/* profile and navigation */}
                <section className="basis-full lg:basis-1/4 xl:basis-1/5 h-auto ">
                    {leftComponent}
                </section>

                {/* articles section */}
                <section className="basis-full lg:basis-3/4 rounded-2xl h-auto">
                   {/* {middleComponent} */}
                   <div className="w-full flex justify-between bg-white rounded-xl px-8 py-4">
                        <p className="font-bold text-2xl">Posts</p>
                        <div className="px-2 h-fit py-0.5 flex flex-row items-center border border-[#E5E5E5] rounded-md">
                            <p className="font-semibold">Today</p>
                            <IconButton>
                                <KeyboardArrowDownRoundedIcon sx={{color:"#05C731"}}/>
                            </IconButton>
                        </div>
                   </div>
                   <div className="w-full flex flex-col lg:flex-row gap-4 my-4">
                        <section className="basis-3/4 h-auto">
                            {middleComponent}
                        </section>

                        <section className="basis-1/5 h-fit bg-white p-4 rounded-xl">
                            {rightComponent}
                        </section>
                   </div>
                </section>
            </div>
       </ArticleLayout>
    );
}

export default PostsModuleComponent;