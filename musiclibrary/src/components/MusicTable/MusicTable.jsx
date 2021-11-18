import React, {Component, useEffect, useMemo} from 'react'; 
import axios from 'axios';
import {useTable} from 'react-table';



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
                        </tr>
                        )}
                </tbody>
            </table>
         );
}

 
export default MusicTable;