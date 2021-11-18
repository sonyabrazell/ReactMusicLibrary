import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import MusicTable from './components/MusicTable/MusicTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      library: []
     }
  }

componentDidMount(){
    this.getLibrary();
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
    if(el.title.includes(termToFilter))
    {
      return true;
    }
  })
  this.setState({
    library: filteredResults
  })
}

  render() { 
    console.log(this.state);
    return ( 
      <div className='App'>
        <h1>Music Library</h1>
        <button onClick={()=>this.filterSongs("R")}>click me</button>
         <MusicTable songs ={this.state.library}/> 
      </div>
     );
  }
}
 
export default App;