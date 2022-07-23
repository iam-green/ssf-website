import type { NextPage } from "next";
import Head from "next/head";
import Application from "../component/Application";
import Banner from "../component/Banner";
import ClubList from "../component/ClubList";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Introduce from "../component/Introduce";
import MobileBanner from "../component/MobileBanner";
import PageWrapper from "../component/PageWrapper";
import Schedule from "../component/Schedule";
import { useMediaQuery } from "react-responsive";

const Home: NextPage = () => {
    const isDesktop = useMediaQuery({ minWidth: 795 });
    return (
        <>
            <Head>
                <title>SSF</title>
                <meta name="description" content="선린인터넷고등학교 소프트웨어 나눔축제" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/> { /* Error */ }
            { isDesktop ? <Banner/> : <MobileBanner/> }  { /* Error */ }
            <PageWrapper>
                <Introduce id='introduce'/>
                <ClubList id='club'/>
                <Schedule id='schedule'/>
                <Application id='application'/>
            </PageWrapper>
            <Footer/>
        </>
    );
};

export default Home;