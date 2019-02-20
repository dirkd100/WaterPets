/* eslint-disable import/prefer-default-export */
import React from 'react';
import { View } from 'react-native';

const CardSection = props => <View style={styles.containerStyle}>{props.children}</View>;

const styles = {
  containerStyle: {
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    borderColor: '#ddd',
    borderBottomWidth: 1,
  },
};

export { CardSection };
