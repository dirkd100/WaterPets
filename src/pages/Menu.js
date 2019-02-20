import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../components';
import ThumbList from './ThumbList';

class Menu extends Component {
  waterUsage = {
    month: 0,
    day: 0,
    week: 0,
  };

  render() {
    return (
      <View style={{ backgroundColor: 'steelblue', flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ height: 80 }}>
            <Header>Home</Header>
          </View>
          <View style={{ justifyContent: 'space-around', flex: 1 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ color: 'white', fontSize: 25 }}>
                <Text style={{ fontWeight: 'bold' }}>Monthly: </Text>
                <Text>{this.waterUsage.month} gallons</Text>
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: 'white', fontSize: 25 }}>
                <Text style={{ fontWeight: 'bold' }}>Weekly: </Text>
                <Text>{this.waterUsage.week} gallons </Text>
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: 'white', fontSize: 25 }}>
                <Text style={{ fontWeight: 'bold' }}>Daily: </Text>
                <Text>{this.waterUsage.day} gallons </Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <ThumbList />
        </View>
      </View>
    );
  }
}

export default Menu;
