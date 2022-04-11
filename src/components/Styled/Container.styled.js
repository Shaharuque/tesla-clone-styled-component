import styledComponents from "styled-components"

const Container=styledComponents.div`
    background-image: url(https://cdn.wallpapersafari.com/90/67/oHA0wZ.jpg);
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
`
const Button=styledComponents.button`
    padding:10px;
    background-color:purple;
    color:white;
    border-radius:10px;
    border:1px solid purple;
`

const HomeContainer=styledComponents.div`
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 5rem;
    padding:20px;
`

const CardContainer=styledComponents.div`
    border: 2px solid #fff;
    border-radius:20px;
    height:850px;
    text-align:center;
    background-color:rgba(255,255,255,0.7);
    backdrop-filter: blur(10px);
    box-shadow: 20px 20px 50px #d279a6;
`

const SubCartContainer=styledComponents.div`

`


export {Container,Button,CardContainer,HomeContainer,SubCartContainer}