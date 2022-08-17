import { CSSProperties, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Card from "./Card";

const Schedule = ({ id } : { id: string }) => {
    const desktop = useMediaQuery({ minWidth: 1100 });
    const [ isDesktop, setIsDesktop ] = useState(true);
    useEffect(()=>setIsDesktop(desktop),[desktop]);

    const CardCSS: CSSProperties = isDesktop ? {

    } : {
        width: '80%'
    }

    return (
        <>
            <div id={id}></div>
            <div style={{
                marginBlock: '50px',
                marginBottom: '100px'
            }}>
                <div style={{
                    fontFamily: 'SUIT',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '15px',
                    lineHeight: '19px',
                    textAlign: 'center',
                    color: '#E47D5B',
                    padding: '10px',
                }}>일정</div>
                <div tabIndex={0} style={{
                    fontFamily: 'SUIT',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '24px',
                    lineHeight: '30px',
                    textAlign: 'center',
                    color: '#3B2821',
                    padding: '10px',
                    marginBottom: '50px'
                }}>축제 일정에 대해 알아볼까요?</div>
                <div style={{
                    display: 'flex',
                    ...isDesktop ? {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    } : {
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        height: '1000px'
                    }
                }}>
                    <Card
                        title={<>8월 16일<br/>접수 시작</>}
                        context='소프트웨어 나눔축제 접수를 시작합니다.'
                        color='#FCF7DB'
                        icon={<img src='images/schedule_1.png' alt='schedule logo'/>}
                        style={CardCSS}
                    />
                    <Card
                        title={<>8월 22일<br/>접수 종료</>}
                        context='참가자를 선정하고 안내문자를 발송합니다.'
                        color='#FCF1E0'
                        icon={<img src='images/schedule_2.png' alt='schedule logo'/>}
                        style={CardCSS}
                    />
                    <Card
                        title={<>8월 27일 13시<br/>캠프 운영</>}
                        context='캠프별 수업을 진행합니다.'
                        color='#FBEDE8'
                        icon={<img src='images/schedule_3.png' alt='schedule logo'/>}
                        style={CardCSS}
                    />
                    <Card
                        title={<>8월 27일 17시<br/>캠프 종료</>}
                        context='소프트웨어 나눔축제를 마무리합니다.'
                        color='#FBEBE8'
                        icon={<img src='images/schedule_4.png' alt='schedule logo'/>}
                        style={CardCSS}
                    />
                </div>
            </div>
        </>
    )
}

export default Schedule;