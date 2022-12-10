import React, {  } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Navigation } from "swiper";

const content = [
    {
        title: 'Vulputate Mollis Ultricies Fermentum Parturient',
        button: 'Read More',
        image: require('./../../images/main-slider/slide1.jpg'),
    },
    {
        title: 'Tortor Dapibus Commodo Aenean Quam',
        button: 'Discover',
        image: require('./../../images/main-slider/slide2.jpg'),
    },
    {
        title: 'Tortor Dapibus Commodo Aenean Quam',
        button: 'Discover',
        image: require('./../../images/main-slider/slide3.jpg'),
    }
];

export default function HomeOneSlider() {
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
	return (
		<>
			<Swiper 
				//speed= {2000}				
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
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							<button className="site-button">{item.button}</button>
						</div>
					</SwiperSlide>	
				))}				
				<div className="swiper-button-prev" ref={navigationPrevRef}></div>
				<div className="swiper-button-next" ref={navigationNextRef}></div>
				
			</Swiper>
		</>
	);
}