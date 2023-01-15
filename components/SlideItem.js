import Image from 'next/image';

const SlideItem = ({ desc, img, name, job }) => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<p className='text-sm md:text-md text-gray w-[100%] md:w-[50%] px-5 sm:px-0 mb-5'>
				{' '}
				{desc}{' '}
			</p>
			<div>
				<Image src={img} alt='personOne' />
				<p className='text-white'>{name}</p>
				<span className='text-gray text-sm md:text-md'>{job}</span>
			</div>
		</div>
	);
};

export default SlideItem;
