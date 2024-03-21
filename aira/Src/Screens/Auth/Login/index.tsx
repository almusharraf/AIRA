import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Ionic from 'react-native-vector-icons/Ionicons';
import useThemeContext from '../../../Util/useThemeContext';
import axiosInstance from '../../../../api/axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Props = {
  navigation: any;
};

const Login = (props: any) => {
  const {Colors, isSystemTheme, systemTheme, colorTheme, setColorTheme} =
    useThemeContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clickPass, setClickPass] = useState(false);
  const [remberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post('login/', {email, password});
      if (response.data && response.data.token) {
        await AsyncStorage.setItem('userToken', response.data.token.access);

        if (response.data.user) {
          await AsyncStorage.setItem(
            'userDetails',
            JSON.stringify(response.data.user),
          );
        }

        props.navigation.navigate('BottomNavigation', {screen: 'HomeTab'});
      } else {
        alert('Login unsuccessful. Please try again.');
      }
    } catch (error) {
      console.error(error);

      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <SafeAreaView
      style={[Styles.safeAreaContainer, {backgroundColor: Colors.background}]}>
      <StatusBar
        barStyle={colorTheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        extraHeight={130}
        extraScrollHeight={130}
        enableAutomaticScroll={Platform.OS === 'ios'}
        contentContainerStyle={Styles.areaContainer}>
        <View style={Styles.mainContainer}>
          <View style={Styles.headerEmpty} />

          <View style={Styles.headerContainer}>
            <View style={Styles.headerWrapper}>
              <Text
                style={[
                  Styles.headText,
                  {color: Colors.authTitleColor},
                ]}>{`Login`}</Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.goBack();
                }}>
                {/* <Ionic
                  name={'close'}
                  size={28}
                  style={{color: Colors.headerColor}}
                /> */}
              </TouchableOpacity>
            </View>

            {/* Email */}
            <View
              style={[
                Styles.wrapper,
                {
                  backgroundColor: Colors.white,
                  borderColor: Colors.colorBorder,
                },
              ]}>
              <TextInput
                style={[Styles.textInput, {color: Colors.inputColor}]}
                value={email}
                placeholder={'Enter Email'}
                placeholderTextColor={'#858585'}
                onChangeText={value => {
                  setEmail(value);
                }}
              />
              <Image source={Images.mail} style={Styles.iconStyle} />
            </View>

            {/* Password */}
            <View
              style={[
                Styles.wrapper,
                {
                  backgroundColor: Colors.white,
                  borderColor: Colors.colorBorder,
                },
              ]}>
              <TextInput
                style={[Styles.textInput, {color: Colors.inputColor}]}
                value={password}
                placeholder={'Enter Password'}
                secureTextEntry={clickPass == true ? false : true}
                placeholderTextColor={'#858585'}
                onChangeText={value => {
                  setPassword(value);
                }}
              />
              <Image source={Images.lock} style={Styles.iconStyle} />
            </View>

            {/* Forgot Password */}
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('PasswordRecovery');
              }}>
              <Text
                style={[
                  Styles.forgotText,
                  {color: Colors.forgotColor},
                ]}>{`Forgot Password`}</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity onPress={handleLogin}>
              <LinearGradient
                colors={['#254A56', '#415F63']}
                style={Styles.nextButton}>
                <Text
                  style={[Styles.nextText, {color: Colors.loginButtonColor}]}>
                  Login
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <Text style={[Styles.orText, {color: Colors.orColor}]}>{`OR`}</Text>

            <Text
              style={[
                Styles.loginText,
                {color: Colors.loginColor},
              ]}>{`Login with`}</Text>

            {/* Social Icons */}
            <View style={Styles.socialContainer}>
              <TouchableOpacity>
                <Image source={Images.apple} style={Styles.socialIcon} />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image source={Images.google} style={Styles.socialIcon} />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image source={Images.facebook} style={Styles.socialIcon} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={Styles.bottomContainer}>
            {/* Don't Have Account */}
            <View style={Styles.bottomInner}>
              <Text
                style={[
                  Styles.dontHaveText,
                  {color: Colors.dontHaveColor},
                ]}>{`Don’t have an account?`}</Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Register');
                }}>
                <Text
                  style={[
                    Styles.registerAccount,
                    {color: Colors.authTitleColor},
                  ]}>{`Signup`}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
