import React from 'react';

export function ColorBlock(props){
    const { color } = props;
    return (<div className="colorBlock" style={{backgroundColor:color}}>
            {color}
        </div>
    )
}

// Do not forget to export your component once you have built it!
export default ColorBlock
