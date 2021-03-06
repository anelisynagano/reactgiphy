import React from 'react';
import Gif from './Gif';

const GifList = ({ gifs }) => (
    <div className="gifslist">
        {gifs.map(gif => <Gif src={gif} />)}
    </div>
);

export default GifList;
