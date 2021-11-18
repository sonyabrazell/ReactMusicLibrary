import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import MusicTable from './components/MusicTable/MusicTable';
import CreateSong from './components/CreateSong/CreateSong';

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
}

async getLibrary(){
    let response = await axios.get('http://127.0.0.1:8000/music/')
    console.log(response.data)
    this.setState({
    library: response.data
  })
    // let table = this.library.map
    // return {table}
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

handleChange(event){
 this.setState({
   [event.target.name]: event.target.value
 })
}


  render() { 
    console.log(this.state);
    return ( 
      <div className='App'>
        <h1>Music Library</h1>
        <input type='text' name='search' value = {this.termToFilter} onChange={this.handleChange}/>
        <button type= 'submit'  onClick={()=>this.filterSongs(" ")}>search</button>
        <br></br><br></br>
         <MusicTable songs ={this.state.library}/> 
         <br></br><br></br>
         <CreateSong />
      </div>
     );
  }
}
 
export default App;