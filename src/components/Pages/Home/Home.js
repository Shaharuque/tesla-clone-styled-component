import React from 'react';
import { CardContainer, HomeContainer, SubCartContainer } from '../../Styled/Container.styled';

const Home = () => {
    return (
        <>
            <HomeContainer>
            <CardContainer>
                <SubCartContainer>
                  <h1>This is home</h1>  
                </SubCartContainer>
                
            </CardContainer>
            <CardContainer>
                <h1>This is home</h1>
            </CardContainer>
            <CardContainer>
                <h1>This is home</h1>
            </CardContainer>
               
            </HomeContainer>
        </>
    );
};

export default Home;