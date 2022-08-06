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
import { useEffect, useState } from "react";
import ClubData from '../Club.json';
import ClubModal from "../component/ClubModal";

const Home: NextPage = () => {
    const desktop = useMediaQuery({ minWidth: 795 });
    const [ isDesktop, setIsDesktop ] = useState(true);
    const [ nowModal, setModal ] = useState(-1);
    useEffect(()=>setIsDesktop(desktop),[desktop]);

    useEffect(() => {
        document.body.style.overflow = (0 <= nowModal && nowModal <= ClubData.length-1) ?  'hidden' : 'unset';
    }, [nowModal]);
    
    return (
        <>
            <Head>
                <title>SSF</title>
                <meta name="description" content="선린인터넷고등학교 소프트웨어 나눔축제" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            { nowModal != -1 && <ClubModal data={ClubData[nowModal]} value={setModal}/> }
            <Header/>
            { isDesktop ? <Banner/> : <MobileBanner/> }
            <PageWrapper>
                <Introduce id='introduce'/>
                <ClubList id='club' value={setModal}/>
                <Schedule id='schedule'/>
                <Application id='application'/>
            </PageWrapper>
            <Footer/>
        </>
    );
};

export default Home;