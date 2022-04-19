import React from 'react';
import { Button, CardContainer, HomeContainer, ImageContainer, SubCartContainer } from '../../Styled/Container.styled';

const Home = () => {
    return (
        <>
            <HomeContainer>
                <CardContainer>
                    <SubCartContainer>
                        <ImageContainer></ImageContainer>
                        <div>
                            <p>The Paragraphs module in Drupal provides editors with a component driven architecture for building pages. Morpht has been developing Paragraph approaches to site building since 2015. This case study captures some of the content from a Drupal 7 "Paragraphs Demo" site which was built to showcase what could be done with Paragraphs.</p>
                            <Button> Exolore!</Button>
                        </div>
                    </SubCartContainer>
                </CardContainer>
                
                <CardContainer>
                <SubCartContainer>
                        <ImageContainer></ImageContainer>
                        <div>
                            <p>The Paragraphs module in Drupal provides editors with a component driven architecture for building pages. Morpht has been developing Paragraph approaches to site building since 2015. This case study captures some of the content from a Drupal 7 "Paragraphs Demo" site which was built to showcase what could be done with Paragraphs.</p>
                            <Button> Exolore!</Button>
                        </div>
                    </SubCartContainer>
                </CardContainer>

                <CardContainer>
                     <SubCartContainer>
                        <ImageContainer></ImageContainer>
                        <div>
                            <p>The Paragraphs module in Drupal provides editors with a component driven architecture for building pages. Morpht has been developing Paragraph approaches to site building since 2015. This case study captures some of the content from a Drupal 7 "Paragraphs Demo" site which was built to showcase what could be done with Paragraphs.</p>
                            <Button> Exolore!</Button>
                        </div>
                    </SubCartContainer>
                </CardContainer>

            </HomeContainer>
        </>
    );
};

export default Home;