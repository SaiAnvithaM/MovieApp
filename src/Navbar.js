import {Component} from "react"
import styled from "styled-components";

class Navbar extends Component{
  
   
    render(){
  console.log(this.props)
      const {cartCount} = this.props;
        return(
                <Nav>
                    <Title>
                        Movie-App
                        </Title>
                    <CartContainer>
                        <CartIcon  src="https://cdn-icons-png.flaticon.com/128/891/891462.png"  alt="cart icon"/>
                        <Count color="yellow" show={true} >{cartCount}</Count>
                        </CartContainer>
                </Nav>
        )
    }
}
export default Navbar;
const Nav = styled.div`
    width:100% ;
    height:70px ;
    background: linear-gradient(170deg, #1bc059, #0d47a1);
    display: flex;
    justify-content: space-between;
    align-items:center
`
const Title = styled.div`
        font-size: 30px;
        color:white;
        font-weight: 600;
        font-family:Montserrat , sans-serif;
        text-transform: uppercase;
        margin-left: 20px
`
const CartContainer =  styled.div`
       position:relative;
        cursor:pointer
`
const CartIcon = styled.img`
        height:48px;
        margin-right:20px
`
const Count = styled.div`
${'' /* string interpolation used for concatenation of strings */}
        background-color: ${(props) => props.color};  
        border-radius:50%;
        padding: 4px 8px;
        position: absolute;
        right:10px;
        top:-5px;
        font-size:12px;
        visibility: ${(props) => props.show? "visibile" : "hidden"}
        
`
