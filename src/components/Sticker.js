import React from 'react';
import Modal from 'react-responsive-modal';
import stickers from '../data';

class Sticker extends React.Component {
  state = {
    open: false,
    info: '',
    img: this.props.img[0].img

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
        <div style={{backgroundImage: 'url(' + require(`../img/${this.state.img}`) + ')', backgroundSize: 'cover'}} onClick={this.onOpenModal} className="stickerItem col-sm-3" >

          <span className="drinkName">{this.props.name}</span>
        </div>
      <Modal open={open} onClose={this.onCloseModal} center>
        <h1>{this.props.name}</h1>
        <p>{this.state.info}</p>
        <img src={require(`../img/${this.state.img}`)} />
      </Modal>
      </div>
    )
  }
}

export default Sticker;
