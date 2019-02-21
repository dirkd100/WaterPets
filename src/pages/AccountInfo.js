import React, { Component } from 'react';
import { View, Text, CheckBox } from 'react-native';
import * as Firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from '../components';

class SignUpForm extends Component {
  state = {
    first: '',
    last: '',
    error: '',
    address: '',
    USstate: '',
    compName: '',
    accountNum: '',
    numOfMembers: 0,
    loading: false,
    check: false,
  };

  // eslint-disable-next-line class-methods-use-this
  onButtonPress() {
    if (
      this.state.first === '' &&
      this.state.last === '' &&
      this.state.address === '' &&
      this.state.USstate === '' &&
      this.state.accountnum === '' &&
      this.state.compName === ''
    ) {
      this.setState({ error: 'Authentication Failed: Must enter information in all fields' });
    } else {
      Actions.waterstat();
    }
  }

  onLoginSuccess() {
    this.setState({
      first: '',
      last: '',
      address: '',
      loading: false,
      error: '',
      compName: '',
      accountNum: '',
      USstate: '',
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
      <View style={{ flex: 1, backgroundColor: 'steelblue' }}>
        <Card style={{ flex: 1 }}>
          <CardSection>
            <Input
              placeholder="Aiden"
              label="First Name"
              value={this.state.first}
              onChangeText={first => this.setState({ first })}
            />
          </CardSection>
          <CardSection>
            <Input
              placeholder="Dorneich"
              label="Last Name"
              value={this.state.last}
              onChangeText={last => this.setState({ last })}
            />
          </CardSection>
          <CardSection>
            <Input
              placeholder="1234 Imaginary Lane"
              label="Address"
              value={this.state.address}
              onChangeText={address => this.setState({ address })}
            />
          </CardSection>
          <CardSection>
            <Input
              placeholder="Pennsylvania"
              label="US State"
              value={this.state.USstate}
              onChangeText={USstate => this.setState({ USstate })}
            />
          </CardSection>
        </Card>
        <Card style={{ flex: 1 }}>
          <CardSection>
            <Input
              placeholder="Water Inc."
              label="Company Name"
              value={this.state.compName}
              onChangeText={compName => this.setState({ compName })}
            />
          </CardSection>
          <CardSection>
            <Input
              placeholder="1234567890"
              label="Account Number"
              value={this.state.accountNum}
              onChangeText={accountNum => this.setState({ accountNum })}
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
