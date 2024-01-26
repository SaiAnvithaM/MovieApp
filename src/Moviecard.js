import "./styles.css"
import { Component } from "react"

class Moviecard extends Component{
   



    render(){
        //these were upto state/props only
        const {addStars, decStars,favBtn, cartBtn, movies} = this.props;

        //these were inside the movies object 
        const {title,plot,price,poster,rating,stars, fav, cart}=this.props.movies;
        return(
         <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img src={poster} alt="poster"></img>
                </div>


                <div className="right">
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">{price}/-</div>

                    <div className="footer">
                       <img className="rate-icon" src="https://cdn-icons-png.flaticon.com/128/6947/6947171.png"/>
                       <div className="rating">{rating}</div>
                       <div className="star-dis">
                     <div> 

                     <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/56/56889.png"  
                     onClick={ ()=> {decStars(movies)} }/>

                     <img className="stars" alt="" src=" https://cdn-icons-png.flaticon.com/128/1828/1828884.png"></img> 
                     <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                     onClick={()=> {addStars(movies)} }
                     ></img>
                     <span className="starCount">{stars}</span>
                     </div>
                       </div>

                       <button className=  {fav? "unfavourite-btn" : "favourite-btn"} onClick={()=> {favBtn(movies)} }>{fav? "Unfavourite":"Favourite"}</button>
                       
                      
 
                       <button className=  {cart? "removecart-btn" :"cart-btn"} onClick={()=> {cartBtn(movies)}}>{cart? "Remove from cart" : "Add to cart"}</button>
                       
                    </div>
                </div>
            </div>
         </div>
        )
        }
}
export default Moviecard;