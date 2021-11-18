import React from 'react'; 
import axios from 'axios';

function MusicTable (props){   
        return ( 
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map(song =>
                        <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_date}</td>
                            <button onClick={()=>this.deleteSong(song)}>delete</button>
                        </tr>
                        )}
                </tbody>
            </table>
         );

function deleteSong(){
    axios.delete('http://127.0.0.1:8000/music/')
    .then(response => this.setState({
      library: response.data
    })
  )}
}

export default MusicTable;