import { UnizonnTopBarComponent } from "../top-bars/unizonn-topbar";

const ForgotPasswordLayout = ({children}) => {

    return(
        <>
            <UnizonnTopBarComponent/>
            <div className="flex justify-center min-h-screen md:bg-[#E5E5E5]">
                {children}
            </div>
        </>
    );
}

export default ForgotPasswordLayout;