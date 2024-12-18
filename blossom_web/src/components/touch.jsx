import React from 'react';
import PropTypes from 'prop-types';

export class SvgImageSwitcher extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: props.images[0], // Default image
    };
    this.keyImageMap = {
      a: 1,
      s: 2,
      d: 3,
      f: 4,
      g: 5,
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyDown = (event) => {
    const imageIndex = this.keyImageMap[event.key];
    if (imageIndex !== undefined && imageIndex < this.props.images.length) {
      this.setState({ currentImage: this.props.images[imageIndex] });
    }
  };

  handleKeyUp = () => {
    this.setState({ currentImage: this.props.images[0] }); // Reset to default image
  };

  render() {
    const { currentImage } = this.state;
    return (
        <img src={currentImage} alt="SVG Switcher" />
    );
  }
}

SvgImageSwitcher.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

