import React, { useState } from "react";
import ProfilePage from "./ProfilePage";
import MatchPage from "./MatchPage";
import Header from "../components/Header";
import styled from "styled-components";

const PageAlign = styled.div`
font-family: roboto;
text-align: center;
`


export default function MainPage() {

    const [page, setPage] = useState("profile");

    const renderCurrentPage = () => {
        switch (page){
            case "profile":
                return <ProfilePage />
            case "match":
                return <MatchPage />
            default:
                return <ProfilePage />
            };
    };

    const goToProfilePage = () => {
        setPage("profile")
    };

    const goToMatchPage = () => {
        setPage("match")
    };
   
        return (
            <PageAlign>
                <Header
                page={page}
                goToProfilePage={goToProfilePage}
                goToMatchPage={goToMatchPage}
                /> 

                <hr />
                <section>            
                {renderCurrentPage()}   
                </section>             
            </PageAlign>
        );
    };


