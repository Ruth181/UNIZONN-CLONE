import ArticleLayout from "../../layouts/article-layout";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { IconButton } from "@mui/material";

const DraftModule = ({leftComponent, middleComponent, rightComponent}) => {
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
                        <p className="font-bold text-2xl">Drafts</p>
                   </div>
                   <section className="basis-full h-auto">
                        {middleComponent}
                    </section>
                </section>
                
                <section className="basis-1/5 h-fit bg-white p-4 rounded-xl">
                    {rightComponent}
                </section>
            </div>
       </ArticleLayout>
    );
}

export default DraftModule;