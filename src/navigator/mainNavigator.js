import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth28553Navigator from '../features/EmailAuth28553/navigator';
import Camera28552Navigator from '../features/Camera28552/navigator';
import CalendarView28551Navigator from '../features/CalendarView28551/navigator';
import Maps28550Navigator from '../features/Maps28550/navigator';
import Tutorial28549Navigator from '../features/Tutorial28549/navigator';
import Messaging28548Navigator from '../features/Messaging28548/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
EmailAuth28553: { screen: EmailAuth28553Navigator },
Camera28552: { screen: Camera28552Navigator },
CalendarView28551: { screen: CalendarView28551Navigator },
Maps28550: { screen: Maps28550Navigator },
Tutorial28549: { screen: Tutorial28549Navigator },
Messaging28548: { screen: Messaging28548Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
