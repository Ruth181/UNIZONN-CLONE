import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import {Link} from 'react-router-dom';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import React from 'react';


export const UploadProfilePictureComponent = () => {

    const [image, setImage] = React.useState(null);
    const [preview, setPreview] = React.useState("");

    const onChangeFile = (e) => {
        //setErrors({...errors, show : false});
        const file = e.target.files[0];
        if(file && file.type.substring(0,5) === "image"){
            setImage(file);
        }else{
            setImage(null);
        }
    }

    React.useEffect(() => {
        if(image){
            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(image);
        }else{
            setPreview(null);
        } 
    },[image]);

    return(
        <div className="w-11/12 md:w-4/5 lg:w-[28%] h-fit shadow-md rounded-2xl bg-white p-8 mt-16 flex justify-center">
            <div className='w-3/4 mb-4'>
                <p className="capitalize py-6 font-semibold text-2xl text-[#101011] text-center">
                    Upload profile 
                    <br/>
                    picture
                </p>

            <div className='mb-16 mt-10 '>
                    <div className="flex justify-center items-center">
                        <div className="w-20 h-20 bg-[#F5F5FC] 
                        rounded-full flex justify-center 
                        items-center border border-dashed
                        border-[#F5F5FC]">
                            {preview ? <img src={preview} className="w-full h-full object-cover rounded-full"/> :<PersonRoundedIcon sx={{fontSize : "35px"}}/>}
                        </div>
                    </div>
                    <input type={"file"} accept="image/*" className="hidden" id="file" onChange={onChangeFile}/>

                    <div className='flex justify-center items-center cursor-pointer' onClick={() => {
                        document.getElementById('file').click();
                    }}>
                        <AddCircleRoundedIcon sx={{color : '#05C731', border : '1px dashed #F5F5FC', borderRadius : '100%'}}/>
                    </div>
                    {/* pluse icon here */}
            </div>


                <div className='capitalize
                w-full 
                text-center 
                bg-gradient-to-r from-[#06E037] to-[#04AD2B] 
                text-xs text-white
                cursor-pointer
                p-3.5
                my-6 rounded-lg hover:shadow-lg transition-shadow duration-300 delay-200'>
                save image
                </div>
                
                <Link to={{pathname : '/interests'}} className="text-xs text-[#05C731] underline">
                    <p className='text-center'>Skip for now</p>
                </Link>
            </div>
        </div>
    );
}