import { Avatar } from "@mui/material";
import React from 'react';
import { Link } from "react-router-dom";

export const DraftsComponent = ({drafts}) => {

    if(!drafts){
        return(
            <div>

            </div>
        );
    }
    return(
        <React.Fragment>
            {drafts.map((_, i) =>
                <div className="w-full bg-white rounded-xl p-8 my-4" key={i}>
                    <div className="flex flex-row items-center gap-2 text-sm">
                        <Avatar src={window.location.origin + '/Avatar.png'}/>
                        <p className="text-black font-semibold">James Doe
                        <span>.</span>
                        <span className="text-[#93939A] text-xs">5&nbsp;mins&nbsp;ago</span>
                        </p>
                    </div>  
                    <div className="text-sm py-2">
                    Egestas elit in proin scelerisque tortor dolor. Aliquet eget ante auctor nisl aliquam dapibus tortor. Arcu, tellus ut tortor nulla a fames maecenas vivamus. Faucibus interdum vitae, vel lorem ultrices. Et tincidunt dui est velit. Donec morbi sed ut ultrices pretium.
                    &nbsp;<Link to={`/drafts/${i}`} className="text-[#05C731] text-xs font-semibold underline">Read&nbsp;more</Link>
                    </div>  
                </div>
            )}
        </React.Fragment>
    );
}