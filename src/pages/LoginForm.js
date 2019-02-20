import React, { Component } from 'react';
import { View, Text, CheckBox } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Button, Card, CardSection, Input, Spinner } from '../components';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
    check: false,
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false, check: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
    });
    Actions.main();
  }

  checkBoxTest() {
    this.setState(prevState => ({ check: !prevState.check }));
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress}>Log In!</Button>;
  }

  render() {
    return (
      <View style={{ backgroundColor: 'steelblue', flex: 1 }}>
        <Card style={{ flex: 1 }}>
          <CardSection>
            <Input
              placeholder="user@gmail.com"
              label="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>

          <CardSection>
            <Input
              placeholder="password"
              label="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>
          <Text style={styles.errorTextStyle}>{this.state.error}</Text>

          <CardSection>{this.renderButton()}</CardSection>
          <View style={styles.checkBoxViewStyle}>
            <CheckBox value={this.state.check} onChange={() => this.checkBoxTest()} />
            <Text style={{ alignSelf: 'center' }}>Keep me signed in.</Text>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
  checkBoxViewStyle: {
    flexDirection: 'row',
  },
};

export default LoginForm;
