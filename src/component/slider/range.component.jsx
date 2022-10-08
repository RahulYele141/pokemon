import React, { useState } from 'react'
import './range.style.css'
import ReactSlider from 'react-slider';

const Range = () => {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(210)

    return (
        <div className='slider'>
            <ReactSlider defaultValue={[min, max]} className='slider' trackClassName='tracker' min={0} max={210} minDistance={40} step={2} withTracks={true} pearling={true} renderThumb={
                (props) => { return <div {...props} className='track'></div> }
            }
                renderTrack={
                    (props) => { return <div {...props} className='track'></div> }
                }
                onChange={([min, max]) => {
                    setMin(min);
                    setMax(max);
                }}
            />


        </div>
    );
}

export default Range