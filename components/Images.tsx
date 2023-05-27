import React, { Component } from 'react';

type Props = {
  src: string;
  alt: string;
  
};

type State = {};

export default class CustomImage extends Component<Props, State> {
  state = {};

  render() {
    const { src, alt } = this.props;

    return (
      <div>
        <img src={src} alt={alt}/>
      </div>
    );
  }
}
