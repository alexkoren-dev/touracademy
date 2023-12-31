import React, { useEffect } from "react"

import TourCarousel from 'components/TourCarousel'
import TourItem from 'components/TourItem'
import BookingTourForm from 'components/BookingTour'

import tourBus from 'assets/images/landing/Tour-Academy-Bus.gif'
import topBg from 'assets/images/landing/top-grapes.svg'
import itemImg from 'assets/images/landing/item-img.png'

const TourItemData = [
	{
		title: 'Classic budget tour',
		type: 'Cultural Tours',
		description: 'If you have limited budget for your trip, you can travel with us by this tour and see most part of Armenia.',
		days: 4,
		nights: 7,
		period: '10-14 feb',
		cost: 215,
		feedback: 5,
		image: itemImg
	},
	{
		title: 'Classic budget tour',
		type: 'Cultural Tours',
		description: 'If you have limited budget for your trip, you can travel with us by this tour and see most part of Armenia.',
		days: 4,
		nights: 7,
		period: '10-14 feb',
		cost: 215,
		feedback: 5,
		image: itemImg
	},
	{
		title: 'Classic budget tour',
		type: 'Cultural Tours',
		description: 'If you have limited budget for your trip, you can travel with us by this tour and see most part of Armenia.',
		days: 4,
		nights: 7,
		period: '10-14 feb',
		cost: 215,
		feedback: 5,
		image: itemImg
	},
	{
		title: 'Classic budget tour',
		type: 'Cultural Tours',
		description: 'If you have limited budget for your trip, you can travel with us by this tour and see most part of Armenia.',
		days: 4,
		nights: 7,
		period: '10-14 feb',
		cost: 215,
		feedback: 5,
		image: itemImg
	},
	{
		title: 'Classic budget tour',
		type: 'Cultural Tours',
		description: 'If you have limited budget for your trip, you can travel with us by this tour and see most part of Armenia.',
		days: 4,
		nights: 7,
		period: '10-14 feb',
		cost: 215,
		feedback: 5,
		image: itemImg
	},
	{
		title: 'Classic budget tour',
		type: 'Cultural Tours',
		description: 'If you have limited budget for your trip, you can travel with us by this tour and see most part of Armenia.',
		days: 4,
		nights: 7,
		period: '10-14 feb',
		cost: 215,
		feedback: 5,
		image: itemImg
	}
]

const Landingpage = ({}) => {
  console.log('111111111111111111111');
  return (
  	<div className="landing-page">
  		<section className="poster">
  			<img src={topBg} className="img-responsive position-absolute"/>
  			<img src={tourBus} className="img-responsive"/>
  		</section>
  		<section className="welcome">
  			<div className="container fulid mb-5">
	  			<h1 className="text-center">Welcome to Tour Academy!</h1>
	  			<p className="text-center mx-auto large" style={{maxWidth: 1000}}>
	  				<i>
	  				On our web page you can find prices for individual, group and corporate tours with specially developed and multiply realized programs. The variety of trips is as diverse as our country itself – from classical sightseeing tours to food and wine tours as well as guided backpacking trips, <br/>hiking and trekking in mountains. You can also get therapeutic tours to popular Jermuk resort and Tsaghkadzor winter ski resort. We offer the largest choice of hotels in Yerevan and regions of Armenia, with seasonal prices. All the rates, <br/>mentioned on our web page for 2020, are valid and refreshed depending on season, discount availability, special offers and hot tours.
	  				</i>
	  			</p>
	  			<div className="row">
	  				<div className="col-md-4">
	  					<div className="px-3">
		  					<h3 className="text-black text-center">Best suggestions</h3>
		  					<TourCarousel 
		  						items={
		  							TourItemData.map((item, index) => <TourItem data={item} key={index}/>)
		  						}
		  					/>
		  				</div>
	  				</div>
	  				<div className="col-md-4">
	  					<div className="px-3">
		  					<h3 className="text-black text-center">One Day</h3>
		  					<TourCarousel 
		  						items={
		  							TourItemData.map((item, index) => <TourItem data={item} key={index}/>)
		  						}
		  					/>
		  				</div>
	  				</div>
	  				<div className="col-md-4">
	  					<div className="px-3">
		  					<h3 className="text-black text-center">Fix Date</h3>
		  					<TourCarousel 
		  						items={
		  							TourItemData.map((item, index) => <TourItem data={item} key={index}/>)
		  						}
		  					/>
		  				</div>
	  				</div>
	  			</div>
	  		</div>
  		</section>
  		<section className="applyTour p-4">
  			<div className="container fulid mb-5">
	  			<h2 className="text-center mb-4">
	  				<i>Choose one of our tours or create your own tour!</i>
	  			</h2>
	  			<BookingTourForm />
	  		</div>
  		</section>
    </div>
  )
}

export default Landingpage
