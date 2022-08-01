import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const info_content = {
    fontSize: '15px',
    lineHeight: '35px',
    color: '#55423D'
};

const Introduce = ({ id }: { id: string }) => {
    const desktop = useMediaQuery({ minWidth: 1049 });
    const [isDesktop, setIsDesktop] = useState(true);
    useEffect(() => setIsDesktop(desktop), [desktop]);

    return (
        <>
            <div id={id}></div>
            <div style={isDesktop ? {
                marginTop: '130px',
                width: '100%',
                height: '600px',
            } : {
                marginBlock: '160px'
            }}>
                <div style={isDesktop ? {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                } : {
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    justifyContent: 'space-around'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        flexGrow: '1',
                        ...isDesktop ? {
                            height: '350px',
                        } : {
                            textAlign: 'left',
                            paddingInline: '40px'
                        }
                    }}>
                        <div id='introduce' style={{
                            color: '#E47D5B',
                            fontSize: '15px',
                            lineHeight: '40px',
                        }}>SFF 소개</div>
                        <div style={{
                            fontWeight: '700',
                            fontSize: '24px',
                            color: '#3B2821'
                        }}>
                            선린인터넷고등학교 { !isDesktop && <br/> }
                            소프트웨어 { !isDesktop && <br/> }
                            나눔 축제에 대해</div>
                        <p style={info_content}>
                            선린인터넷고등학교 소프트웨어 나눔 축제, SSF는 2018년부터 개최된 <br />
                            선린인터넷고등학교의 최대 축제 중 하나입니다. 먼저 소프트웨어를 경험한 <br />
                            사람들이 미래 세대에게 소프트웨어에 대한 경험을 나누고, 다양한 소프트웨어를 <br />
                            직접 만들고 체험해볼 수 있는 행사입니다.
                        </p>
                        <p style={info_content}>
                            축제에는 수도권에 거주하는 모든 중학생들이 신청할 수 있으며, 학생들은 게임 개발, <br />
                            웹 및 서버 개발 등 다양한 소프트웨어 분야에 대해 체험해볼 수 있습니다.
                        </p>
                        <div style={{
                            display: 'flex',
                            width: '190px',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            boxSizing: 'border-box',
                            alignItems: 'center',
                            padding: '10px 16px',
                            border: '1px solid #E3DAD7',
                            borderRadius: '12px',
                            cursor: 'pointer'
                        }} onClick={()=>window.location.href='https://www.facebook.com/SSFKorea'}>
                            <span>SSF 페이스북 페이지</span>
                            <img src='images/arrow_forward.svg'></img>
                        </div>
                    </div>

                    <div style={{
                        flexGrow: '1',
                        display: "flex",
                        flexDirection: 'row',
                        alignItems: 'center',
                        ...isDesktop ? {
                            justifyContent: 'space-around'
                        } : {
                            justifyContent: 'space-evenly'
                        }
                    }}>
                        <img src='images/info1.png' width='326px' height='326px' />
                        <img src='images/info2.png' width='219px' height='412px' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Introduce;