import { ReactNode, useEffect, useState } from "react";

type TSimpleDisplayProps = {
    count: number
}  

export const SimpleDisplay = (props:TSimpleDisplayProps) => {
    
    const [displayName, setDisplayName] = useState("");

    useEffect(() => {
        setDisplayName(String(props.count));
        console.log(`Old displayName: ${displayName}`);
        console.log(`New displayName: ${props.count}`);
        
    }, [props.count]);

    return (
        <div>
            <h1>{displayName}</h1>
        </div>
    );
}