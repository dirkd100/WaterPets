import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection, Input, Button } from '../components';

class Shroom extends Component {
  state = {
    Type: 'Shroom',
    Name: '',
    Level: 'rare',
    Desc:
      "Shrooms are quite outgoing and friendly- just don't get them angry. Never get them angry.",
  };

  render() {
    const ShroomImage = '../../../assets/img/5a2fe9ca30cf95.0408553515130894821999.png';
    return (
      <View style={{ backgroundColor: 'steelblue', flex: 1 }}>
        <Card style={{ flex: 1 }}>
          <View style={{ flex: 3 }}>
            <Image style={styles.imageStyle} source={require(ShroomImage)} />
          </View>
          <CardSection style={{ flex: 1 }}>
            <Input
              label="Name"
              placeholder={this.state.Type}
              value={this.state.Name}
              onChangeText={Name => this.setState({ Name })}
            />
          </CardSection>
          <CardSection style={{ flex: 1 }}>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Type: </Text>
              <Text>{this.state.Type}</Text>
            </Text>
          </CardSection>
          <CardSection style={{ flex: 1 }}>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Level: </Text>
              <Text>{this.state.Level}</Text>
            </Text>
          </CardSection>
          <CardSection style={{ flex: 2 }}>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Desc: </Text>
              <Text>{this.state.Desc}</Text>
            </Text>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  imageStyle: {
    width: null,
    flex: 1,
    resizeMode: 'contain',
  },
};

export default Shroom;
