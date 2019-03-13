import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
    return (
        <div>
            {
                movies.map((movie, i) => {
                    return (
                        <Movie key={movie.id} 
                            title={movie.title}
                            poster_path={movie.poster_path}
                        />
                    );
                })
              }
        </div>
    );
}

export default MovieList;