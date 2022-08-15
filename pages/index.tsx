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
                <title>2022 SSF</title>
                <meta charSet='utf-8' />
                <meta name="description" content="선린인터넷고등학교 소프트웨어 나눔축제" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://swfestival.kr" />
                <meta property="og:title" content="2022 SSF" />
                <meta property="og:description" content="선린인터넷고등학교 소프트웨어 나눔축제" />
                <meta property="og:image" content="https://swfestival.kr/images/logo.svg" />
                <meta property="og:locale" content="ko_KR" />
                <meta name="twitter:card" content="website" />
                <meta name="twitter:title" content="2022 SSF" />
                <meta name="twitter:description" content="선린인터넷고등학교 소프트웨어 나눔축제" />
                <meta name="twitter:image" content="https://swfestival.kr" />
                <meta name="twitter:domain" content="SSF" />
                <meta name="naver-site-verification" content="2fe98733389cff756a56515849b639897c9bef9f" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://swfestival.kr"></link>
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