import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { useNavigate } from 'react-router-dom';

let currentOTPIndex = 0;
export const EnterOTPForm = () => {

    const [otp, setOTP] = React.useState(new Array(5).fill(""));
    const [open,setOpen] = React.useState(false);
    const otpRef = React.useRef(null);
    const [val, setVal] = React.useState([]);
    const [activeOtpIndex, setActiveOtpIndex] = React.useState(0);

    const navigate = useNavigate();

    const onChangeInput = (e) => {
        const array = [];
        array.push(e.target.value);
        setVal([...array]);
        setOpen(true);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate('/personal-info');
    }
    const handleOtpInputChange = ({target}) => {
        const { value } = target;
        //getting the last value inside the index; and updating the otp value array using the index from the map
       const newOTP = [...otp];
       newOTP[currentOTPIndex] = value.substring(value.length- 1);
       //if statement to determine if input will forward focus or backward focus
        if(!value) setActiveOtpIndex(currentOTPIndex - 1);
        else  setActiveOtpIndex(currentOTPIndex + 1);
       setOTP(newOTP); 
    }

    const handleKeyEvent = ({key}, index) =>{
        currentOTPIndex = index;
        if(key === "Backspace") setActiveOtpIndex(currentOTPIndex - 1);
    }

    React.useEffect(() => {

        otpRef.current?.focus();

    },[activeOtpIndex]);

    return(
        <div className="w-11/12 md:w-fit h-auto p-12 h-fit bg-white rounded-2xl lg:shadow-sm my-16">
            <div className="text-center">
                <p className="capitalize text-[#05C731] font-semibold text-2xl pt-2">Email Verification</p>
                <br/>
                <p className="text-[#67676D] text-xs font-md">A verification code has been sent to</p>
                <span className="text-[#4A4A4E] font-semibold text-xs">"michealchukwudi@gmail.com"</span>
            </div>

            <div className='mt-12'>
                <form onSubmit={onSubmitHandler}>
                    <div className='w-full flex justify-center items-center'>
                        {
                            otp && otp.map((_, index) =>

                                <input type="text" 
                                key={index}
                                onChange={(e) => handleOtpInputChange(e)}
                                className='w-12 p-2.5 rounded-lg 
                                bg-[#F5F5FC] m-1 border 
                                focus:outline-none
                                focus:border-[#05C731]
                                text-lg text-black font-semibold text-center'
                                ref={index === activeOtpIndex ? otpRef : null}
                                value={otp[index]}
                                onKeyDown={(e) => handleKeyEvent(e, index)}/>
                            )
                        }
                    </div>
                    {/* <section className="w-auto">
                        <input type={'text'} maxLength={5} className="input" onChange={onChangeInput} ref={otpRef}/>
                    </section> */}

                    <p className='text-center text-xs py-8'>Didn't receive any code? <Link to="/enter-otp" className='text-[#05C731] font-semibold'>Resend Code</Link></p>

                    <input type="submit" className='
                    w-full 
                    text-center 
                    bg-gradient-to-r from-[#06E037] to-[#04AD2B] 
                    text-xs text-white
                    cursor-pointer
                    p-3.5
                    my-4 rounded-lg hover:shadow-lg transition-shadow duration-300 delay-200'
                    value={"Verify account"}
                    />
                </form>
            </div>
        </div>
    );
}