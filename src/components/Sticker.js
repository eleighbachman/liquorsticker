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
        <div className="modalStyles">
          <h1 className="drinkNameHeader">{this.props.name}</h1>
          <div className="row drinkContent">
            <div className="col-sm-4">
              <img className="modalImg" src={require(`../img/${this.state.img}`)} />
            </div>
            <div className="col-sm-8">
            <div className="drinkDesc">{this.state.info}</div>
            </div>
          </div>


        </div>
      </Modal>
      </div>
    )
  }
}

export default Sticker;
