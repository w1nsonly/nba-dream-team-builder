import styled from "styled-components";
import { Nav } from "./Nav";

const StyledHeader = styled.header`
    display: flex;
    background-color: #0033a0;
    color: #ffffff;
    padding: 0.5% 2%;
    justify-content: space-between;
    

    @media screen and (max-width: 750px) { 
        justify-content: center;
        align-items: center;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
 `;


const Title = styled.h1`
    margin: 0;
    font-size: calc(0.5px + 2vw);
    font-weight: 500;
`;

const Season =  styled.p`
    font-size: calc(3px + 1vw);
    font-style: italic;
`;



export function Header(){
    return (
        <StyledHeader>
            <HeaderContainer>
                <Title>NBA Dream Team Builder</Title>
                <Season>2016-17 season</Season>
            </HeaderContainer>
            <Nav />
        </StyledHeader>
    );
};