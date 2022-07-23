import { CSSProperties } from "react";

const Bold: CSSProperties = {
    fontWeight: 700
}

const MobileBanner = () => {
    return (
        <div className="banner" style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '551px',
            backgroundImage: 'url("/images/pattern.svg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <div style={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'row',
                marginInline: '30px',
                height: '50%'
            }}>
                <div style={{ 
                    flexGrow: 1,
                    fontFamily: 'Kollektif',
                    fontSize: '40px',
                    lineHeight: '48px',
                    color: '#FFFFFF',
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <span>&gt; Sunrin</span>
                    <span><span style={Bold}>S</span>oftware</span>
                    <span><span style={Bold}>S</span>hare</span>
                    <span><span style={Bold}>F</span>estival</span>
                </div>
                <div style={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    fontFamily: 'SUIT',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '20px',
                    textAlign: 'right',
                    marginBottom: '45px',
                    color: '#FFFFFF'
                }}>
                    <span style={{ margin: '6px' }}>제 5회</span>
                    <span style={{ margin: '6px', ...Bold }}>선린인터넷고등학교</span>
                    <span style={{ margin: '6px' }}>소프트웨어 나눔 축제</span>
                </div>
            </div>
            <div style={{
                flexGrow: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                height: '50%',
                fontFamily: 'SUIT',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '20px',
                color: '#ffffff',
                width: '100%'
            }}>
                <div style={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '28%',
                    marginLeft: '30px'
                }}>
                    <span style={{ margin: '6px', ...Bold }}>2022년 9월 1일 월요일부터</span>
                    <span style={{ margin: '6px' }}>9월 10일 토요일까지</span>
                </div>
                <div style={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '28%',
                    float: 'right',
                    textAlign: 'right',
                    marginRight: '30px'
                }}>
                    <span style={{ margin: '6px' }}>서울특별시 용산구 원효로97길 33-4</span>
                    <span style={{ margin: '6px' }}><span style={Bold}>선린인터넷고등학교</span>에서</span>
                </div>
                <div style={{
                    clear: 'both',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flexGrow: 1,
                    height: '44%',
                    marginLeft: '30px'
                }}>
                    <div style={{
                        display: 'flex',
                        width: '148px',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px 16px',
                        border: '1px solid #E3DAD7',
                        borderRadius: '12px',
                        background: 'none',
                        color: 'white',
                        cursor: 'pointer'
                    }}>
                        <span onClick={()=>alert('현재 개발중입니다.')}>지금 신청하기</span>
                        <img src='images/arrow_forward_white.svg' alt='배너 배경'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileBanner;