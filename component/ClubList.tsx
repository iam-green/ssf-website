import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from "react-responsive";
import ClubData from '../Club.json';
import ClubCard from "./ClubCard";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from "swiper";

const ClubList = ({ id, value }: { id: string, value: any }) => {
    const desktop = useMediaQuery({ minWidth: 970 });
    const [isDesktop, setIsDesktop] = useState(true);
    useEffect(() => setIsDesktop(desktop), [desktop]);

    const MobileRenderer = (count:number=3) => {
        const result = [];
        for (let i = 0; i < Math.ceil(ClubData.length / count); i++) {
            const swiper = [];
            for (let j = 0; j < ClubData.slice(i * count, (i + 1) * count).length; j++) swiper.push(<ClubCard data={i*count+j} value={value}/>);
            result.push(<SwiperSlide>{swiper}</SwiperSlide>);
        }
        return result;
    }

    return (
        <>
            <div id={id}></div>
            <div style={{
                marginBlock: '50px',
                marginBottom: '100px'
            }}>
                <div id='club' style={{
                    fontFamily: 'SUIT',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '15px',
                    lineHeight: '19px',
                    textAlign: 'center',
                    color: '#E47D5B',
                    padding: '10px',
                }}>캠프소개</div>
                <div style={{
                    fontFamily: 'SUIT',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '24px',
                    lineHeight: '30px',
                    textAlign: 'center',
                    color: '#3B2821',
                    padding: '10px'
                }}>나에게 맞는 캠프를 찾아보세요</div>
                {/* { ClubRenderer() } */}
                {isDesktop ?
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignContent: 'center',
                        margin: '30px'
                    }}>
                        {ClubData.map((e, i) => <ClubCard key={e.name} data={i} value={value}/>)}
                    </div>
                    :
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={1}
                        pagination={{ clickable: false }}
                        style={{
                            marginTop: '30px',
                            height: '600px'
                        }}
                    >
                        { MobileRenderer() }
                    </Swiper>
                }
            </div>
        </>
    )
}

export default ClubList;