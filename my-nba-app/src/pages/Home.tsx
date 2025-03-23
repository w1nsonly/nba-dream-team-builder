import styled from "styled-components";
import { useState } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Filter } from "../filters/Filter";

const HomeMain = styled.main`
`;


export function Home() {

    return (
        <>
            <Header />
            <HomeMain>
                <Filter />
            </HomeMain>
            <Footer />
        </>
    )
}