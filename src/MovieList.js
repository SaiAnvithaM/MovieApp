import React from "react"
import Moviecard from "./Moviecard";

class MovieList extends React.Component{
    
    
    render(){
       const {movies, addStars, decStars, favBtn, cartBtn} = this.props;
    return(
    <>
    {movies.map((movie_input)=> 
        <Moviecard movies = {movie_input} 
             addStars  ={addStars}
             decStars = {decStars}
             favBtn = {favBtn}
             cartBtn = {cartBtn}
             key={movies.id}
             /> )}
            </>
        )
    }
}
export default MovieList;