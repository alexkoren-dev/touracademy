import React, {useState} from 'react'
import moment from 'moment'
import DestinationFlow from './DestinationFlow'
import Map from 'components/Map'
import DestinationPicker from 'components/DestinationPicker'

import UserIcon from 'assets/images/icons/user.svg'
import CalerdarIcon from 'assets/images/icons/calendar.svg'
import CarIcon from 'assets/images/icons/car.svg'
import BikeIcon from 'assets/images/icons/bike.svg'
import HikingIcon from 'assets/images/icons/hiking.svg'
import MotorcycleIcon from 'assets/images/icons/motorcycle.svg'
import MarkerIcon from 'assets/images/icons/marker.svg'
import TrackListIcon from 'assets/images/icons/tracklist.svg'

const TOUR_TYPES = {
    'Car': CarIcon,
    'Motorcycle': MotorcycleIcon,
    'Bike': BikeIcon,
    'Hiking': HikingIcon
}

const Quote = ({nextStep, tripData}) => {
    const [destinations, setDestinations] = useState([tripData.destination]);

    const onSelectDestinations = (newDestination) => {
        setDestinations([tripData.destination, ...newDestination])
    }

    return(
        <div className="quote-form">
            <div className="row">
                <div className="col-md-9">
                    <div className="map-trakcer">
                        <Map />
                    </div>
                    <div className="destination-picker">
                        <h3 className="text-center my-4"><i>Next places recommended travel to</i></h3>
                        <DestinationPicker onSelectDestination={onSelectDestinations}/>
                    </div>
                    <h5 className="text-center my-4"><i>You can add to your tour one of our <a href="#">activities</a></i></h5>
                    <button
                        className="btn btn-primary btn-block mx-auto"
                        onClick={() => nextStep()}
                        style={{width: 200}}
                    >
                        SEND A QUOTE
                    </button>
                </div>
                <div className="col-md-3">
                    <div className="panel p-4 bg-white h-100">
                        <div className="trip-info mb-4">
                            <div className="d-flex align-items-center text-black mb-2">
                                <div className="w-10 d-flex align-items-center justify-content-center icon mr-2">
                                    <img src={UserIcon} height="25"></img>
                                </div>
                                {tripData.name}
                            </div>
                            <div className="d-flex align-items-center text-black mb-2">
                                <div className="w-10 d-flex align-items-center justify-content-center icon mr-2">
                                    <img src={CalerdarIcon} height="25"></img>
                                </div>
                                {moment(new Date(tripData.date)).format('DD MMM YYYY')}
                            </div>
                            <div className="d-flex align-items-center text-black mb-2">
                                <div className="w-10 d-flex align-items-center justify-content-center icon mr-2">
                                    <img src={TOUR_TYPES[tripData.type]} height="25"></img>
                                </div>
                                by {tripData.type}
                            </div>
                            <div className="d-flex align-items-center text-black mb-2">
                                <div className="w-10 d-flex align-items-center justify-content-center icon mr-2">
                                    <img src={MarkerIcon} height="25"></img>
                                </div>
                                {tripData.destination}
                            </div>
                        </div>
                        <div className="trip-info mb-5">
                            <div className="d-flex align-items-center text-black mb-3 ">
                                <div className="w-10 d-flex align-items-center justify-content-center icon mr-2">
                                    <img src={TrackListIcon} height="25"></img>
                                </div>
                                <strong>Your trake</strong>
                            </div>
                            <div className="destination-tree">
                                {destinations.map((dest, key) => 
                                    <DestinationFlow key={key} name={dest.toLowerCase()} isStart={key === 0} isLast={key === (destinations.length - 1)}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quote;