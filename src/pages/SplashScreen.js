import React from 'react';
import { View, Image } from 'react-native';
import { Header, GrowInView } from '../components';

const SplashScreen = () => {
  const splashImage = '../../../assets/img/5a2fe9ca30cf95.0408553515130894821999.png';

  return (
    <View style={{ flex: 1, backgroundColor: 'steelblue' }}>
      <View style={{ height: 80 }}>
        <Header>Water Friends!</Header>
      </View>
      <GrowInView>
        <Image style={styles.imageStyle} source={require(splashImage)} />
      </GrowInView>
      <View style={{ flex: 2 }} />
    </View>
  );
};

const styles = {
  imageStyle: {
    width: null,
    flex: 1,
    resizeMode: 'contain',
  },
};

export default SplashScreen;
