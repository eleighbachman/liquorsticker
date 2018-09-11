import React from 'react';
import Modal from 'react-responsive-modal';

class Sticker extends React.Component {
  state = {
    open: false
  }

  onOpenModal = () => {
    this.setState({ open: true })
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
      </Modal>
      </div>
    )
  }
}

export default Sticker;
