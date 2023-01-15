import {
	FiFacebook,
	FiInstagram,
	FiTwitter,
	FiDribbble,
} from 'react-icons/fi';

const Footer = () => {
	return (
		<div className='container mx-auto'>
			<div className='flex mx-5 sm:mx-0'>
				<div className='flex'>
					<div className='w-[80%] md:w-[50%]'>
						<h2 className='text-white text-lg md:text-2xl mb-5'>
							DigitUX
						</h2>
						<p className='text-gray'>
							DigitUx is a Digital agencay that create User centred
							Product that help her client to evolve
						</p>
					</div>
					<div className='hidden md:inline-flex flex-col'>
						<h3 className='mb-5 text-white text-lg'>About</h3>
						<div className='text-gray'>
							<p className='mb-2'>About US</p>
							<p className='mb-2'>Study Case</p>
							<p className='mb-2'>Blogs</p>
							<p className='mb-2'>Portfolio</p>
							<p className='mb-2'>Careers</p>
						</div>
					</div>
				</div>
				<div className='flex justify-between'>
					<div className='hidden md:inline-flex flex-col'>
						<h3 className='text-white text-lg mb-5'>Follow Us</h3>
						<div className='mr-10'>
							<div className='flex items-center mb-4'>
								<FiFacebook className='text-white text-lg' />
								<p className='ml-2 text-gray'>fb.come/DigitUX</p>
							</div>
							<div className='flex items-center mb-4'>
								<FiInstagram className='text-white text-lg' />
								<p className='ml-2 text-gray'>@DigitUX</p>
							</div>
							<div className='flex items-center mb-4'>
								<FiTwitter className='text-white text-lg' />
								<p className='ml-2 text-gray'>@DigitUX</p>
							</div>
							<div className='flex items-center mb-4'>
								<FiDribbble className='text-white text-lg' />
								<p className='ml-2 text-gray'>fb.come/DigitUX</p>
							</div>
						</div>
					</div>
					<div>
						<h3 className='text-white text-lg mb-5'>
							Get in touch with Us
						</h3>
						<p className='text-gray mb-2'>Need Answers? Need help?</p>
						<input
							placeholder='Your email'
							className='rounded-md px-2 py-2'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
