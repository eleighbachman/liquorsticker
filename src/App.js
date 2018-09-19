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
    return (
      <div className="App">
        <header className="App-header">

          <span>Liquor Stickers</span>
        </header>
        <div className="searchBar">
          <input value={this.state.search} placeholder="Search" onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="stickerContainer container">
          <p className="resultCount">{filteredStickers.length} Results</p>
          {
            filteredStickers.length > 0 ?
            <div className="stickerList row">
              { filteredStickers.map((sticker) => {
                return <Sticker name={sticker} key={sticker} img={stickers.filter((stickers) => {
                  return stickers.name === sticker
                })}/>
              })}
            </div> :
            this.state.search.length < 20 ?
            <div className="noResults">
              No results found for <span className="searchTerm">"{this.state.search}"</span>
            </div>
            :
            <div className="noResults">
              No results found for <span className="searchTerm">"{this.state.search}"</span>
              <div className="warning">Psssst! I don&apos;t think I&apos;m going to find anything - you can stop typing now!</div>
            </div>
          }


        </div>
        <div className="footer">
          <span className="c2a">Enjoying the stickers?</span> <p>Check out Scott Hennessy Art for more.</p>
          <p>Or buy on <a href="https://www.redbubble.com/people/shennessy/collections/968446-liquor-stickers?asc=u">RedBubble</a></p>
        </div>
      </div>
    );
  }
}

export default App;
