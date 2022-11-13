import './App.css';
// import { SIgnUpForm } from './components/forms/signup-form';
// import { AuthenticationBar } from './components/top-bars/authentication-topbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUpModule from './components/modules/sign-in';
import LogInModule from './components/modules/log-in';
//import { PersonalInfoForm } from './components/forms/personalnfo-form';
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
import ArticlesModuleComponent from './components/modules/article-module/articles';
import { ProfileDisplay } from './components/article-components/profile-component';
import { EmbeddedArticleComponent } from './components/shared/articles-component';
import { ConnectFriends } from './components/article-components/connect-friends-component';
import { ReadMoreProfileReactionsComponent } from './components/article-components/article-read-more/profile-reactions';
import { ReadMoreArticle } from './components/article-components/article-read-more/article-read-more';
import PostsModuleComponent from './components/modules/post-module/posts-module';
import { IndividualPosts } from './components/modules/post-module/individual-posts';
import { DraftsComponent } from './components/modules/drafts/drafts-component';
import DraftModule from './components/modules/drafts/draft-layout';
import { LeftComponentForDraft } from './components/modules/drafts/drafts';
import { ReadMoreDraft } from './components/modules/drafts/read-more-draft';
import { SavedArticlesComponent } from './components/saved-articles/saved-articles';


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
          <Route path='/articles/:topic' element={<ArticlesModule/>}></Route>
          <Route exact path="/logged/articles" element={<ArticlesModuleComponent 
          leftComponent={<ProfileDisplay/>}
          middleComponent={ <EmbeddedArticleComponent articles={[0,1,3,4]} layoutWidth={true}/>}
          rightComponent={<ConnectFriends/>}/>}></Route>
          <Route path="/logged/articles/:article" element={<ArticlesModuleComponent 
          leftComponent={<ReadMoreProfileReactionsComponent/>}
          middleComponent={<ReadMoreArticle/>}/>}></Route>
          <Route exact path="/posts" element={<PostsModuleComponent 
          leftComponent={<ProfileDisplay/>}
          middleComponent={<IndividualPosts posts={[0,1,2]}/>}
          rightComponent={<ConnectFriends/>}/>}></Route>
          <Route exact path="/drafts" element={<DraftModule 
          leftComponent={<ProfileDisplay/>}
          middleComponent={<DraftsComponent drafts={[0,1,2]}/>}
          rightComponent={<ConnectFriends/>}/>}></Route>
          <Route path="/drafts/:draft" element={<ArticlesModuleComponent 
          leftComponent={<LeftComponentForDraft/>}
          middleComponent={<ReadMoreDraft/>}/>}></Route>
           <Route exact path="/saved-articles" element={<ArticlesModuleComponent 
          leftComponent={<ProfileDisplay/>}
          middleComponent={ <SavedArticlesComponent articles={[0,1,3,4]} layoutWidth={true}/>}
          rightComponent={<ConnectFriends/>}/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
