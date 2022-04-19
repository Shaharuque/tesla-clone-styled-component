import styledComponents from "styled-components"
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Container} from './components/Styled/Container.styled'
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";
import Main from "./components/Pages/Sections/Main"

const Para=styledComponents.p`
  color:green;
  font-size: 1.5em;
`
const Title = styledComponents.h1`
  font-size: 1.5em;
  text-align: center;
  color: purple;
  margin:0;
`;

function App() {
  return (
    <>
    <Container>
<<<<<<< HEAD
      <Para>hi</Para>
      <p>Dumb</p>
=======
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/main" element={<Main></Main>}></Route>
      </Routes>
>>>>>>> 1206c5aa6e08a6dd54f29d1edb5f7f6c1689ef4e
    </Container>
    </>
  );
}

export default App;
