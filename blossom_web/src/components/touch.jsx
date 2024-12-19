import React from 'react';
import PropTypes from 'prop-types';


import t1 from './touch-01.svg';
import t2 from './touch-02.svg';
import t3 from './touch-03.svg';
import t4 from './touch-04.svg';
import t5 from './touch-05.svg';
import t6 from './touch-06.svg';
//Import SVGs

const svgImages = [
  t1,
  t2,
  t3,
  t4,
  t5,
  t6
]


export class SvgImageSwitcher extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: svgImages[0], // Default image
    };
    this.keyImageMap = {
      a: 1,
      s: 2,
      d: 3,
      f: 4,
      g: 5,
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyDown(event) {
    
    const imageIndex = this.keyImageMap[event.key];
    if (imageIndex !== undefined && imageIndex < svgImages.length) {
      this.setState({ currentImage: svgImages[imageIndex] });
    }
  }
  

  handleKeyUp() {
    this.setState({ currentImage: svgImages[0] });
  }
  

  render() {
    const { currentImage } = this.state;
    return (
        <img width = '300px' src={currentImage} alt="SVG Switcher" />
    );
  }
}

SvgImageSwitcher.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

