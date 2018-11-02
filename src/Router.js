import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import AlbumList from './components/AlbumList';
import Business from './components/Business';
import Reviews from './components/Reviews';
import MainPage from './components/MainPage';
import LoginForm from './components/LoginForm';
import Register from './components/Register';
import ReviewForm from './components/ReviewForm';


 const RouterComponent = () => {

   return (

     <Router>

      <Scene key='root' hideNavBar>

      <Scene key='Main'>
        <Scene key='business' component={AlbumList} backTitle="رجوع" title='المتاجر'initial />
        <Scene key='businessInner' component={Business} backTitle="رجوع" title='تفاصيل المتجر' />
        <Scene key='reviews' component={Reviews} backTitle="رجوع" title='المراجعات' />
        <Scene key='reviewForm'component={ReviewForm} backTitle="رجوع" title='كتابة المراجعات ' />

      </Scene>

     <Scene key='Auth'>
       <Scene key='MainP' component={MainPage} title='الصفحة الرئيسية' />
       <Scene key='Login' component={LoginForm} backTitle="رجوع" title='تسجيل الدخول' />
       <Scene key='Register' component={Register} backTitle="رجوع" title='التسجيل' />
      </Scene>



      </Scene>

     </Router>

   );
 };

 export default RouterComponent;
