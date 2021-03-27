import React from 'react'
import DestinationFlowPlus from 'assets/images/icons/destination_plus.svg'
import DestinationFlowEnd from 'assets/images/icons/destination_end.svg'
import DestinationFlowStart from 'assets/images/icons/destination_start.svg'


const DestinationFlow = ({name, isStart, isLast}) => {
    return (
        <div className="destination-flow-item">
            <img className={isStart?'start':(isLast?'last':'plus')}
                src={isStart?DestinationFlowStart:(isLast?DestinationFlowEnd:DestinationFlowPlus)} />
            <label>{name}</label>
        </div>
    )
}

export default DestinationFlow