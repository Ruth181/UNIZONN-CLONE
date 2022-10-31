import React from "react";
import { ArticleTopBar } from "../top-bars/article-top-bar";

const ArticleLayout = ({children}) => {
    return(
        <React.Fragment>
            <ArticleTopBar/>
            <div className="bg-[#E5E5E5] min-h-screen flex justify-center">
                {children}
            </div>
            
        </React.Fragment>
    );
}

export default ArticleLayout;