import React, { useState } from 'react'
import LineProgress from 'components/LineProgress'
import './style.scss'

// Booking Steps
import CreateTrip from './Steps/CreateTrip'
import Quote from './Steps/Quote'
import Submit from './Steps/Submit'

const BookingTourForm = () => {
	const [step, setStep] = useState(1);

	const submitBooking = () => {
		alert()
	}

	return(
		<div className="booking-tour-form">
			<div className="d-flex mb-4 w-100 ">
				<div style={{flex: 1}}>
					<LineProgress title="Information about the group" value={25}/>
				</div>
				<div style={{flex: 1}}>
					<LineProgress title="Select destinations" value={0}/>
				</div>
				<div style={{flex: 1}}>
					<LineProgress title="Submit for a quote" value={0}/>
				</div>
			</div>
			<div className="steps">
				{ step === 1 && <CreateTrip nextStep = {() => setStep(2)}/>}
				{ step === 2 && <Quote nextStep = {() => setStep(3)}/>}
				{ step === 3 && <Submit nextStep = {() => submitBooking()}/>}

			</div>
		</div>
	)
}

export default BookingTourForm