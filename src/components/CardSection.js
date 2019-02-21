import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const CardSection = ({ children }) => <View style={styles.containerStyle}>{children}</View>;

CardSection.propTypes = {
  children: PropTypes.element,
};

CardSection.defaultProps = {
  children: '',
};

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
