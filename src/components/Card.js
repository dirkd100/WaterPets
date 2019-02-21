import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Card = ({ children }) => <View style={styles.containerStyle}>{children}</View>;

Card.propTypes = {
  children: PropTypes.element.isRequired,
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#fff',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
};

export { Card };
