import { CSSProperties } from "react";
import { useMediaQuery } from "react-responsive";

const FooterCSS: CSSProperties = {
    width: '100%',
    backgroundColor: '#F6F2F0',
}

const Footer = () => {
    const isDesktop = useMediaQuery({ minWidth: 795 });
    return (
        <footer style={ isDesktop ? {
            ...FooterCSS,
            height: '191px',
            // display: 'flex',
            // flexDirection: 'row',
            // justifyContent: 'center'
        } : {
            ...FooterCSS,
            height: '254px',
        } }>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexGrow: '1'
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
                        margin: '10px',
                        marginRight: '10px'
                    }}>선린인터넷고등학교</span>
                    <img src='images/sunrin.svg' alt='선린인터넷고등학교 로고'/>
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

            }}>
                
            </div>
        </footer>
    )
}

export default Footer;