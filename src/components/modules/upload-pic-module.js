import AuthLayoutComponent from "../layouts/auth-layout";
import { UploadProfilePictureComponent } from "../other-components/upload-profile-pic";

const UploadProfilePicturePage = () => {
    return(
        <AuthLayoutComponent>
            <UploadProfilePictureComponent/>
        </AuthLayoutComponent>
    );
}

export default UploadProfilePicturePage;