import { BiMessageAlt } from 'react-icons/bi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Image from 'next/image';
import heroImage from '../assets/img/hero.svg';

const Hero = () => {
	return (
		<div className='mt-20 grid grid-cols-1 sm:grid-cols-2'>
			<div className='flex flex-col items-center md:items-start justify-center'>
				<h3 className='text-white font-bold text-center sm:text-left w-[100%] text-3xl md:text-5xl'>
					We Help People To <br /> Bring Their Ideas <br /> Alive
				</h3>

				<p className='text-gray text-center md:text-left w-[100%] my-5 md:w-[80%] md:w-[45%]'>
					A talented team to help you in your journey on creating
					usefull and easy to use product
				</p>
				<div className='flex flex-col sm:flex-row items-center justify-center sm:justify-between w-[90%] sm:w-auto'>
					<div className='flex items-center justify-center rounded-md  bg-primary w-full sm:w-auto my-5 px-3 py-2 cursor-pointer '>
						<p className='text-white text-sm mr-2'>Let's Talk</p>
						<BiMessageAlt className='text-white' />
					</div>
					<div className='flex items-center ml-5 cursor-pointer'>
						<p className='text-white mr-2'>Check our Services</p>
						<AiOutlineArrowRight className='text-white' />
					</div>
				</div>
			</div>
			<div className='flex items-center justify-center mt-5 '>
				<Image
					src={heroImage}
					alt='heroImage'
					className='object-cover'
				/>
			</div>
		</div>
	);
};

export default Hero;
