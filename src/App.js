import styledComponents from "styled-components"
import './App.css';
import {Container} from './components/Styled/Container.styled'

const Para=styledComponents.p`
  color:green;
  font-size: 1.5em;
`
const Title = styledComponents.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <Container>
      <Para>hi</Para>
      <p>Dumb</p>
    </Container>
  );
}

export default App;
