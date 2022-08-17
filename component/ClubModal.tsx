import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const ClubModal = ({ data, value }: {
    data: {
        name: string;
        desc: string;
        website: string;
        instagram: string;
        facebook: string;
        club_desc: string;
        camp_desc: string;
    },
    value: any
}) => {
    const desktop = useMediaQuery({ minWidth: 970 });
    const [ isDesktop, setIsDesktop ] = useState(true);
    useEffect(()=>setIsDesktop(desktop),[desktop]);

    document.addEventListener('keydown',(event: KeyboardEvent) => {
        if(event.key=='Escape') {
            event.preventDefault();
            value(-1);
        }
    });

    return (
        <div style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            zIndex: 100,
            backgroundColor: 'rgba(0, 0, 0, 0.43)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            animationDuration: '0.25s',
            animationTimingFunction: 'ease-out',
            animationName: 'fadeIn',
            animationFillMode: 'forwards',
        }} onClick={e=>{
            if(e.target == e.currentTarget) value(-1);
        }}>
            <div style={{
                backgroundColor: '#FEFBFA',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                ...isDesktop ? {
                    width: '40%',
                    padding: '30px'
                } : {
                    width: '85%',
                    // height: '70%',
                    padding: '25px',
                    maxWidth: '555px',
                    maxHeight: '996px'
                }
            }}>
                <div style={{
                    // height: '60%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    zIndex: 101,
                }}>
                    <div>
                        <div style={{
                            fontFamily: 'SUIT',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '24px',
                            lineHeight: '27px',
                            color: '#3B2821',
                            float: 'left'
                        }}>
                            { data.name }
                        </div>
                        <img
                            style={{
                                float: 'right',
                                cursor: 'pointer'
                            }}
                            src='images/close.svg'
                            onClick={()=>value(-1)}
                            alt='close modal'
                        />
                    </div>
                    <div>
                        <div style={{
                            fontFamily: 'SUIT',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '15px',
                            lineHeight: '19px',
                            color: '#55423D',
                            width: '65%',
                            wordBreak: 'keep-all',
                            float: 'left'
                        }}>
                            { data.club_desc }
                        </div>
                        <img
                            style={{
                                float: 'right',
                                width: isDesktop ? '20%' : '30%',
                                height: '90%'
                            }}
                            src={`images/club/${data.name.toLowerCase().replace(/:/g,'').replace(/ /g,'')}.svg`}
                            alt={`${data.name} icon`}
                        />
                    </div>
                    <div>
                        <div style={{
                            display: 'inline-flex',
                            margin: '5px',
                            marginLeft: '0px',
                            cursor: 'pointer'
                        }}>
                            <img src='images/home_brown.svg' width='20px' height='20px' alt={`${data.name} website`}/>
                            <span style={{
                                fontFamily: 'SUIT',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: '15px',
                                lineHeight: '19px',
                                color: '#9F8F8A'
                            }} onClick={()=>window.open(data.website,'_blank')}>홈페이지</span>
                        </div>
                        { data.instagram.length>0 && 
                            <div style={{
                                display: 'inline-flex',
                                margin: '5px',
                                marginLeft: '12px',
                                cursor: 'pointer'
                            }}>
                                <img src='images/instagram_brown.svg' width='20px' height='20px' alt={`${data.name} instagram`}/>
                                <span style={{
                                    fontFamily: 'SUIT',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: '15px',
                                    lineHeight: '19px',
                                    color: '#9F8F8A'
                                }} onClick={()=>window.open(data.instagram,'_blank')}>인스타그램</span>
                            </div>
                        }
                        <div style={{
                            display: 'inline-flex',
                            margin: '5px',
                            marginLeft: '12px',
                            cursor: 'pointer'
                        }}>
                            <img src='images/facebook_brown.png' width='20px' height='20px' alt={`${data.name} facebook`}/>
                            <span style={{
                                fontFamily: 'SUIT',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: '15px',
                                lineHeight: '19px',
                                color: '#9F8F8A'
                            }} onClick={()=>window.open(data.facebook,'_blank')}>페이스북</span>
                        </div>
                    </div>
                </div>
                <div style={{
                    // height: isDesktop ? '50%' : '40%',
                    background: '#F6F2F0',
                    borderRadius: '8px',
                    marginTop: '20px',
                    padding: isDesktop ? '30px' : '20px'
                }}>
                    <div style={{
                        fontFamily: 'SUIT',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '20px',
                        lineHeight: '25px',
                        color: '#3B2821'
                    }}>
                        프로그램 소개
                    </div>
                    <p style={{
                        fontFamily: 'SUIT',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '15px',
                        lineHeight: '19px',
                        color: '#55423D'
                    }}>
                        { data.camp_desc }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ClubModal;