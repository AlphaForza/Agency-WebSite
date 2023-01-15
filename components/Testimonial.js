import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import personOne from '../assets/img/personOne.png';
import personTwo from '../assets/img/personTwo.png';
import Image from 'next/image';
import SlideItem from './SlideItem';

const Testimonial = () => {
	return (
		<div className='mt-40 w-full  h-[40vh] md:h-[60vh]'>
			<Carousel
				showArrows={true}
				infiniteLoop={true}
				showThumbs={false}
				showStatus={false}
				autoPlay={true}
				interval={6100}>
				{[
					{
						desc: 'Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product',
						img: personOne,
						name: 'Smail yeshqwq',
						job: 'CEO Innova',
					},
					{
						desc: 'Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product',
						img: personTwo,
						name: 'Djamila Malak',
						job: 'Co-Founder RoboKabyie',
					},
				].map((card) => (
					<div>
						<SlideItem
							desc={card.desc}
							img={card.img}
							name={card.name}
							job={card.job}
						/>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default Testimonial;
