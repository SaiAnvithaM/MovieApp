import React from "react"
import MovieList from "./MovieList"
import Navbar from "./Navbar";
import {movies} from "./movieData"


class App extends React.Component{
  constructor(){
    super();
    this.state={
        //create a movies array object and store all the moviecard data
        //so to access we need to say this.state.movies
        movies : movies,
        cartCount : 0
    }
   }
    //giving event handling in the parent component nad keeping child compoenet as pure component
    handleCart=(movie)=>{
      var {movies, cartCount} = this.state;
      const m_id = movies.indexOf(movie);
      movies[m_id].cart= !movies[m_id].cart   
        
      console.log(movies[m_id].cart)
      //  movies[m_id].cart? this.state.cartCount+=1 : this.state.cartCount-=1;
      if(movies[m_id].cart){
        this.state.cartCount+=1;
      }
      else{
         this.state.cartCount-=1
      }
      this.setState({
        movies : movies,
        cartConut: cartCount
    })

    console.log(cartCount);
  }  


handleStars = (movie) =>{
  //movie index
    
       const m_id = this.state.movies.indexOf(movie);
       if(this.state.movies[m_id].stars >= 5 ){
        return
    }
       this.state.movies[m_id].stars+=0.5;
    //from2
    this.setState({
        //state movie : above changes movie
        movies : this.state.movies
    })
    }
    
    handleDec = (movie) => {
        
        const m_id = this.state.movies.indexOf(movie);
        if(this.state.movies[m_id].stars <=0 ){
            return
        }
        this.state.movies[m_id].stars-=0.5;
        this.setState({
           movies:this.state.movies
        })
    }
    handleFav= (movie) =>{
        const {movies} = this.state;
         const m_id = movies.indexOf(movie);
         movies[m_id].fav = !movies[m_id].fav
        this.setState({
            movies:movies
    })
    }
  
    


  render(){
    

    const {movies, cartCount}= this.state;
      return (
    <>
      <Navbar cartCount = {cartCount}/>
      <MovieList movies= {movies}
            addStars = {this.handleStars} 
             decStars = {this.handleDec}
             favBtn = {this.handleFav}
             cartBtn = {this.handleCart}
      />
      </>
  );
}
}
export default App;
