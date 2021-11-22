import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import MusicTable from './components/MusicTable/MusicTable';
import CreateSong from './components/CreateSong/CreateSong';
import SearchBar  from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      library: []
    }
  }

componentDidMount(){
    this.getLibrary();
    this.filterSongs();
    this.deleteSong();
}

async getLibrary(){
    let response = await axios.get('http://127.0.0.1:8000/music/')
    console.log(response.data)
    this.setState({
    library: response.data
    })
}

filterSongs(termToFilter){
  let filteredResults = this.state.library.filter(function(el){
    if(el.title.includes(termToFilter));
    {
      return true;
    }
  })
  this.setState({
    library: filteredResults
  })
}

deleteSong = (song) => {
  axios 
  .delete('http://127.0.0.1:8000/music/', song)
  .then(response => this.setState({
    library: response.data
  })
)}

addSong = (songToAdd) => {
  axios
  .post('http://127.0.0.1:8000/music/', songToAdd)
  .then(response => this.setState({
    library: response.data
  }))
}

handleChange(event){
  this.setState({
    [event.target.name]: event.target.value,
  });
};

  render() { 
    console.log(this.state);
    return ( 
      <div className='App'>
        <div className='header'>
          <h1>Music Library</h1>
        </div>
        <br></br><br></br>
        <MusicTable songs ={this.state.library}/> 
        <br></br><br></br>
        <CreateSong />
        <br></br><br></br>
        <SearchBar />
      </div>
    );
  }
}

export default App;