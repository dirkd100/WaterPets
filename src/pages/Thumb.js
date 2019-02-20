import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection } from '../components';

const tni = require('../../assets/img/5a2fe9ca30cf95.0408553515130894821999.png');

const Thumb = ({ thumb }) => {
  const { name } = thumb;
  const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={tni} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{name}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignitems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default Thumb;
