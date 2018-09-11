import React, { Component } from 'react';
import './App.css';
import stickers from './data';
import Sticker from './components/Sticker';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      stickers: stickers.map(sticker => {
        return sticker.name
      }).sort()
    }
  }

  handleChange(e) {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    let filteredStickers = this.state.stickers.filter(
      (sticker) => {
        return sticker.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    )
    console.log(filteredStickers);
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Liquor Stickers</h1>
        </header>
        <div className="searchBar">
          <input value={this.state.search} onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="stickerContainer container">
          <div className="stickerList row">
            {filteredStickers.map((sticker) => {
              return <Sticker name={sticker} key={sticker}/>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
