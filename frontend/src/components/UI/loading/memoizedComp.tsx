// @ts-ignore
import React, {memo} from 'react';
import "./loading.css"

const MemoizedComp = memo(() => {
    // noinspection JSValidateTypes
    const SpanElem = ({index}) => {
        return <span style={{"--i": index} as React.CSSProperties}></span>
    }

    return (
        <div className="loader">
            {(() => {
                const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
                const result = []
                for (let i = 0; i < arr.length; i++) {
                    result.push(<SpanElem index={i} key={i}></SpanElem>)
                }
                return result;
            })()}
        </div>
    );
});

export default MemoizedComp;