/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { View, Text, CheckBox } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from '../components';

class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    confirmPass: '',
    username: '',
    loading: false,
    check: false,
  };

  onButtonPress() {
    if (
      this.state.password === '' &&
      this.state.confirmPass === '' &&
      this.state.email === '' &&
      this.state.username === ''
    ) {
      this.setState({ error: 'Authentication Failed: Must enter information in all fields' });
    } else if (!(this.state.password === this.state.confirmPass)) {
      this.setState({ error: 'Authentication Failed: Passwords do not match' });
    } else {
      Actions.accountinfo();
    }
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      confirmPass: '',
      loading: false,
      error: '',
      username: '',
    });
  }

  checkBoxTest() {
    this.setState(prevState => ({ check: !prevState.check }));
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress}>Continue</Button>;
  }

  render() {
    return (
      <View style={{ backgroundColor: 'steelblue', flex: 1 }}>
        <Card style={{ flex: 1 }}>
          <CardSection>
            <Input
              placeholder="NickName"
              label="Username"
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              placeholder="password"
              label="Confirm Password"
              value={this.state.confirmPass}
              onChangeText={confirmPass => this.setState({ confirmPass })}
            />
          </CardSection>
          <CardSection>
            <Input
              placeholder="user@email.com"
              label="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
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

export default SignUpForm;
