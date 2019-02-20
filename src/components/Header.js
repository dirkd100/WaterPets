import React from 'react';
import { Text, View } from 'react-native';

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.children}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  textStyle: {
    fontFamily: 'cooper.ttf',
    fontSize: 40,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
};

export { Header };
