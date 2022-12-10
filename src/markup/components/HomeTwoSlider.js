import React, {  } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Navigation } from "swiper";


const content = [
    {
        button: '-25% OFF ONLY THIS MONTH',
        title: 'SEA TOURS ONLY THIS MONTH',
		image: require('./../../images/main-slider/slide2.jpg'),
		description: 'Discover amzaing places at exclusive deals',
        
    },
    {
        button: '-25% OFF ONLY THIS MONTH',
        title: 'SEA TOURS ONLY THIS MONTH',
		description: 'Discover amzaing places at exclusive deals',
		image: require('./../../images/main-slider/slide1.jpg'),
    },
    {
        button: '-25% OFF ONLY THIS MONTH',
        title: 'SEA TOURS ONLY THIS MONTH',
		description: 'Discover amzaing places at exclusive deals',
        image: require('./../../images/main-slider/slide3.jpg'),
    }
]; 



export default function HomeTwoSlider() {
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
	return (
		<>
			<Swiper 
				speed= {1500}				
				loop={true}
				navigation={{
					prevEl: navigationPrevRef.current,
					nextEl: navigationNextRef.current,
				}}	
				/* autoplay= {{
				   delay: 500,
				}} */				
				 onSwiper={(swiper) => {
					// Delay execution for the refs to be defined
					setTimeout(() => {
					  // Override prevEl & nextEl now that refs are defined
					  swiper.params.navigation.prevEl = navigationPrevRef.current
					  swiper.params.navigation.nextEl = navigationNextRef.current

					  // Re-init navigation
					  swiper.navigation.destroy()
					  swiper.navigation.init()
					  swiper.navigation.update()
					})
				}} 
				//navigation={true} 
				modules={[Navigation, Autoplay]} 
				className="banner-swiper"
			>
				{content.map((item, index) => (
					<SwiperSlide key={index} style={{ background :'url('+ item.image +' )'}}>
						<div className="inner">
							<button className="site-button react-slide-btn">{item.button}</button>
							<h1 className="react-slide-title">{item.title}</h1>
							<p className="react-slide-desc">{item.description}</p>
						</div>
					</SwiperSlide>	
				))}				
				<div className="swiper-button-prev" ref={navigationPrevRef}></div>
				<div className="swiper-button-next" ref={navigationNextRef}></div>
				
			</Swiper>
		</>
	);
}