import { CSSProperties, MouseEventHandler, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Card = ({
    title,
    context,
    color,
    icon,
    style,
    iconStyle,
    onClick
}: {
    title: React.ReactNode,
    context: string,
    color: string
    icon?: React.ReactNode;
    style?: CSSProperties;
    iconStyle?: CSSProperties;
    onClick?: MouseEventHandler;
}) => {
    const desktop = useMediaQuery({ minWidth: 1100 });
    const [ isDesktop, setIsDesktop ] = useState(true);
    useEffect(()=>setIsDesktop(desktop),[desktop]);

    return (
        <div tabIndex={0} style={{
            background: color,
            borderRadius: '8px',
            padding: '20px',
            position: 'relative',
            ...isDesktop ? {
                width: '250px',
                height: '250px',
            } : {
                width: '225px',
                height: '210px',
                maxWidth: '500px'
            },
            ...style,
        }} onClick={onClick}>
            { icon && <div style={ iconStyle ? iconStyle : {
                position: 'absolute',
                top: '50%',
                left: isDesktop ? '50%' : '65%',
                transform: 'translate(-50%, -50%)',
                zIndex: '0',
            }}>
                {icon}
            </div> } 
            <div style={{
                fontFamily: 'SUIT',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '24px',
                lineHeight: '30px',
                color: '#3B2821',
                position: 'relative',
                zIndex: '1',
                wordBreak: 'keep-all',
                width: '70%'
            }}>
                {title}
            </div>
            <div style={{margin:'15px'}} />
            <div style={{
                fontFamily: 'SUIT',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '15px',
                lineHeight: '19px',
                color: '#55423D',
                position: 'relative',
                zIndex: '1',
                wordBreak: 'keep-all',
                width: '80%'
            }}>
                {context}
            </div>
        </div>
    )
}

export default Card;