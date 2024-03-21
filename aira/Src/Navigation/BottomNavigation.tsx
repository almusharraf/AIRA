import React from 'react';
import {
  View,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../Styles/Images';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Home from "../Screens/Main/Home";
import Phone from "../Screens/Main/Phone"
import Calender from "../Screens/Main/Calender";
import Profile from "../Screens/Main/Profile";
import FaceInteraction from "../Screens/Main/FaceInteraction";



const widthScreen = Dimensions.get('window').width;

type BottomStackParamList = {
  HomeTab: undefined,
  Phone: undefined,
  AITab: undefined,
  CalenderTab: undefined,
  ProfileTab: undefined,
};
type HomeStackParamList = {
  Home: undefined,
};
type PhoneStackParamList = {
  Phone: undefined,
};
type CalenderStackParamList = {
  Calender: undefined,
};
type ProfileStackParamList = {
  Profile: undefined,
};

type AITabStackParamList = {
  FaceInteraction: undefined,
  // add other screens here if necessary
};



const navigationRef = React.createRef<any>();

export function navigate(name: any, params: any) {
  navigationRef.current?.navigate(name, params);
}

const Tab = createBottomTabNavigator<BottomStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const PhoneStack = createStackNavigator<PhoneStackParamList>();
const CalenderStack = createStackNavigator<CalenderStackParamList>();
const ProfileStack = createStackNavigator<ProfileStackParamList>();
const AITabStack = createStackNavigator<AITabStackParamList>();


export const HomeStacks = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

export const PhoneStacks = () => {
  return (
    <PhoneStack.Navigator initialRouteName="Phone"
      screenOptions={{
        headerShown: false,
      }}>
      <PhoneStack.Screen name="Phone" component={Phone} />



    </PhoneStack.Navigator>
  );
}

const CalenderStacks = () => {
  return (
    <CalenderStack.Navigator initialRouteName="Calender"
      screenOptions={{
        headerShown: false,
      }}>
      <CalenderStack.Screen name="Calender" component={Calender} />

    </CalenderStack.Navigator>
  )
}

const ProfileStacks = () => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="Profile" component={Profile} />

    </ProfileStack.Navigator>
  )
}


const AITabStacks = () => {
  return (
    <AITabStack.Navigator initialRouteName="FaceInteraction"
      screenOptions={{ headerShown: false }}>
      <AITabStack.Screen 
        name="FaceInteraction" 
        component={FaceInteraction}
        listeners={({ navigation, route }) => ({
          focus: () => navigation.setParams({ tabBarVisible: false }),
          blur: () => navigation.setParams({ tabBarVisible: true })
        })}
      />
      {/* ... other screens if any ... */}
    </AITabStack.Navigator>
  );
}




export const BottomTabView = (props: any) => {
  // let unreadChatCount = props?.chat?.unreadChatCount?.count ? props?.chat?.unreadChatCount?.count : 0
  let unreadChatCount = 1
  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
        headerShown: false,
        // tabBarIcon: ({ focused }) => {
        //   let image;
        //   let name;
        //   if (route.name === 'HomeTab') {
        //     image = Images.home;
        //   }
        //   else if (route.name === 'VoiceManagementTab') {
        //     image = Images.graphic;
        //   }
        //   else if (route.name === 'CalenderTab') {
        //     image = Images.calendar;
        //   }
        //   else if (route.name === 'ProfileTab') {
        //     image = Images.accountPic;
        //   }
        //   return (
        //     <View style={{
        //       alignItems: 'center', justifyContent: 'center'
        //     }}>
        //       <Image source={image} style={{
        //         marginTop: hp(2),
        //         width: 34,
        //         height: 34,
        //         tintColor: focused ? "#FFFFFF" : "#D9D9D9"
        //       }} />
        //     </View>
        //   );
        // },
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: 'flex',
          position: 'absolute',
          bottom: 30,
          left: 20,
          right: 20,
          elevation: 5,
          backgroundColor: '#608C96',
          borderRadius: 25,
          height: hp(8),
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center"
        },
        tabBarShowLabel: false,
      })}>

      <Tab.Screen name="HomeTab" component={HomeStacks}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 15, }}>
              <Image source={Images.home} style={{
                width: 34,
                height: 34,
                tintColor: focused ? "#FFFFFF" : "#D9D9D9"
              }} />
            </View>
          ),
        }} />

      <Tab.Screen name="PhoneTab" component={PhoneStacks} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 15, }}>
            <Image source={Images.phone} style={{
              width: 28,
              height: 28,
              tintColor: focused ? "#FFFFFF" : "#D9D9D9"
            }} />
          </View>
        ),
      }} />

      <Tab.Screen name="AITab" component={AITabStacks}
        options={{
          tabBarLabel: '',
          tabBarButton: (props) => (
          <TouchableOpacity {...props} style={{ alignItems: 'center', justifyContent: 'center', width: 54, top: 13, }}>
            <Image source={Images.aiIcon} style={{
                width: 34,
                height: 34,
              }} />
          </TouchableOpacity>
        ),
      }} />


      <Tab.Screen name="CalenderTab" component={CalenderStacks}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 15, }}>
              <Image source={Images.calendar} style={{
                width: 34,
                height: 34,
                tintColor: focused ? "#FFFFFF" : "#D9D9D9"
              }} />
            </View>
          ),
        }} />

      <Tab.Screen name="ProfileTab" component={ProfileStacks}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 15, }}>
              <Image source={Images.accountPic} style={{
                width: 34,
                height: 34,
                tintColor: focused ? "#FFFFFF" : "#D9D9D9"
              }} />
            </View>
          ),
        }} />



    </Tab.Navigator>
  );
}

export default BottomTabView;
// <LinearGradient colors={['#608C96', '#709EA9']} style={{
//   height: hp(7.5), justifyContent: 'center',
//   width: widthScreen / 1.12,
//   alignSelf: "center",
//   borderRadius: 25,
//   marginBottom: hp(3),
//   alignItems: 'center'
// }} />