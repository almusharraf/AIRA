import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;

const getStyles = (Colors) => StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.background, // Set the background color according to the theme
  },
  areaContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  scrollContainer: {
    marginTop: hp(2),
    marginBottom: hp("12%"),
  },
  headerContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: "center",
  },
  headerWrapper: {
    width: '100%',
    alignSelf: 'flex-start',
    padding: hp(2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2),
    marginTop: hp(2),
  },
  headText: {
    fontSize: hp(3.6),
    fontFamily: "Lexend-Bold",
    color: Colors.text, // Dynamic color for the header text
  },
  headerTitle: {
    fontSize: 34,
    fontFamily: 'Lexend-Bold',
    color: Colors.text, // Dynamic color for the title
  },
});

export default getStyles;
