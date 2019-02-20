import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Thumb from './Thumb';
import Collectibles from '../../assets/data/collectibles.json';

class ThumbList extends Component {
  state = { thumbs: [] };

  componentWillMount() {
    this.setState({ thumbs: Collectibles });
  }

  renderThumbs() {
    return this.state.thumbs.map(thumb => <Thumb key={thumb.name} thumb={thumb} />);
  }

  render() {
    return <ScrollView>{this.renderThumbs()}</ScrollView>;
  }
}

export default ThumbList;
