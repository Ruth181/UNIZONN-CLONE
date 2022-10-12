import { AuthenticationBar } from "../top-bars/authentication-topbar";

const AuthLayoutComponent = ({children}) => {

    return(
        <>
            <AuthenticationBar/>
            <div className="flex justify-center min-h-screen lg:bg-[#E5E5E5]">
                {children}
            </div>
        </>
    );
}

export default AuthLayoutComponent;