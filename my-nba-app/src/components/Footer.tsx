import styled from "styled-components";

/* Footer */
const StyledFooter =  styled.footer`
    background-color: #00274d;
    color: bisque;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    position: relative;
`;

const FooterText = styled.p`
    font-size: 1rem;
`;

const FooterLink = styled.a `
    color: bisque;

    &:hover {
    text-decoration: underline;
    }
`;


export function Footer(){
    return (
        <StyledFooter>
             <FooterText>All rights reserved by Winson Dong <FooterLink  href="https://www.linkedin.com/in/winsondong/" target="_blank">Credits</FooterLink>&copy;</FooterText>
        </StyledFooter>
    );
};