import { CSSProperties } from "react";
import PageWrapper from "./PageWrapper";

const Bold: CSSProperties = {
    fontWeight: 700
}

const BannerContent: CSSProperties = {
    fontSize: '20px',
    textAlign: 'right',
    color: '#FFFFFF'
}

const Banner = () => {
    return (
        <div className="banner" style={{
            maxWidth: '100%',
            height: '551px',
            backgroundImage: 'url("/images/pattern.svg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <PageWrapper style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '100%',
            }}>
                <div className='left' style={{
                    fontFamily: 'Kollektif',
                    fontSize: '64px',
                    lineHeight: '77px',
                    color: '#FFFFFF',
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                }}>
                    &gt; Sunrin<br />
                    <span style={Bold}>S</span>
                    oftware<br />
                    <span style={Bold}>S</span>
                    hare <br />
                    <span style={Bold}>F</span>
                    estival
                </div>
                <div className="right" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    height: '300px',
                    width: '100%',
                    marginRight: '20px'
                }}>
                    <p style={BannerContent}><span style={Bold}>제 5회 선린인터넷고등학교 소프트웨어 나눔 축제</span></p>
                    <p style={{
                        ...BannerContent,
                        lineHeight: '34px'
                    }}>
                        <span style={Bold}>2022년 9월 1일 월요일부터</span> <br/>
                        9월 10일 토요일까지
                    </p>
                    <p style={BannerContent}>
                        서울특별시 용산구 원효로97길 33-4 <span style={Bold}>선린인터넷고등학교에서</span>
                    </p>
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
                        cursor: 'pointer',
                        marginBlock: '40px'
                    }}>
                        <span onClick={()=>alert('현재 개발중입니다.')}>지금 신청하기</span>
                        <img src='images/arrow_forward_white.svg' alt='배너 배경'/>
                    </div>
                </div>
            </PageWrapper>
        </div>
    )
}

export default Banner;