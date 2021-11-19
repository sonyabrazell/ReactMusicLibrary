import React, {Component} from 'react';
import './CreateSong.css'

class CreateSong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });

    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewSong(this.state);
    };

render(){
    return ( 
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <div>
            <label>Title: </label>
            <input type= 'text' 
            name='title' 
            onChange={this.handleChange} 
            value={this.state.title}></input>

            <label>Artist: </label>
            <input type= 'text' 
            name='artist' 
            onChange={this.handleChange} 
            value={this.state.artist}></input>

            <label>Album: </label>
            <input type= 'text' 
            name='album' onChange={this.handleChange} 
            value={this.state.album}></input>

            <label>Genre: </label>
            <input type= 'text'
            name='genre' 
            onChange={this.handleChange} 
                value={this.state.genre}></input>

            <label>Release Date: </label>
            <input type= 'text' 
            name='title' 
            onChange={this.handleChange} 
            value={this.state.release_date}></input>

            <button type='submit'>Add</button>
        </div>
        </form>
            
        );
    
    }}
export default CreateSong;
