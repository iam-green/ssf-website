import { useEffect, useState, CSSProperties } from "react";
import PageWrapper from "./PageWrapper";
import { useMediaQuery } from "react-responsive";

const Link: CSSProperties = {
    color: '#55423D',
    fontSize: '15px'
}

const Header = () => {
    const desktop = useMediaQuery({ minWidth: 795 });
    const [ isDesktop, setIsDesktop ] = useState(true);
    useEffect(()=>setIsDesktop(desktop),[desktop]);

    return (
        <header style={{
            position: 'sticky',
            top:'0',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: '60px',
            background: 'white',
            boxShadow:' 0px 4px 20px rgba(96, 96, 96, 0.25)',
            zIndex: 5,
        }}>
            <PageWrapper style={{
                flexDirection: 'row',
                alignItems:'center',
                justifyContent:'space-between'
            }}>
                <div className='logo'>
                    <img src='/images/logo.svg' alt='소프트웨어 나눔축제 로고' style={{ width: '51px', marginInline: '24px' }}/>
                </div>
                <div className='menu'>
                <ul style={{
                    display: 'flex',
                    listStyle: 'none',
                    gap: '36px',
                    marginInline: '24px'
                }}>
                    { isDesktop && <li><a style={Link} href="#introduce">SSF 소개</a></li> }
                    <li><a style={Link} href="#club">캠프 소개</a></li>
                    <li><a style={Link} href="#schedule">일정</a></li>
                    <li><a style={Link} href="#application">신청하기</a></li>
                </ul>
                </div>
            </PageWrapper>
        </header>
    )
}

export default Header;