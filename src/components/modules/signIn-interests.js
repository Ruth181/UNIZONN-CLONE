import React from 'react';
import AuthLayoutComponent from "../layouts/auth-layout";
import SearchIcon from '@mui/icons-material/Search';

export const SelectInterests = () => {
    const [interests, setInterests] = React.useState(["Entertainment","Scholarship","Religion","Technology Innovation","Debates","Business","Culture","Music","Politics","Business","Social Life","Government"]);
    const [selectedInterests, setSelectedInterests] = React.useState([]);
    //prev.filter(interest => interest !== data)
        console.log('interest', selectedInterests);
    return (
        <React.Fragment>
            <AuthLayoutComponent>
                <div className='my-8 w-11/12 md:w-4/5 lg:w-1/3 h-auto bg-white rounded-2xl shadow-sm flex justify-center py-8'>
                    <div className='w-4/5'>
                        <div className='text-center'>
                            <p className='capitalize text-[#05C731] font-semibold text-2xl pt-2'>Set your area of interest</p>
                            <p className='text-[#67676D] text-sm font-md py-2'>Select a minimum of five (5) and maximum of seven (7)  topics you are interested in to help Unizonn personalize your experience.</p>
                        </div>

                        <div className='mt-6 mb-4 flex justify-center'>
                           <div className='bg-[#EFF0F6] rounded-lg flex flex-row items-center px-4'>
                                <SearchIcon sx={{color : '#6E7191', fontSize:'25px'}}/>
                                <input type={'search'} placeholder="Search interest" className="bg-[#EFF0F6] text-sm rounded-lg p-2.5"/>
                           </div>
                        </div>

                        <div className='mt-12 flex justify-center'>
                            <div className='w-10/12 flex flex-wrap gap-x-1 gap-y-4'>
                                {interests && interests.map((data,index) => 
                                    <div onClick={() => setSelectedInterests((prev) => [...prev,data])} 
                                    className={selectedInterests && selectedInterests.find((name) => name === data)? 
                                        'p-4 rounded-full bg-[#EFF0F6] font-semibold text-xs w-fit h-fit cursor-pointer'
                                        :'p-4 rounded-full border border-[#D9DBE9] font-semibold text-xs w-fit h-fit cursor-pointer' }
                                    key={index}>{data}
                                    </div>
                                )}
                            </div>
                        </div>

                        <input type="submit" 
                        className={selectedInterests.length >= 5 ?
                            'capitalize my-4 w-full text-center bg-gradient-to-r from-[#06E037] to-[#04AD2B] text-xs text-white cursor-pointer p-3.5 my-6 rounded-lg hover:shadow-lg transition-shadow duration-300 delay-200'
                            :'capitalize my-4 w-full text-center bg-[#EFF0F6] text-xs text-gray-500 p-3.5 my-6 rounded-lg'
                        }
                            value={`Save interest ${selectedInterests.length}`}/>
                    </div>
                </div>
            </AuthLayoutComponent>
        </React.Fragment>
    );
}

