// Lists all VIDEOS on SEARCH PAGE
import React from 'react';
import Axios from 'axios';

const VideosList = (props) => {
    <div className='videos-list' onClick={() => /* go to each item details */}> 
        <div className='video-individual'>
            <h1>{props.videos.title}</h1>
            <img src={props.videos.thumbnail} alt="Video Image"/>
        </div>
    </div>
}

export default VideosList;
