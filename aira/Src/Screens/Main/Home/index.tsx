import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  TextInput,
  ScrollView
} from 'react-native';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import LinearGradient from 'react-native-linear-gradient';
import Ionic from 'react-native-vector-icons/Ionicons';
import useThemeContext from '../../../Util/useThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


export type Props = {
  navigation: any;
};


const Home = (props) => {
  const { navigation } = props;
  const { Colors, isSystemTheme, systemTheme, colorTheme, setColorTheme } = useThemeContext();
  const [firstName, setFirstName] = useState('');

  // Fetch user's first name
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetailsString = await AsyncStorage.getItem('userDetails');
        if (userDetailsString) {
          const userDetails = JSON.parse(userDetailsString);
          setFirstName(userDetails.first_name);
        }
      } catch (error) {
        console.error('Failed to load user details', error);
      }
    };

    fetchUserDetails();
  }, []);


  return (
    <SafeAreaView style={[Styles.safeAreaContainer, { backgroundColor: Colors.background }]}>
      <StatusBar barStyle={colorTheme === 'dark' ? "light-content" : "dark-content"} />
      <View style={Styles.mainContainer}>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContainer}>

            <View style={Styles.headerContainer}>
              <Text style={[Styles.welcomeText, {
                color: Colors.authTitleColor
              }]}>{`Welcome`}</Text>
              <Text style={[Styles.toddText, {
                color: Colors.authTitleColor
              }]}>{firstName || "User"}</Text>
            </View>

            <View style={Styles.dataContainer}>
              <Image source={Images.homeAI} style={Styles.dataImage} />
            </View>

            <View style={Styles.tabsDataContainer}>
              {/* Tabs First Row */}
              <View style={Styles.tabsContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('DailyBrief')}>
                  <LinearGradient colors={['#254A56', '#415F63']}
                    style={Styles.tabWraapper}>
                    <Image source={Images.vector} style={Styles.tabsImage} />
                    <Text style={[Styles.tabTitle, { color: Colors.white }]}>{"Daily Brief"}</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('QuickPlan')}>
                  <LinearGradient colors={['#254A56', '#415F63']}
                    style={Styles.tabWraapper}>
                    <Image source={Images.calenderl} style={Styles.tabsImage} />
                    <Text style={[Styles.tabTitle, { color: Colors.white }]}>{"Quick Plan"}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>

              {/* Tabs Second Row */}
              <View style={Styles.tabsSecondContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('ManageReservationScreen')}>
                  <LinearGradient colors={['#254A56', '#415F63']}
                    style={Styles.tabWraapper}>
                    <Image source={Images.reservation} style={Styles.tabsImage} />
                    <Text style={[Styles.tabTitle, {
                      color: Colors.white
                    }]}>{"Manage \nReservations"}</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('ManageAppointments')}>
                  <LinearGradient colors={['#254A56', '#415F63']}
                    style={Styles.tabWraapper}>
                    <Image source={Images.dashboard} style={Styles.tabsImage} />
                    <Text style={[Styles.tabTitle, {
                      color: Colors.white
                    }]}>{"Manage Appointments"}</Text>
                  </LinearGradient>
                </TouchableOpacity>

              </View>

            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Home;