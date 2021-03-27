import React, { useState } from 'react'
import iziToast from "izitoast"
import LineProgress from '../../components/LineProgress'
import './style.scss'

// Booking Steps
import CreateTrip from './Steps/CreateTrip'
import Quote from './Steps/Quote'
import Submit from './Steps/Submit'


const progresSteps = [10, 40, 75, 100]

const BookingTourForm = () => {
	const [step, setStep] = useState(1);
	const [tripData, setTripData] = useState();
	const [quoteData, setQuoteData] = useState();

	const submitBooking = () => {
		setStep(4);
		iziToast.show({
			message: 'Booking is registered successfully.'
		});
	}

	const gotoQuote = (data) => {
		setTripData(data);
		setStep(2);
	}

	const gotoSubmit = (data) => {
		setQuoteData(data);
		setStep(3);
	}

	return(
		<div className="booking-tour-form">
			<div className="d-flex mb-4 w-100 ">
				<div style={{flex: 1}}>
					<LineProgress titles={[
						"Information about the group",
						"Select destinations",
						"Submit for a quote"
					]} value={progresSteps[step-1]}/>
				</div>
			</div>
			<div className="steps">
				{ step === 1 && <CreateTrip nextStep = {(data) => gotoQuote(data)}/>}
				{ step === 2 && <Quote nextStep = {(data) => gotoSubmit(data)} tripData={tripData}/>}
				{ (step === 3 || step === 4) && <Submit nextStep = {(data) => submitBooking(data)}/>}
			</div>
		</div>
	)
}

export default BookingTourForm