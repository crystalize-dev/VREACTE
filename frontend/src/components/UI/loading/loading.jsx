import React, {memo} from 'react';
import "./loading.css";
import MemoizedComp from "./memoizedComp.tsx";

const Loading = memo(({status}) => {
    return (
        <div className="loadingWrapper"
             style={status ? {filter: "opacity(1)"} : {filter: "opacity(0)", pointerEvents: "none"}}>
            <MemoizedComp/>
        </div>
    );
});

export default Loading;