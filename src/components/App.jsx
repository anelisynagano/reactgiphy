import React, { Component, Fragment } from 'react';
import GifList from './GifList';
import SelectedGif from './SelectedGif';

const gifs = [
    "https://media.giphy.com/media/1d7F9xyq6j7C1ojbC5/giphy.gif",
    "https://media.giphy.com/media/NMufrvxO8fC3C/giphy.gif",
    "https://media.giphy.com/media/xjTIBA4gjvXIQ/giphy.gif",
    "https://media.giphy.com/media/NGALQBUgvmVTa/giphy.gif"
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGif: "https://media.giphy.com/media/EExhQTbQ75Hxq3KcOp/giphy.gif"
        };
    }

    render() {
        const { selectedGif } = this.state;
        return (
            <Fragment>
                <SelectedGif selectedGif={selectedGif} />
                <GifList gifs={gifs} />
            </Fragment>
        );
    }
}

export default App;
