import React from 'react';
import Modal from 'react-responsive-modal';
import stickers from '../data';

class Sticker extends React.Component {
  state = {
    open: false,
    info: ''
  }

  onOpenModal = () => {
    let single = stickers.filter((sticker) => {
      return sticker.name === this.props.name
    })
    this.setState({ open: true, info: single[0].information})

  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state;
    return(
      <div>
        <div onClick={this.onOpenModal} className="stickerItem col-sm-3">{this.props.name}
      </div>
      <Modal open={open} onClose={this.onCloseModal} center>
        <h1>{this.props.name}</h1>
        <p>{this.state.info}</p>
      </Modal>
      </div>
    )
  }
}

export default Sticker;
