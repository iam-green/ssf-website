import { CSSProperties, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Card from "./Card";

const Application = ({ id } : { id: string }) => {
    const desktop = useMediaQuery({ minWidth: 1100 });
    const [ isDesktop, setIsDesktop ] = useState(true);
    useEffect(()=>setIsDesktop(desktop),[desktop]);

    const CardCSS: CSSProperties = isDesktop ? {
        width: '37%',
        height: '180px'
    } : {
        width: '80%',
        height: '180px'
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
                }}>신청하기</div>
                <div style={{
                    fontFamily: 'SUIT',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '24px',
                    lineHeight: '30px',
                    textAlign: 'center',
                    color: '#3B2821',
                    padding: '10px',
                    marginBottom: '50px'
                }}>이제 신청해보세요!</div>
                <div style={{
                    display: 'flex',
                    ...isDesktop ? {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    } : {
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        height: '650px'
                    }
                }}>
                    <Card
                        title={<>접수 결과 및 인원</>} 
                        context='접수 결과는 8월 30일 오후 5시에 개별적으로 안내되며 캠프별 인원은 10명입니다. 참가자에게는 교재가 배송되며 교육 수료 후 이수증이 발급됩니다.' 
                        color='#FCF7DB'
                        style={CardCSS}
                    />
                    <Card
                        title={<>신청 방법</>}
                        context='8월 24일(화)부터 8월 30일(월) 오후 1시까지 이 페이지 하단에 있는 신청 버튼을 통해 접수하실 수 있습니다.'
                        color='#FCF1E0'
                        style={CardCSS}
                    />
                    <Card
                        title={<>참가<br/>신청하기</>}
                        context='이제 신청해보세요!'
                        color='#FBEDE8'
                        icon={<img src='images/arrow_forward_brown.svg'/>}
                        style={{
                            ...isDesktop ? {
                                width: '20%',
                                height: '180px'
                            } : {
                                width: '80%',
                                height: '180px'
                            },
                            cursor: 'pointer'
                        }}
                        iconStyle={{
                            position: 'absolute',
                            top: '25%',
                            left: isDesktop ? '80%' : '85%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: '0',
                        }}
                        onClick={()=>alert('현재 개발중입니다.')}
                    />
                </div>
            </div>
        </>
    )
}

export default Application;