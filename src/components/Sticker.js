import React from 'react';

class Sticker extends React.Component {
  render() {
    return(
      <div className="stickerItem col-sm-3">{this.props.name}</div>
    )
  }
}

export default Sticker;
