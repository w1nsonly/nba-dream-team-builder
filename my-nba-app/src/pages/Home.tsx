import styled from "styled-components";
import { useState } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Filters } from "../filters/Filters";

const HomeMain = styled.main`
`;


export function Home() {

    return (
        <>
            <Header />
            <HomeMain>
                <h3>Filters</h3>
                <Filters />
            </HomeMain>
            <Footer />
        </>
    )
}