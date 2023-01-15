import Image from 'next/image';

const Items = ({ img, title, desc }) => {
	return (
		<div className=''>
			<Image src={img} />
			<h3 className='text-white text-sm'>{title}</h3>
			<p className='text-gray text-xs'>{desc}</p>
		</div>
	);
};

export default Items;
