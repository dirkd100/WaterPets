import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Spinner, Header } from '../components';

class Welcome extends Component {
  state = {
    loading: false,
  };

  onLoginButtonPress() {
    Actions.login(this);
  }

  onSignupButtonPress() {
    Actions.signup(this);
  }

  renderSignupButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onSignupButtonPress}>Create Account</Button>;
  }

  renderLoginButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onLoginButtonPress.bind(this)}>Log In</Button>;
  }

  render() {
    return (
      <View style={{ backgroundColor: 'steelblue', flex: 1 }}>
        <View style={{ flex: 3 }}>
          <Header style={{ height: 80 }}>Welcome to Water Friends! Choose one to begin.</Header>
        </View>
        <View style={{ flex: 3 }}>
          <Image
            style={styles.imageStyle}
            source={require('../../assets/img/5a2fe9ca30cf95.0408553515130894821999.png')}
          />
        </View>
        <View style={{ flex: 1 }}>{this.renderLoginButton()}</View>
        <View>
          <Header>~OR~</Header>
        </View>
        <View style={{ flex: 1 }}>{this.renderSignupButton()}</View>
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}

const styles = {
  headerStyle: {
    height: 80,
  },
  imageStyle: {
    width: null,
    flex: 1,
    resizeMode: 'contain',
  },
};

export default Welcome;
