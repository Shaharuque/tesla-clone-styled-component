import styledComponents from "styled-components"

const Container = styledComponents.div`
    background-image: url(https://cdn.wallpapersafari.com/90/67/oHA0wZ.jpg);
    background-size: cover;
    height: 100%;
    width: 100%;
`
const Button = styledComponents.button`
    background: rgb(0,172,238);
    background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
    width: 130px;
    height: 40px;
    line-height: 42px;
    padding: 0;
    border-radius: 10px;
    border:none;
    color:white;
    &:hover{
        background: rgb(0,3,255);
        background: linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%);

    }
    
`

const HomeContainer = styledComponents.div`
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 5rem;
    padding:20px;
`

const CardContainer = styledComponents.div`
    border: 2px solid #fff;
    border-radius:20px;
    height:1000px;
    text-align:center;
    background-color:rgba(255,255,255,0.4);
    backdrop-filter: blur(10px);
    box-shadow: 5px 10px 8px #a6b8b9;
`

const SubCartContainer = styledComponents.div`
    display: grid;
    grid-template-rows: 500px 500px;
    padding:10px;
    positon:relative;
`
const ImageContainer = styledComponents.img`
   
    border-radius:20px;
    height:500px;
    text-align:center;
    background-color:rgba(255,255,255,);
    backdrop-filter: blur(10px);
`

export { Container, Button, CardContainer, HomeContainer, SubCartContainer, ImageContainer }