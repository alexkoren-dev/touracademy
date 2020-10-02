import React from 'react'
import TourItem from './TourItem'
import Slider from "react-slick";

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
}

const TourCarousel = ({items}) => {
	return(
		<Slider {...settings}>
			{items.map((item, key) => <TourItem data={item}/>)}
	    </Slider>
	)
}

export default TourCarousel