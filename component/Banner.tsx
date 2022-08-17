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
                <div tabIndex={0} className='left' style={{
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
                    <p tabIndex={0} style={BannerContent}><span style={Bold}>제 5회 선린인터넷고등학교 소프트웨어 나눔 축제</span></p>
                    <p tabIndex={0} style={{
                        ...BannerContent,
                        lineHeight: '34px'
                    }}>
                        <span style={Bold}>2022년 8월 27일 토요일 13시부터</span> <br/>
                        8월 27일 토요일 17시까지
                    </p>
                    <p tabIndex={0} style={BannerContent}>
                        서울특별시 용산구 원효로97길 33-4 <span style={Bold}>선린인터넷고등학교</span>에서
                    </p>
                    <div tabIndex={0} style={{
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
                    }} onClick={()=>{
                        const getDate = (date: Date): Date => {
                            return new Date(+date + (date.getTimezoneOffset() * 60 * 1000) + 9 * 60 * 60 * 1000);
                        }
                        const start = getDate(new Date(2022,7,16));
                        const end = getDate(new Date(2022,7,22));
                        const now = getDate(new Date());
                        if(+now < +start) alert('신청기간이 아닙니다.\n(8월 16일부터 22일까지입니다.)');
                        else if (+now > +end) alert('신청이 마감되었습니다.');
                        else window.location.href='https://docs.google.com/forms/d/1jDD0eo-88FUTLaKCYaP1yNZem38VtLfCdGf1v6ETCsQ/viewform?ts=62f75da3&edit_requested=true';
                    }}>
                        <span>지금 신청하기</span>
                        <img src='images/arrow_forward_white.svg' alt='배너 배경'/>
                    </div>
                </div>
            </PageWrapper>
        </div>
    )
}

export default Banner;