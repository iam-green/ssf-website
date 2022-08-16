import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ClubData from "../Club.json";

const ClubCard = ({ data, value }:{ data: any, value: any }) => {
    const desktop = useMediaQuery({ minWidth: 970 });
    const [isDesktop, setIsDesktop] = useState(true);
    useEffect(() => setIsDesktop(desktop), [desktop]);

    return (
        <div key={ClubData[data].name} style={{
            height: '180px',
            background: '#F6F2F0',
            borderRadius: '8px',
            padding: '20px',
            ...isDesktop ? {
                width: '31%',
                margin: '7px',
            } : {
                maxWidth: '500px',
                width: '85%',
                margin: 'auto auto 10px'
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }} onClick={() => value(data)}>
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
                    }}>{ClubData[data].name}</div>
                    <div style={{
                        fontFamily: 'SUIT',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '14px',
                        lineHeight: '19px',
                        color: '#55423D',
                        marginBlock: '10px',
                        wordBreak: 'keep-all'
                    }}>{ClubData[data].desc}</div>
                </div>
                <img
                    src={`images/club/${ClubData[data].name.toLowerCase().replace(/:/g, '').replace(/ /g, '')}.svg`}
                    width='70px'
                    height='70px'
                    alt={`${ClubData[data].name} logo`}
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
    )
}

export default ClubCard;