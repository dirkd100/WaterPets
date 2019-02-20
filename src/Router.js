import React from 'react';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import LoginForm from './pages/LoginForm';
import SplashScreen from './pages/SplashScreen';
import SignUpForm from './pages/SignUpForm';
import AccountInfo from './pages/AccountInfo';
import Welcome from './pages/Welcome';
import Shroom from './pages/Shroom';
import Leaf from './pages/Leaf';
import Menu from './pages/Menu';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="start" hideNavBar>
        <Scene key="splash" component={SplashScreen} title="Splash Screen" />
      </Scene>
      <Scene key="init" hideNavBar>
        <Scene key="login" component={LoginForm} title="Please Login" />
        <Scene key="signup" component={SignUpForm} title="Please Enter Your Information" />
        <Scene key="accountinfo" component={AccountInfo} title="Please Enter Your Information" />
        <Scene
          type={ActionConst.RESET}
          key="welcome"
          component={Welcome}
          title="Welcome to Water Friends!"
          initial
        />
      </Scene>
      <Scene key="main" hideNavBar>
        <Scene key="shroom" component={Shroom} title="Shroom" />
        <Scene key="leaf" component={Leaf} title="Leaf" />
        <Scene initial key="menu" component={Menu} title="Menu" />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
