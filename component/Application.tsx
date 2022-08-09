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
                        context='접수 결과는 8월 22일 오후 저녁에 개별적으로 안내되며 캠프별 인원은 10명입니다. 참가자에게는 교재가 배송되며 교육 수료 후 이수증이 발급됩니다.' 
                        color='#FCF7DB'
                        style={CardCSS}
                    />
                    <Card
                        title={<>신청 방법</>}
                        context='8월 16일(화)부터 8월 22일(월) 오후 1시까지 이 페이지 하단에 있는 신청 버튼을 통해 접수하실 수 있습니다.'
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
                        onClick={()=>{
                            const getDate = (date: Date): Date => {
                                return new Date(+date + (date.getTimezoneOffset() * 60 * 1000) + 9 * 60 * 60 * 1000);
                            }
                            const start = getDate(new Date(2022,7,16));
                            const end = getDate(new Date(2022,7,22,13));
                            const now = getDate(new Date());
                            if(+now < +start) alert('신청기간이 아닙니다.\n(8월 16일부터 22일까지입니다.)');
                            else if (+now > +end) alert('신청이 마감되었습니다.');
                            else window.location.href='';
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Application;