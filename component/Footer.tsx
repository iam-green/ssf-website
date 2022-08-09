import { CSSProperties, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const FooterCSS: CSSProperties = {
    width: '100%',
    backgroundColor: '#F6F2F0',
}

const Footer = () => {
    const desktop = useMediaQuery({ minWidth: 795 });
    const [ isDesktop, setIsDesktop ] = useState(true);
    useEffect(()=>setIsDesktop(desktop),[desktop]);
    
    return (
        <footer style={{
            width: '100%',
            backgroundColor: '#F6F2F0',
            ...isDesktop ? {
                height: '191px',
                flexDirection: 'row',
                display: 'flex',
            } : {
                height: '254px',
            }
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexGrow: 1,
                ...isDesktop ? {
                    alignItems: 'center',
                } : {
                    float: 'left',
                    width: '60%',
                    marginTop: '30px',
                    marginLeft: '60px',
                    alignItems: 'flex-start'
                } 
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <span style={{
                        fontFamily: 'SUIT',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '20px',
                        lineHeight: '25px',
                        color: '#55423D',
                        margin: '10px 10px 10px 5px',
                    }}>선린인터넷고등학교</span>
                    <img src='images/sunrin.svg' alt='선린인터넷고등학교 로고' />
                </div>
                <span style={{
                    fontFamily: 'SUIT',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '15px',
                    lineHeight: '19px',
                    color: '#9F8F8A',
                    margin: '5px'
                }}>
                    서울특별시 용산구 원효로97길 33-4
                </span>
                <span style={{
                    fontFamily: 'SUIT',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '15px',
                    lineHeight: '19px',
                    color: '#9F8F8A',
                    margin: '5px'
                }}>
                    © 2022 Sunrin Internet Highschool
                </span>
            </div>
            <div style={{
                ...isDesktop ? {
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginBottom: '40px',
                    alignItems: 'flex-end'
                } : {
                    clear: 'both',
                    float: 'right',
                    width: '50%'
                }
            }}>
                <div style={{
                    display: 'inline-flex',
                    margin: '5px',
                    marginLeft: '20px',
                    cursor: 'pointer'
                }}>
                    <img src='images/facebook_brown.png' width='20px' height='20px' />
                    <span style={{
                        fontFamily: 'SUIT',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '15px',
                        lineHeight: '19px',
                        color: '#9F8F8A'
                    }} onClick={()=>window.open('/facebook','_blank')}>SSF 페이스북</span>
                </div>
                <div style={{
                    display: 'inline-flex',
                    margin: '5px',
                    marginLeft: '20px',
                    cursor: 'pointer'
                }}>
                    <img src='images/sunrin_brown.svg' width='20px' height='20px' />
                    <span style={{
                        fontFamily: 'SUIT',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '15px',
                        lineHeight: '19px',
                        color: '#9F8F8A'
                    }} onClick={()=>window.open('https://sunrint.sen.hs.kr','_blank')}>선린 홈페이지</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;