import React, { useEffect, useState } from 'react'
import './style.scss'

const destinations = [
    'YEREVAN', 'GYUMRI', 'VANADZOR', 'VAGHARSHAPAT', 'HRAZDAN', 'ABOVYAN', 'KAPAN', 'ARARAT'
]

const DestinationPicker = ({onSelectDestination}) => {
    const [selectedDestinations, setDestinations] = useState([])

    const pickDestination = (dest) => {
        if(!selectedDestinations.includes(dest)) {
            setDestinations([...selectedDestinations, dest])
        } else {
            setDestinations(selectedDestinations.filter(d => d != dest))
        }
    }

    useEffect(() => {
        onSelectDestination(selectedDestinations)
    }, [selectedDestinations])
    
    return (
        <div className="destination-picker">
            <div className="row">
                {
                    destinations.map((dest, key) => 
                        <div key={key} className="col-md-3 text-center mb-3" onClick={() => pickDestination(dest)}>
                            <div className={`button mx-auto ${selectedDestinations.includes(dest) && 'active'}`}>
                                {dest}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default DestinationPicker