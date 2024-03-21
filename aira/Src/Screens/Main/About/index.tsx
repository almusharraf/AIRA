import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView
} from 'react-native';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionic from 'react-native-vector-icons/Ionicons';
import useThemeContext from '../../../Util/useThemeContext';



export type Props = {
  navigation: any;
};


const About = (props: any) => {
  const { Colors, isSystemTheme, systemTheme, colorTheme, setColorTheme } = useThemeContext();

  const [tab, setTab] = useState(1)
  const [inner, setInner] = useState(1)

  return (
    <SafeAreaView style={[Styles.safeAreaContainer, { backgroundColor: Colors.background }]}>
      <StatusBar barStyle={colorTheme === 'dark' ? "light-content" : "dark-content"} />

      <View style={Styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContainer}>

            <View style={Styles.headerWrapper}>
              <Text style={[Styles.headText, { color: Colors.authTitleColor }]}>{`About`}</Text>
              <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                <Ionic
                  name={"close"}
                  size={28}
                  style={{ color: Colors.headerColor }} />
              </TouchableOpacity>
            </View>

            {/* Tabs */}
            <View style={[Styles.tabsContainer, { marginBottom: tab == 2 ? hp(3.5) : hp(5), borderColor: Colors.headerColor }]}>
              <TouchableOpacity onPress={() => { setTab(1) }}
                style={[Styles.tabsInnerWrap, { backgroundColor: tab == 1 ? Colors.headerColor : "transparent", borderColor: Colors.headerColor }]}>
                <Text style={[Styles.tabTitle, { color: tab == 1 ? Colors.white : Colors.headerColor }]}>{`About App`}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { setTab(2) }}
                style={[Styles.tabsRightWrap, { backgroundColor: tab == 2 ? Colors.headerColor : "transparent", borderColor: Colors.headerColor }]}>
                <Text style={[Styles.tabTitle, { color: tab == 2 ? Colors.white : Colors.headerColor }]}>{`Legal Info`}</Text>
              </TouchableOpacity>
            </View>
            {/* Tabs End */}

            {
              tab == 1 &&
              <View style={[Styles.listContainer, {
                backgroundColor: Colors.listColor,
                borderBottomColor: Colors.listBorder
              }]}>
                <View style={Styles.listInner}>
                  <Text style={[Styles.listTitle, {
                    color: Colors.authTitleColor
                  }]}>{"About App"}</Text>
                  <Text style={[Styles.listDes, {
                    color: Colors.termsColor
                  }]}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
                </View>
              </View>
            }

            {
              tab == 1 &&
              <View style={[Styles.listContainer, {
                backgroundColor: Colors.listColor,
                borderBottomColor: Colors.listBorder
              }]}>
                <View style={Styles.listInner}>
                  <Text style={[Styles.listTitle, {
                    color: Colors.authTitleColor
                  }]}>{"Version"}</Text>
                  <Text style={[Styles.listDes, {
                    color: Colors.termsColor
                  }]}>{`v22.56.78.90`}</Text>
                </View>
              </View>
            }
            {
              tab == 1 &&
              <View style={[Styles.listContainer, {
                backgroundColor: Colors.listColor,
                borderBottomColor: Colors.listBorder
              }]}>
                <View style={Styles.listInner}>
                  <Text style={[Styles.listTitle, {
                    color: Colors.authTitleColor
                  }]}>{"Developer Contact"}</Text>
                  <Text style={[Styles.listDes, {
                    color: Colors.termsColor
                  }]}>{`Email: dev.inder@email.com`}</Text>
                  <Text style={[Styles.listDes, {
                    color: Colors.termsColor
                  }]}>{`Website: www.loremipsum.in`}</Text>
                </View>
              </View>
            }
            {
              tab == 1 &&
              <View style={[Styles.listContainer, {
                backgroundColor: Colors.listColor,
                borderBottomColor: Colors.listBorder
              }]}>
                <View style={Styles.listInner}>
                  <Text style={[Styles.listTitle, {
                    color: Colors.authTitleColor
                  }]}>{"Acknowledgements"}</Text>
                  <Text style={[Styles.listDes, {
                    color: Colors.termsColor
                  }]}>{`1. Lorem ipsum dolor sit amet`}</Text>
                  <Text style={[Styles.listDes, {
                    color: Colors.termsColor
                  }]}>{`2. Consectetur adipiscing elit, sed do eiusmod`}</Text>
                  <Text style={[Styles.listDes, {
                    color: Colors.termsColor
                  }]}>{`3. Tempor incididunt ut labore et dolore magna`}</Text>
                  <Text style={[Styles.listDes, {
                    color: Colors.termsColor
                  }]}>{`4. Ut enim ad minim veniam, quis nostrud`}</Text>
                </View>
              </View>
            }

            {
              (tab == 2 && inner == 1) ? (
                <View style={Styles.flexDirection}>
                  <TouchableOpacity
                    style={[Styles.activeTabInnerMain, { borderBottomColor: Colors.authTitleColor }]}
                    onPress={() => setInner(1)}>
                    <Text style={[Styles.activeInnerTab, { color: Colors.authTitleColor }]}>{'Terms of service'}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setInner(2)}
                    style={[Styles.InactiveTabInnerMain, { borderBottomColor: Colors.infoColor }]}>
                    <Text style={[Styles.innerInActiveTab, { color: Colors.infoColor }]}>{'Privacy Policy'}</Text>
                  </TouchableOpacity>
                </View>
              ) :
                (tab == 2 && inner == 2) &&
                (
                  <View style={Styles.flexDirection}>
                    <TouchableOpacity
                      onPress={() => setInner(1)}
                      style={[Styles.InactiveTabInnerMain, { borderBottomColor: Colors.infoColor }]}>
                      <Text style={[Styles.innerInActiveTab, { color: Colors.infoColor }]}>{'Terms of service'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[Styles.activeTabInnerMain, { borderBottomColor: Colors.authTitleColor }]}
                      onPress={() => setInner(2)}>
                      <Text style={[Styles.activeInnerTab, { color: Colors.authTitleColor }]}>{'Privacy Policy'}</Text>
                    </TouchableOpacity>
                  </View>
                )}

            {
              tab == 2 &&
              <View style={Styles.descriptionInner}>
                <Text style={[Styles.termsDescription, {
                  color: Colors.termsColor
                }]}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</Text>

                <Text style={[Styles.termsDescription, {
                  color: Colors.termsColor
                }]}>{`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</Text>

                <Text style={[Styles.termsDescription, {
                  color: Colors.termsColor
                }]}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex `}</Text>
              </View>
            }

          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default About;