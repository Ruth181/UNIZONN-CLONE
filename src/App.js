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


function App() {
  return (
    <div>
      {/* <AuthenticationBar/> */}
        <Routes>
          <Route exact path='/' element={<LogInModule/>}></Route>
          <Route path='/signUp' element={<SignUpModule/>}></Route>
          <Route path='/personal-info' element={<PersonalInfoModule/>}></Route>
          <Route path='/enter-otp' element={<OtpModule/>}></Route>
          <Route path='/upload-image' element={<UploadProfilePicturePage/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
