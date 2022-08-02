import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ClubData from '../Club.json';

const ClubList = ({ id, value }: { id: string, value: any }) => {
    const desktop = useMediaQuery({ minWidth: 970 });
    const [ isDesktop, setIsDesktop ] = useState(true);
    useEffect(()=>setIsDesktop(desktop),[desktop]);

    const ClubRenderer = () => {
        const result: React.ReactNode[] = [];
        for(let i=0;i<Math.ceil(ClubData.length/3);i++) {
            let tag: React.ReactNode[] = [];
            for(let j=0;j<ClubData.slice(i*3,i*3+3).length;j++) {
                const { name, desc } = ClubData[i*3+j];
                tag.push(
                    <div key={name} style={{
                        height: '180px',
                        background: '#F6F2F0',
                        borderRadius: '8px',
                        margin: '7px',
                        padding: '20px',
                        ...isDesktop ? {
                            width: '31%',
                        } : {
                            maxWidth: '500px',
                            width: '100%'
                        },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }} onClick={()=>value(i*3+j)}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <div>
                                <div style={{
                                    fontFamily: 'SUIT',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '24px',
                                    lineHeight: '30px',
                                    color: '#3B2821',
                                }}>{name}</div>
                                <div style={{
                                    fontFamily: 'SUIT',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: '14px',
                                    lineHeight: '19px',
                                    color: '#55423D',
                                    marginBlock: '10px',
                                    wordBreak: 'keep-all'
                                }}>{desc}</div>
                            </div>
                            <img
                                src={`images/club/${name.toLowerCase().replace(/:/g,'').replace(/ /g,'')}.svg`}
                                width='70px'
                                height='70px'
                                alt={`${name} logo`}
                            />
                        </div>
                        <div>
                            <span style={{
                                fontFamily: 'SUIT',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '15px',
                                lineHeight: '19px',
                                color: '#9F8F8A',
                                wordBreak: 'keep-all',
                                cursor: 'pointer',
                                float: 'right'
                            }}>자세히 보기</span>
                        </div>
                    </div>
                );
            }
            result.push(
                <div key={i+1} style={{
                    width: '100%',
                    display: 'flex',
                    ...isDesktop ? {
                        flexDirection: 'row',
                        justifyContent: 'center',
                    } : {
                        flexDirection: 'column',
                        alignItems: 'center'
                    }
                }}>
                    { tag }
                </div>
            );
        }
        return result;
    }
    
    return (
        <>
            <div id={id}></div>
            <div style={{
                marginBlock: '50px',
                marginBottom: '100px'
            }}>
                <div id='club' style={{
                    fontFamily: 'SUIT',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '15px',
                    lineHeight: '19px',
                    textAlign: 'center',
                    color: '#E47D5B',
                    padding: '10px',
                }}>캠프소개</div>
                <div style={{
                    fontFamily: 'SUIT',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '24px',
                    lineHeight: '30px',
                    textAlign: 'center',
                    color: '#3B2821',
                    padding: '10px'
                }}>나에게 맞는 캠프를 찾아보세요</div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignContent: 'center',
                    margin: '30px'
                }}>
                    { ClubRenderer() }
                </div>
            </div>
        </>
    )
}

export default ClubList;