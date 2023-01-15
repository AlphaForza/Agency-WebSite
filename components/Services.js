import Card from './Card';

const Services = () => {
	return (
		<div>
			<h3 className='text-white text-2xl md:text-3xl md:mb-5 text-center md:text-left'>
				The Services We Offers
			</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 text-center sm:text-left'>
				<h3 className='text-white text-3xl  w-[100%] sm:w-[80%] my-10 sm:my-0'>
					We offer a variaty of services to help you to grow and build
					your brand and help you with developing your Products
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2'>
					{[
						{
							title: 'UI/UX Design ,Web Design',
							desc: 'Makeing your product clean and easy to use it the important thing for us',
							btn: 'Learn more',
						},
						{
							title: 'Front-End-Development',
							desc: 'Makeing your product clean and easy to use it the important thing for us',
							btn: 'Learn more',
						},
					].map((item, index) => (
						<Card
							key={index}
							title={item.title}
							desc={item.desc}
							btn={item.btn}
						/>
					))}
				</div>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-10'>
				{[
					{
						title: 'Marketing Digital,Social Media ',
						desc: 'Grow your communty with our inbound marketing and social media merketing',
						btn: 'Show More',
					},
					{
						title: 'Brand Stratgey &Art Diraction',
						desc: 'Grow your communty with our inbound marketing and social media merketing',
						btn: 'Show More',
					},
					{
						title: 'Visual Identity Logo Brand',
						desc: 'Grow your communty with our inbound marketing and social media merketing',
						btn: 'Show More',
					},
					{
						title: 'Video / Ads Production',
						desc: 'Grow your communty with our inbound marketing and social media merketing',
						btn: 'Show More',
					},
				].map((item, index) => (
					<Card
						key={index}
						title={item.title}
						desc={item.desc}
						btn={item.btn}
					/>
				))}
			</div>
		</div>
	);
};

export default Services;
