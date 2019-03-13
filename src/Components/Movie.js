import React from 'react';

const Movie = ({ title, poster_path } ) => {
    return (
        <div className="tc bg-light-yellow dib br3 pa3 grow bw2 ma2 shaddow-5">
            <img alt='movie' src={poster_path} />
            <div>
                <h2>{title}</h2>
            </div>
        </div>
    );
}

export default Movie;