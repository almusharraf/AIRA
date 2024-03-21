import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import useThemeContext from '../../../Util/useThemeContext';
import getStyles from './Styles';

const PhoneScreen = () => {
  const { Colors, colorTheme } = useThemeContext();
  const styles = getStyles(Colors);

  return (
    <SafeAreaView style={[styles.safeAreaContainer, { backgroundColor: Colors.background }]}>
      <StatusBar barStyle={colorTheme === 'dark' ? 'light-content' : 'dark-content'} />
      <View style={styles.mainContainer}>
        <Text style={[styles.headerTitle, { color: Colors.authTitleColor }]}>{`Phone Call`}</Text>
      </View>
    </SafeAreaView>
  );
};

export default PhoneScreen;
