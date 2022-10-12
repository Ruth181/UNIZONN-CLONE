import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { IconButton } from '@mui/material';
import React from 'react';

export const PersonalInfoForm = () => {
    const [select, setSelect] = React.useState({
        countryDropdown : false,
        roleDropdown : false,
        levelDropdown : false,
        deptDropdown : false
    });

    const toggleCountryDropdown = () => {
        setSelect({...select, countryDropdown : !select.countryDropdown});
    }

    
    const toggleRoleDropdown = () => {
        setSelect({...select, roleDropdown : !select.roleDropdown});
    }

    const toggleLevelDropdown = () => {
        setSelect({...select, levelDropdown : !select.levelDropdown});
    }

    const toggleDeptDropdown = () => {
        setSelect({...select, dept : !select.dept});
    }

    return(
        <div className="my-8 
        w-11/12 md:w-4/5 lg:w-3/5
        xl:w-1/2 
        p-8 h-auto bg-white 
        rounded-2xl shadow-sm">

            <div className="my-4">
                <p className="capitalize text-[#05C731] font-semibold text-2xl">Personal Information</p>
                <p className="text-[#67676D] py-2 text-sm font-md">Join millions of students connecting on <br/> unizonn</p>
            </div>
            <div className="mt-8">
                <form>
                    {/* Group 1 */}
                    <div className="flex flex-col md:flex-row gap-4 items-center mb-2">
                        <div className="w-full md:w-1/2">
                            <p className="text-[#6E7191] font-semibold text-xs">First Name</p>
                            <div className="w-full rounded-lg bg-[#F5F5FC] my-2">
                                <input type="text" className="w-full h-full py-3 px-4 rounded-lg bg-[#F5F5FC] focus:outline-none" required/>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2">
                            <p className="text-[#6E7191] font-semibold text-xs">Last Name</p>
                            <div className="w-full rounded-lg bg-[#F5F5FC] my-2">
                                <input type="text" className="w-full h-full py-3 px-4 rounded-lg bg-[#F5F5FC] focus:outline-none" required/>
                            </div>
                        </div>
                    </div>
                    {/* Group 2 */}
                    <div className="flex flex-col md:flex-row gap-4 items-center mb-2">
                        <div className="w-full md:w-1/2">
                            <p className="text-[#6E7191] font-semibold text-xs">Country</p>
                            <div className="w-full rounded-lg bg-[#F5F5FC] my-2 flex-between items-center gap-2">
                                <input 
                                type="text" 
                                className="w-10/12 h-full py-3 px-4 
                                rounded-lg bg-[#F5F5FC] focus:outline-none" 
                                required/>

                                <IconButton onClick={toggleCountryDropdown}>
                                    <KeyboardArrowDownRoundedIcon sx={{color : '#101011'}}/>
                                </IconButton>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2">
                            <p className="text-[#6E7191] font-semibold text-xs">Role</p>
                            <div className="w-full rounded-lg bg-[#F5F5FC] my-2 flex-between items-center gap-2">
                                <input 
                                type="text" 
                                className="w-10/12 h-full py-3 px-4 
                                rounded-lg bg-[#F5F5FC] focus:outline-none" 
                                readOnly/>

                                <IconButton onClick={toggleRoleDropdown}>
                                    <KeyboardArrowDownRoundedIcon sx={{color : '#101011'}}/>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    {/* Group 3 */}
                    <div className="flex flex-col md:flex-row gap-4 items-center mb-2">
                        <div className="w-full md:w-1/2">
                            <p className="text-[#6E7191] font-semibold text-xs">Institution</p>
                            <div className="w-full rounded-lg bg-[#F5F5FC] my-2">
                                <input type="text" className="w-full h-full py-3 px-4 rounded-lg bg-[#F5F5FC] focus:outline-none" required/>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2">
                            <p className="text-[#6E7191] font-semibold text-xs">Level</p>
                            <div className="w-full rounded-lg bg-[#F5F5FC] my-2 flex-between items-center gap-2">
                                <input 
                                type="text" 
                                className="w-10/12 h-full py-3 px-4 
                                rounded-lg bg-[#F5F5FC] focus:outline-none" 
                                readOnly/>

                                <IconButton onClick={toggleLevelDropdown}>
                                    <KeyboardArrowDownRoundedIcon sx={{color : '#101011'}}/>
                                </IconButton>
                            </div>
                        </div>

                    </div>
                    {/* Group 4 */}
                    <div>
                        <div className="w-full md:w-1/2">
                            <p className="text-[#6E7191] font-semibold text-xs">Select Department</p>
                            <div className="w-full rounded-lg bg-[#F5F5FC] my-2 flex-between items-center gap-2">
                                <input 
                                type="text" 
                                className="w-10/12 h-full py-3 px-4 
                                rounded-lg bg-[#F5F5FC] focus:outline-none" 
                                readOnly/>

                                <IconButton onClick={toggleDeptDropdown}>
                                    <KeyboardArrowDownRoundedIcon sx={{color : '#101011'}}/>
                                </IconButton>
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-1/2'>
                        <input type="submit" className='
                        w-full 
                        text-center 
                        bg-gradient-to-r from-[#06E037] to-[#04AD2B] 
                        text-xs text-white
                        cursor-pointer
                        p-3.5
                        rounded-lg hover:shadow-lg transition-shadow duration-300 delay-200 mt-8'
                        value={"Register"}
                        />
                    </div>
                </form>        
            </div>
        </div>
    );
}