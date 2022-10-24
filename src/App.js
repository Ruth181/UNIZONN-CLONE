import './App.css';
import { SIgnUpForm } from './components/forms/signup-form';
import { AuthenticationBar } from './components/top-bars/authentication-topbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUpModule from './components/modules/sign-in';
import LogInModule from './components/modules/log-in';
import { PersonalInfoForm } from './components/forms/personalnfo-form';
import PersonalInfoModule from './components/modules/personalInfo';
import OtpModule from './components/modules/otp-module';
import UploadProfilePicturePage from './components/modules/upload-pic-module';
import { SelectInterests } from './components/modules/signIn-interests';
import PartialPersonalInfoModule from './components/modules/partial-p-info-module';
import LandingPageModule from './components/modules/landing-page-module';
import TermsAndConditionsModule from './components/modules/terms-conditions';
import PoliciesModule from './components/modules/policies-module';
import ArticlesModule from './components/modules/articles-module';
import ForgotPasswordModule from './components/modules/forgot-password-module/forgot-password-module';
import EmailVerificationModule from './components/modules/forgot-password-module/email-verification';
import ResetFormerPasswordModule from './components/modules/forgot-password-module/reset-password';
import SuccessfulModule from './components/modules/forgot-password-module/successful';


function App() {
  return (
    <div>
      {/* <AuthenticationBar/> */}
        <Routes>
          <Route exact path='/' element={<LandingPageModule/>}></Route>
          <Route path='/sign-in' element={<LogInModule/>}></Route>
          <Route path='/sign-up' element={<SignUpModule/>}></Route>
          <Route path='/personal-info' element={<PersonalInfoModule/>}></Route>
          <Route path='/enter-otp' element={<OtpModule/>}></Route>
          <Route path='/upload-image' element={<UploadProfilePicturePage/>}></Route>
          <Route path='/signIn-interests' element={<SelectInterests/>}></Route>
          <Route path="/partial-personal-info" element={<PartialPersonalInfoModule/>}></Route>
          <Route path='/terms' element={<TermsAndConditionsModule/>}></Route>
          <Route path='/privacy-policy' element={<PoliciesModule/>}></Route>
          <Route path='/forgot-password' element={<ForgotPasswordModule/>}></Route>
          <Route path="/forgot-password-email-verification" element={<EmailVerificationModule/>}></Route>
          <Route path="/forgot-password-reset" element={<ResetFormerPasswordModule/>}></Route>
          <Route path="/successful" element={<SuccessfulModule/>}></Route>
          <Route path='/articles/:topic' element={<ArticlesModule articles={[0,1,2,3,4,5,6]}/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
