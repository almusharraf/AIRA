import { StyleSheet, Dimensions } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  areaContainer: {
    flex: 1
    // flexGrow: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    marginTop: hp(2),
    marginBottom: hp("12%")
  },
  headerContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: "center",
  },

  welcomeText: {
    fontSize: 20,
    fontFamily: "Lexend-Regular",
  },
  toddText: {
    fontSize: 40,
    fontFamily: "Lexend-Bold",
  },
  dataContainer: {
    marginTop: hp(4),
    marginBottom: hp(4),
    justifyContent: "center",
    alignItems: "center"
  },
  dataImage: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    height: hp(31.7),
    borderColor: "#E1D7C2"
  },
  tabsDataContainer: {
    flex: 0.55,
    justifyContent: "center",
    alignItems: "center"
  },
  tabsContainer: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tabsSecondContainer: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(2)
  },
  tabWraapper: {
    width: hp(19.5),
    height: hp(19.5),
    borderRadius: 20,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  tabsImage: {
    width: hp(5.4),
    height: hp(5.4),
    marginBottom: hp(2.5),
  },
  tabTitle: {
    fontSize: hp(1.8),
    fontFamily: "Lexend-SemiBold",
    textAlign: "center",
    marginBottom: hp(2.5),
  },
});
export default styles;